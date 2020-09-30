// @flow
import { SOURCE_BASE, STORE_BASE } from '../modules/index'
import type { $Record } from 'Airtable.Fetch'

export default class AirtableModel {
    fetchRecord = async (id: string): Promise<$Record> => {
        const record = await SOURCE_BASE('2020 Attendees').find(id)
        return record
    }

    updateRecord = async (id: string, fields: $Record): Promise<$Record> => {
        const updated = await STORE_BASE('BADGES').update(id, fields)
        return updated
    }

    createRecord = async (fields: $Record): Promise<$Record> => {
        const created = await STORE_BASE('BADGES').create(fields)
        return created
    }

}

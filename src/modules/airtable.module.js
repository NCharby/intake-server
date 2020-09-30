// @flow
import Airtable from 'airtable'

Airtable.configure({
    endpointUrl: process.env.AIRTABLE_ENDPOINT_URL,
    apiKey: process.env.AIRTABLE_API_KEY
})

export const SOURCE_BASE = new Airtable.base(process.env.AIRTABLE_SOURCE_BASE)
export const STORE_BASE = new Airtable.base(process.env.AIRTABLE_STORE_BASE)
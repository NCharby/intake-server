// @flow
import express from 'express';
import type { $Record } from 'Airtable.Fetch'
import { AirtableModel } from '../models/index'

class FetchRouteController {
    requestRecord = async (req:express$Request, res:express$Response): Promise<any> => {
        try {
            const r:$Record = await AirtableModel.fetchRecord('reckw2pVnAG7ZkuOx')
            res.send(r.fields)
        } catch (error) {
            res.send(error)
        }
    }
}

export default new FetchRouteController()
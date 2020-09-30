import express from 'express';
import asyncHandler from "express-async-handler"
import fetchRoute from './fetch.route'
import updateRoute from './update.route'
import uploadRoute from './upload.route'


const indexRouter = express.Router();

indexRouter.get('/load', asyncHandler(fetchRoute.requestRecord))

indexRouter.post('/update', asyncHandler(updateRoute))

indexRouter.post('/upload', asyncHandler(uploadRoute))

export default indexRouter;

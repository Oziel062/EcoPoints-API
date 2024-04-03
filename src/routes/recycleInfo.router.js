import { Router } from "express";
import { createRecycleInfo, getAllRecycleInfo } from "../controllers/recycleInfo.controller.js";

const recycleInfo = Router()

recycleInfo.post('/api/createRecycleInfo', createRecycleInfo);
recycleInfo.get('/api/infos', getAllRecycleInfo)

export { recycleInfo }
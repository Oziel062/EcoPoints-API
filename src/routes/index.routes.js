import { Router } from "express";
import { recycleInfo } from "./recycleInfo.router.js";
import {company} from "../routes/company.router.js"


const routers = Router()

routers.use(company)
routers.use(recycleInfo)


export { routers }
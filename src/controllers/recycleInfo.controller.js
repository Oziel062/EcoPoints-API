import { RecycleInfoEntity } from "../entities/RecyclingInfo.Entity.js";
import { RecycleInfoService } from "../services/RecycleInfo.service.js";
import { SUCESS } from "../shared/messages.js";


const instanceRecycleInfoService = new RecycleInfoService();

export async function createRecycleInfo(req, res) {
    const { title, content } = req.body;
    await instanceRecycleInfoService.createRecycleInfoService(title, content);
    res.status(201)
        .send({ message: SUCESS.CREATED_INFO })
};

export async function getAllRecycleInfo(req, res) {
    const infos = await instanceRecycleInfoService.getAllRecycleInfo();
    res.status(200).json({ infos })
}

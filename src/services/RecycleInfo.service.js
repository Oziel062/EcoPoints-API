import { RecycleInfoEntity } from "../entities/RecyclingInfo.Entity.js";

export class RecycleInfoService {
    async createRecycleInfoService(title, content) {
        try {
            await RecycleInfoEntity.sync();
            const newInfo = await RecycleInfoEntity.create({
                title, content
            });
            return newInfo;
        } catch (error) {
            return error
        }
    };

    async getAllRecycleInfo() {
        const recycleInfos = await RecycleInfoEntity.findAll()
        return recycleInfos;
    };
}
import { Router } from "express"
import * as controllers from "../controllers/monsters.js"

const router = Router()

router.get("/monsters", controllers.getMonsters);
router.get("/monsters/:id", controllers.getMonster);
router.post("/monsters", controllers.createMonster);
router.put("/monsters/:id", controllers.updateMonster);
router.delete("/monsters/:id", controllers.deleteMonster);

export default router;
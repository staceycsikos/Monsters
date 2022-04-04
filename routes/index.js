import { Router } from "express"; 
//only some of the functions of express

import monstersRoutes from "./monsters.js";

const router = Router();

router.get("/", (request, response) => response.send("This is the api root, nothing crazy here."));
router.use("/", monstersRoutes);

export default router
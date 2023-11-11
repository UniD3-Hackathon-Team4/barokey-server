import { Router } from "express";
import {
  getAllKeywords,
  getKeywordDetails,
  getStationCrowds
} from './controller.js'

const router = Router();

router.use("/keywords", getAllKeywords);
router.use("/keywords/:keyword", getKeywordDetails);
router.use("/station-crowds", getStationCrowds);

export { router };
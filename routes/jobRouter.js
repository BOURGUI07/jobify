import { Router } from "express";

const router = Router();

import {
  getAllJobs,
  updateJob,
  getJob,
  deleteJob,
  createJob,
  getJobsByCompany,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateJobId,
} from "../middleware/validationMiddleware.js";

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateJobId, getJob)
  .patch(validateJobId, validateJobInput, updateJob)
  .delete(validateJobId, deleteJob);
router.route("/company/:company").get(getJobsByCompany);

export default router;

import "express-async-errors";
import * as dotenv from "dotenv";

dotenv.config();

import express from "express";
import morgan from "morgan";

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

/*
const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log("SERVER RUNNING...");
});
*/
app.post("/", (req, res) => {
  res.json({ message: "data received", data: req.body });
});

// routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

/*
/////////////////// GET JOBS

app.get("/api/v1/jobs", getAllJobs);

//////////////////// CREATE JOB

app.post("/api/v1/jobs", createJob);

///////////////////// GET SINGLE JOB

app.get("/api/v1/jobs/:id", getJob);

/////////////////// UPDATE JOB

app.patch("/api/v1/jobs/:id", updateJob);

//////////////////// DELETE JOB

app.delete("/api/v1/jobs/:id", deleteJob);
*/

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "hello youness!" });
});

//////////////////////// NOT FOUND PAGE

app.use("*", (req, res) => {
  res.status(401).json({ msg: "Not found resource" });
});

import { errorHandlerMiddleware } from "./middleware/errorHandler.js";

app.use(errorHandlerMiddleware);

////////////////// MONGOOSE
import mongoose from "mongoose";
import { authenticateUser } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log("SERVER RUNNING...");
  });
} catch (err) {
  console.log(err.message);
  process.exit(1);
}

import morgan from "morgan";
import express from "express";
import helmet from "helmet";
import { router } from "./router.js";

const app = express();

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use('/', router);

export default app;
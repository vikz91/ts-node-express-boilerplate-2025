import express, { NextFunction, Request, Response } from "express";
import config from "@/config";
import routes from "@/routes";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(config.nodeEnv === "development" ? "dev" : "combined"));

app.use(routes);

// 404
app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (config.nodeEnv === "development") {
    console.error(err.stack);
  }
  res.status(500).json({ error: "Something broke!", msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server is running  at http://localhost:${config.port}`);
});

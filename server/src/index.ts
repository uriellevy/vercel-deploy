import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import connectDB from "./config";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

connectDB();
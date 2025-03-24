import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import connectDB from "./config";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:5174", "https://vercel-deploy-frontend-two.vercel.app"],
    credentials: true, // Allow cookies to be sent to the frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

connectDB();
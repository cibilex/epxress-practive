import express from "express";
import http from "http";
import user from "./routes/user.routes.js";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.get(
  "/:id",
  (req, res, next) => {
    console.log("hi world from home page", req.params);
    next();
  },
  (req, res, next) => {
    console.log("hi from second callback");
    res.json({
      message: "hi world",
    });
  }
);

app.use("/users/:user", user);
app.use("/static", express.static(path.join(__dirname, "/public")));
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

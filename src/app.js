import express from "express";
import route from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use("/users", route);

app.listen(3001, () => {
  console.log("servidor rodando na porta 3001");
});

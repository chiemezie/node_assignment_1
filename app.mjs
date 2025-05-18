import express from "express";
import path from "path";
import homeRouter from "./routes/home.mjs";
import usersRouter from "./routes/users.mjs";
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
//app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use("/", homeRouter);
app.use("/users", usersRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

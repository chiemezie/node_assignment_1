import express from "express";
import path from "path";

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.render("users", { users });
});

router.post("/", (req, res) => {
  const name = req.body.name;
  users.push(name);
  res.redirect("/users");
});

export default router;

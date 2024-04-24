const express = require("express");

const TaskController = require("../controllers/task.controller");

const router = express.Router();

router.get("/", async (req, res) => {
    return new TaskController(req, res).getAll();
});

router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getById();
});

router.post("/", async (req, res) => {
    return new TaskController(req, res).getCreate();
});

router.patch("/:id", async (req, res) => {
    return new TaskController(req, res).getUpadte();
});

router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).getDelete();
});

module.exports = router;

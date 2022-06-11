const router = require("express").Router()
const Task = require("./../models/task")

router.post("/add", async (req, res) => {
    try {
        const task = await new Task({
            task: req.body.task
        }).save()

        res.send(task)
    } catch(err) {
        res.status(401).send({ Error: "Error trying to add a new task. Please, try again!" })
    }
    
})

router.post("/tasks", async (req, res) => {
    try {
        const task = await Task.find()

        res.send(task)
    } catch(err) {
        res.status(401).send({ Error: "Error trying to list all tasks. Please, try again!" })
    }
    
})

router.post("/update/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, {task: req.body.task})

        res.send(task)
    } catch(err) {
        res.status(401).send({ Error: "Error trying to update a task. Please, try again!"})
        console.log(err)
    }
    
})

router.post("/delete/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        res.send(task)
    } catch(err) {
        res.status(401).send({ Error: "Error trying to delete a task. Please, try again!" })
        console.log(err)
    }
    
})

module.exports = router
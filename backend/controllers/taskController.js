const taskService = require("../services/taskService");

// Get tasks for a specific user
const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks(req.user.userid);
        res.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Create a task
const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = await taskService.createTask(title, description, req.user.userid);
        res.status(201).json(task);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update a task
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, iscomplete } = req.body;
    try {
        const task = await taskService.updateTask(id, title, description, iscomplete, req.user.userid);
        if (!task) {
            return res.status(404).json({ error: "Task not found or you do not have permission to update it." });
        }
        res.json(task);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const success = await taskService.deleteTask(id, req.user.userid);
        console.log("Delete function result:", success);

        if (!success) {
            return res.status(404).json({ error: "Task not found or you do not have permission to delete it." });
        }

        res.status(200).json({ message: "Task successfully deleted!" });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };


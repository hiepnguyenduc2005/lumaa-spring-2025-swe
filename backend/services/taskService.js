const { pool } = require("../config/db");

// Get tasks for a specific user
const getTasks = async (userid) => {
    try {
        const { rows } = await pool.query("SELECT * FROM tasks WHERE userid = $1", [userid]);
        return rows;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw new Error("Internal server error");
    }
};

// Create a task
const createTask = async (title, description, userid) => {
    try {
        const { rows } = await pool.query(
            "INSERT INTO tasks (title, description, userid) VALUES ($1, $2, $3) RETURNING *",
            [title, description, userid]
        );
        return rows[0];
    } catch (error) {
        console.error("Error creating task:", error);
        throw new Error("Internal server error");
    }
};

// Update a task
const updateTask = async (id, title, description, iscomplete, userid) => {
    try {
        const { rows } = await pool.query(
            "UPDATE tasks SET title = $1, description = $2, iscomplete = $3 WHERE id = $4 AND userid = $5 RETURNING *",
            [title, description, iscomplete, id, userid]
        );
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error("Error updating task:", error);
        throw new Error("Internal server error");
    }
};

// Delete a task
const deleteTask = async (id, userid) => {
    try {
        const { rowCount } = await pool.query(
            "DELETE FROM tasks WHERE id = $1 AND userid = $2",
            [id, userid]
        );
        return rowCount > 0;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw new Error("Internal server error");
    }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };

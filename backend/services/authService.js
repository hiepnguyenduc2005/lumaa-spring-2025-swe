const { pool } = require("../config/db");
const bcrypt = require("bcryptjs");

// Find a user by their username (to login)
const findUserByUsername = async (username) => {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    return result.rows[0]; 
};

// Create a new user (to register)
const createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
        "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
        [username, hashedPassword]
    );
    return result.rows[0]; 
};

module.exports = { findUserByUsername, createUser };

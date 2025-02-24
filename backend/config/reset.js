require("dotenv").config();
const { pool } = require("./db");

async function resetDatabase() {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");
        await client.query("DROP TABLE IF EXISTS tasks, users CASCADE");
        await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        `);
        await client.query(`
        CREATE TABLE tasks (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            iscomplete BOOLEAN DEFAULT FALSE,
            userid INTEGER REFERENCES users(id) ON DELETE CASCADE
        );
        `);
        await client.query("COMMIT");
        console.log("✅ Database reset and tables created successfully.");
    } catch (err) {
        await client.query("ROLLBACK");
        console.error("❌ Error resetting the database:", err);
    } finally {
        client.release();
    }
}
resetDatabase();

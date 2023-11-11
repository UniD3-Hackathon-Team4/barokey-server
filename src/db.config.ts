import pkg from "pg";
import * as process from "process";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DB_CONN
});
export default pool;

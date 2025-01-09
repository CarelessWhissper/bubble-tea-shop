import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    const result = await sql`SELECT 1`; // Just a simple query to test the DB connection
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

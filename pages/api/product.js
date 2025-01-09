import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch all products
    try {
      const products = await sql`SELECT * FROM products`;
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'POST') {
    // Add a new product
    const { name, price, type } = req.body;
    try {
      const result = await sql`
        INSERT INTO products (name, price, type) 
        VALUES (${name}, ${price}, ${type}) 
        RETURNING *`;
      res.status(201).json(result[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  res.status(405).send('Method Not Allowed');
}

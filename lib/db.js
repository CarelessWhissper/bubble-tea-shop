import { sql } from '@vercel/postgres';

export const query = async (queryString, params = []) => {
    try {
      const result = await sql([queryString, ...params]);
      return result.rows;
    } catch (error) {
      throw new Error(error.message);
    }
  };
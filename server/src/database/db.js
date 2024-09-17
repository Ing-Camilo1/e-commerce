import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '$uP3rS3cr3tP@ssw0rd!',
    database: 'ecommerce_db', 
    port: 3306
})
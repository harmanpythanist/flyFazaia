import mysql2 from 'mysql2'


const connection =mysql2.createPool({ host: '127.0.0.1',
  user: 'root',
  password: 'mrhassan125',
  database: 'flyfazaia',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0});

const db=connection.promise();

export {db}
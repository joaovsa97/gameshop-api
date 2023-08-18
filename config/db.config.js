const dbConfig = {
  HOST: "localhost",
  PORT: "1433",
  USER: "neosyx",
  PASSWORD: "123456",
  DB: "master",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
export default dbConfig
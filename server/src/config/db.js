const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "6200645431@Ys", // 👈 yaha apna password
  database: "college_portal"
});

db.connect((err) => {
  if (err) {
    console.log("❌ FULL DB ERROR:", err); // 👈 IMPORTANT
  } else {
    console.log("DB Connected ✅");
  }
});

module.exports = db;
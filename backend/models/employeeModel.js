const db = require("../config/db");

const Employee = {};

Employee.getAll = (callback) => {
  db.query("SELECT * FROM employees", callback);
};


Employee.getById = (id, callback) => {
  db.query("SELECT * FROM employees WHERE id = ?", [id], callback);
};

Employee.create = (data, callback) => {
  const sql = `
    INSERT INTO employees
    (first_name, last_name, email, phone, department_id, role_id, join_date, base_salary, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    data.first_name,
    data.last_name,
    data.email,
    data.phone,
    data.department_id,
    data.role_id,
    data.join_date,
    data.base_salary,
    data.status
  ], callback);
};

Employee.update = (id, data, callback) => {
  const sql = `
    UPDATE employees SET
    first_name=?, last_name=?, email=?, phone=?,
    department_id=?, role_id=?, join_date=?,
    base_salary=?, status=?
    WHERE id=?
  `;

  db.query(sql, [
    data.first_name,
    data.last_name,
    data.email,
    data.phone,
    data.department_id,
    data.role_id,
    data.join_date,
    data.base_salary,
    data.status,
    id
  ], callback);
};

Employee.delete = (id, callback) => {
  db.query("DELETE FROM employees WHERE id=?", [id], callback);
};

module.exports = Employee;

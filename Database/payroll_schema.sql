CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) UNIQUE
);

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(150) UNIQUE,
  phone VARCHAR(20),
  department_id INT,
  role_id INT,
  join_date DATE,
  base_salary DECIMAL(10,2),
  status VARCHAR(20),
  FOREIGN KEY (department_id) REFERENCES departments(id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT,
  date DATE,
  check_in TIME,
  check_out TIME,
  status VARCHAR(20),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE payroll (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT,
  month INT,
  year INT,
  base_salary DECIMAL(10,2),
  bonus_total DECIMAL(10,2),
  deduction_total DECIMAL(10,2),
  net_salary DECIMAL(10,2),
  generated_at TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

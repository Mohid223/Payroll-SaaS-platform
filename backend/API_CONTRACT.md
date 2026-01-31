# API CONTRACT - PAYROLL BACKEND

Base URL: /api
 
# AUTH APIs

POST /auth/login
Purpose: User login

POST /auth/register
Purpose: Create user

#  EMPLOYEE APIs

GET /employees
Purpose: Get all employees

GET /employees/:id
Purpose: Get single employee

POST /employees
Purpose: Create employee

PUT /employees/:id
Purpose: Update employee

DELETE /employees/:id
Purpose: Delete employee

# PAYROLL APIs

GET /payroll/:employeeId
Purpose: Get payroll data

POST /payroll/run
Purpose: Generate payroll

SUCCESS RESPONSE FORMAT

{
  "success": true,
  "data": {}
}

ERROR RESPONSE FORMAT

{
  "success": false,
  "message": "Error message"
}
 

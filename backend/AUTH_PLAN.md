# AUTHENTICATION & AUTHORIZATION PLAN

Authentication Method: JWT (JSON Web Token)

---------------------

LOGIN FLOW

1. User sends email and password
2. Server checks database
3. If correct → server creates JWT token
4. Token sent to user
5. User sends token in every request

Header format:

Authorization: Bearer TOKEN

---------------------

USER ROLES

admin
hr
employee

---------------------

ROLE PERMISSIONS

Admin:
- Create employee
- Delete employee
- Run payroll

HR:
- Create employee
- View payroll

Employee:
- View own payroll only

---------------------

MIDDLEWARE PLAN

authMiddleware:
- Check JWT token
- Verify user

roleMiddleware:
- Check user role
- Allow or block access

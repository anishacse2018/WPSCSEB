<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Student Login</title>
<style>
h1{
 text-align:center;
}
.center{
  align:center;
}
</style>
</head>
<body>
<h1>Welcome to Student Login Page!!</h1>
<div class="center">
<form action="bean.jsp" method="post">
<table>
<tr>
<td>Username</td>
<td><input type="text" name="username"></td>
</tr>
<tr>
<td>Password</td>
<td><input type="password" name="password"></td>
</tr>
<tr>
<td><input type="submit" value="submit" name="store"></td>
<td><input type="reset" value="reset"></td>
</tr>
</table>
</form>
</div>
</body>
</html>

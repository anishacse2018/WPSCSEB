<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<% 
String username =request.getParameter("username");
String password=request.getParameter("password");
%>
<% 
   wpsassign.MySqlBean beanread=new wpsassign.MySqlBean(); 
   beanread.setStore();
   String p=beanread.getUsername();
   String q=beanread.getPassword();
 %>
 <style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
 <% if (username.equals(p) && q.equals(password)) { %>
 <table>
<th colspan='7'>Personal Information</th>
 <tr>
<th>Rollno</th>
<th>Name</th>
<th>DOB</th>
<th>Gender</th>
<th>Address</th>
<th>Blood Group</th>
<th>Nationality</th>
</tr>
<tr>
<jsp:useBean id="beanone" class="wpsassign.Retrieve">
<td><jsp:getProperty name="beanone" property="rollno"/></td>
 <td><jsp:getProperty name="beanone" property="name"/></td>
 <td><jsp:getProperty name="beanone" property="dob"/></td>
 <td><jsp:getProperty name="beanone" property="gender"/></td>
 <td><jsp:getProperty name="beanone" property="address"/></td>
 <td><jsp:getProperty name="beanone" property="bloodgroup"/></td>
 <td><jsp:getProperty name="beanone" property="nationality"/></td>
 </tr>
 </table>
 <table>
 <th colspan='5'>Academic Information</th>
 <tr>
<th>Rollno</th>
<th>Name</th>
<th>Semester</th>
<th>10th GPA</th>
<th>Inter%</th>
<th>GPA</th>
</tr>
<td> <jsp:getProperty name="beanone" property="rollno"/></td>
<td> <jsp:getProperty name="beanone" property="name"/></td>
 <td><jsp:getProperty name="beanone" property="semester"/></td>
<td> <jsp:getProperty name="beanone" property="gpa10"/></td>
 <td><jsp:getProperty name="beanone" property="inter"/></td>
<td> <jsp:getProperty name="beanone" property="gpa"/></td>
</table>
<table>
<th colspan='4'>Proctor Details</th>
<tr>
<th>Proctorid</th>
<th>Proctorname</th>
<th>Proctorphone</th>
<th>Proctordept</th>
</tr>
<td><jsp:getProperty name="beanone" property="proctorid"/></td>
 <td><jsp:getProperty name="beanone" property="proctorname"/></td>
 <td><jsp:getProperty name="beanone" property="proctorphone"/></td>
 <td><jsp:getProperty name="beanone" property="proctordept"/></td>
 </table>
<table>
<th colspan='3'>Attendance</th>
<tr>
<th>Rollno</th>
<th>Name</th>
<th>Attendance</th>
</tr>
<td><jsp:getProperty name="beanone" property="rollno"/></td>
 <td><jsp:getProperty name="beanone" property="name"/></td>
 <td><jsp:getProperty name="beanone" property="attendances"/></td>
 </jsp:useBean>
 </table>
<%} else { %>
<h1>Invalid username/password.. Pls try again</h1>
<% } %>

package wpsassign;
import java.sql.*;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.mysql.jdbc.Connection;
/**
 * Servlet implementation class Details
 */
@WebServlet("/Details")
public class Details extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Details() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		try {
			
			Connection conn = (Connection) new Connectdb().connecting();
			PrintWriter out = response.getWriter();
			String username=request.getParameter("username");
			String pass=request.getParameter("password");
			String sql="SELECT * FROM logintable";
			String sql2="SELECT Password FROM logintable";
			String sql3="SELECT * FROM proctortable";
			String sql4="SELECT * FROM studenttable";
			String sql5="SELECT * FROM attendance";
			 PreparedStatement prep = conn.prepareStatement(sql);
			 PreparedStatement prep1 = conn.prepareStatement(sql2);
			 PreparedStatement prep2 = conn.prepareStatement(sql3);
			 PreparedStatement prep3 = conn.prepareStatement(sql4);
			 PreparedStatement prep4 = conn.prepareStatement(sql5);
	         ResultSet res=prep.executeQuery(sql);
	         ResultSet res1=prep1.executeQuery(sql2);
	         ResultSet res2=prep2.executeQuery(sql3);
	         ResultSet res3=prep3.executeQuery(sql4);
	         ResultSet res4=prep4.executeQuery(sql5);
	         res.next();
	         res1.next();
	         res2.next();
	         res3.next();
	         res4.next();
	         if(res.getString(3).equals(pass) && res.getString(2).equals(username))
	         {
out.println("<style>table{border:1px;width:100%;color:blue;border:1px solid black;}tr,td{text-align:'center';padding:10px;border:1px solid black;}</style>");
	    out.println("<table><tr><th colspan='4'>Student Details</tr></tr>");
	    out.print("<tr><td>Roll No</td><td>"+res3.getInt(1)+"</td>");
	    out.println("<tr><td>Name</td><td>"+res3.getString(2)+"</td>");
	    out.print("<tr><td>DOB</td><td>"+res3.getString(3)+"</td>");
	    out.println("<tr><td>Gender</td><td>"+res3.getString(4)+"</td>");
	    
	    out.println("<table><tr><th colspan='4'>Proctor Details</tr></tr>");
	    out.print("<tr><td>Proctor Id</td><td>"+res2.getInt(1)+"</td>");
	    out.println("<tr><td>Proctor Name</td><td>"+res2.getString(2)+"</td>");
	    out.print("<tr><td>Proctor Phone</td><td>"+res2.getString(3)+"</td>");
	    out.println("<tr><td>Proctor Dept</td><td>"+res2.getString(4)+"</td>");
	    out.println("<table><tr><th colspan='4'>Attendance</tr></tr>");
	    out.println("<tr><td>Attendance Upto date</td><td>"+res4.getString(3)+"</td>");
	    out.println("<table><tr><th colspan='4'>Marks</tr></tr>");
	    out.println("<tr><td>Current GPA</td><td>"+res3.getInt(6)+"</td>");
	         }
	        else {
	        	 out.println("Login failed!!!!");
	        	 response.getWriter().println("Invalid Login details");
	        }
		}catch(Exception e)
		{
			e.printStackTrace();
		}

	}

}

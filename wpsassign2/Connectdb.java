package wpsassign;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Connectdb {
public Connection connecting() 
{
	 String url = "jdbc:mysql://localhost:3306/student details";
	 String user = "root";
	 String password = "";
	 Connection con=null;
	 try
     {
         Class.forName("com.mysql.jdbc.Driver");
          con = DriverManager.getConnection(url, user, password);
         
     }catch(Exception e)
	 {
    	 e.printStackTrace();
	 }
	 return con;
}}


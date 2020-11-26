package wpsassign;

import java.sql.Connection;
import java.sql.DriverManager;

public class MySqlConnect {
public Connection MySqlConnection() {
	String url="jdbc:mysql://localhost:3306/student details";
	String user="root";
	String password="";
	Connection con=null;
	try {
		Class.forName("com.mysql.jdbc.Driver");
		con = DriverManager.getConnection(url, user, password);
	}
	catch(Exception e)
	{
		e.printStackTrace();
		return null;
	}
	return con;
}
}

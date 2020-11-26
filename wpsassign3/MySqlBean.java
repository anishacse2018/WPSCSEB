package wpsassign;
import java.sql.*;
import java.sql.Connection;
import java.sql.ResultSet;

import com.mysql.jdbc.*;
import com.mysql.jdbc.Statement;

public class MySqlBean implements java.io.Serializable{
	  String username;
	 String password;
	int store;
	 public void setStore() {
	    	Connection con=null;
	    	try {
	    		con=new MySqlConnect().MySqlConnection();
	    		con.setAutoCommit(false);
	    		Statement stmt=(Statement) con.createStatement();
	    		String query="SELECT * from logintable";
	    		ResultSet rs = stmt.executeQuery(query);
	    		rs.next();
	    		this.username=rs.getString(2);
	    		this.password=rs.getString(3);
	    		con.commit();
	    		stmt.close();
	    		con.close();
	    		
	    		
	    	}catch(Exception e) {
	    		e.printStackTrace();
	    	}
	    }
	 public void setUsername(String username) {
			this.username= username;
		}
		public void setPassword(String password) {
			this.password=password;
		}
		public String getUsername() {
			return username;
		}
		public String getPassword() {
			return password;
		}
}

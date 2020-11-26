package wpsassign;
import java.sql.Connection;
import java.sql.ResultSet;

import com.mysql.jdbc.*;

public class Retrieve implements java.io.Serializable{
	
	int proctorid;
    String proctorname;
    String proctorphone;
    String proctordept;
    int gpa;
    int rollno;
    String dob;
    String gender;
    String name;
    String address;
    String bloodgroup;
    String nationality;
    int attendances;
    int semester;
    int gpa10;
    int inter;
   public Retrieve(){
		
     try {
    	 Connection con=null;
    	 con=new MySqlConnect().MySqlConnection();
    	 String sql3="SELECT * FROM proctortable";
    	 PreparedStatement prep2 = (PreparedStatement) con.prepareStatement(sql3);
    	 ResultSet res2=prep2.executeQuery(sql3);
    	 res2.next();
    	 this.proctorid=res2.getInt(1);
 	   this.proctorname=res2.getString(2);
 	   this.proctorphone=res2.getString(3);
 	   this.proctordept=res2.getString(4);
 	  String sql4="SELECT * FROM studenttable";
 	 PreparedStatement prep3 = (PreparedStatement) con.prepareStatement(sql4);
 	ResultSet res3=prep3.executeQuery(sql4);
 	res3.next();
 	this.rollno=res3.getInt(1);
	   this.name=res3.getString(2);
	   this.dob=res3.getString(3);
	   this.gender=res3.getString(4);
	   this.address=res3.getString(5);
	   this.bloodgroup=res3.getString(6);
	   this.nationality=res3.getString(7);
	   String sql5="SELECT * FROM attendance";
	   PreparedStatement prep4 = (PreparedStatement)con.prepareStatement(sql5);
	   ResultSet res4=prep4.executeQuery(sql5);
	 	res4.next();
	 	this.attendances=res4.getInt(3);
	 	String sql6="SELECT * FROM academicinfo";
		   PreparedStatement prep5 = (PreparedStatement)con.prepareStatement(sql6);
		   ResultSet res5=prep5.executeQuery(sql6);
		 	res5.next();
		 	this.semester=res5.getInt(2);
		 	this.gpa10=res5.getInt(3);
		 			this.inter=res5.getInt(4);
		 			this.gpa=res5.getInt(5);
     }catch(Exception e)
     {
    	 e.printStackTrace();
     }
     
   
}
    public int getProctorid()
    {
    	return proctorid;
    }    

    public String getProctorname()
    {
    	return proctorname;
    }  
    public String getProctorphone()
    {
    	return proctorphone;
    }  
    public String getProctordept()
    {
    	return proctordept;
    }  
    public int getRollno()
    {
    	return rollno;
    }    
    public int getGpa()
    {
    	return gpa;
    }    
public String getDob() {
	return dob;
}
public String getName() {
	return name;
}
public String getGender() {
	return gender;
}
public String getAddress() {
	return address;
}
public String getNationality() {
	return nationality;
}
public String getBloodgroup() {
	return bloodgroup;
}
public int getAttendances()
{
	return attendances;
} 
public int getInter() {
	return inter;
}
public int getSemester() {
	return semester;
}
public int getGpa10() {
	return gpa10;
}
}

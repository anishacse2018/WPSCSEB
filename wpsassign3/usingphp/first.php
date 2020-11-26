<?php include 'header.php';?> 
<style>
<?php include 'style.css'; ?>
</style>
<?php
$username=$_REQUEST["username"];
$password=$_REQUEST["password"];
$con=new mysqli("localhost","root","","student details");
$query="SELECT * from logintable";
$result=$con->query($query);
if($con->connect_error){
    echo $con->connect_error;
}

if($result->num_rows>0){
    while($rowdata=$result->fetch_assoc()){
          if($rowdata["Username"]==$username && $rowdata["Password"]==$password){
            
              $query1="SELECT * from attendance";
              $query2="SELECT * from studenttable";
              $query3="SELECT * from academicinfo";
              $query4="SELECT * from proctortable";
             
              echo "<table>";
              
            echo "<th colspan='7'>"."Personal Information"."</th>";
             echo"<tr>";
                echo"<th>Rollno</th>";
                echo"<th>Name</th>";
                    echo"<th>DOB</th>";
                    echo"<th>Gender</th>";
                    echo "<th>Address</th>";
                    echo "<th>Blood Group</th>";
                    echo "<th>Nationality</th>";
                                echo"</tr>";
                                echo"<tr>";
                                $res=$con->query($query2);
              while($rowdata=$res->fetch_assoc()){
                  echo "<td>";
                  echo $rowdata["Rollno"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Name"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["DOB"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Gender"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["ADDRESS"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["BloodGroup"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Nationality"];
                  echo "</td>";
              }
              echo"</tr>";
              echo "</table>";
              echo "<table>";
               
            echo "<th colspan='7'>"."Academic Information"."</th>";
             echo"<tr>";
                echo"<th>Name</th>";
                    echo"<th>Semester</th>";
                    echo"<th>10th GPA</th>";
                    echo "<th>Intermediate %</th>";
                    echo "<th>CGPA</th>";
                   
                                echo"</tr>";
                                echo"<tr>";
              $res=$con->query($query3);
              while($rowdata=$res->fetch_assoc()){
                echo "<td>";
                  echo $rowdata["Name"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Semester"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["10th gpa"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Intermediate %"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["CGPA"];
                  echo "</td>";
              }
              echo"</tr>";
              echo "</table>";
              echo "<table>";
                
            echo "<th colspan='7'>"."Proctor Information"."</th>";

             echo"<tr>";
             echo"<th>Proctor Id</th>";
                echo"<th>Proctor Name</th>";
                   
                    echo"<th>Proctor Phone</th>";
                    echo "<th>Proctor Branch</th>";
                   
                                echo"</tr>";
                                echo"<tr>";
              $res=$con->query($query4);
              while($rowdata=$res->fetch_assoc()){
                echo "<td>";
                  echo $rowdata["Prid"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Name"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Phone"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Branch"];
                  echo "</td>";
              }
              echo"</tr>";
              echo "</table>";
              echo "<table>";
              
            echo "<th colspan='7'>"."Proctor Information"."</th>";
        
             echo"<tr>";
             echo"<th>Rollno</th>";
                echo"<th> Name</th>";
                   
                  
                    echo "<th>Attendance</th>";
                   
                                echo"</tr>";
                                echo"<tr>";
              $res=$con->query($query1);
              while($rowdata=$res->fetch_assoc()){
                echo "<td>";
                  echo $rowdata["Rollno"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Name"];
                  echo "</td>";
                  echo "<td>";
                  echo $rowdata["Attendance"];
                  echo "</td>";
              }
              echo"</tr>";
              echo "</table>";
          }
    }
}
$con->close();
?>

<form action="result.php" method="post">
Qualification:
<input type="text" name="qualification"/>
<br><br>
Age:<input type="text" name="age"/><br><br>
<input type="submit" name="submit"/>
</form>
<?php
$username=$_REQUEST["username"];
$name=$_REQUEST["names"];
setcookie("username",$username);
setcookie("names",$name);
?>
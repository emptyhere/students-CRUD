<?php 

header("Access-Control-Allow-Origin:http://localhost:3000");

$mysqli = new mysqli("127.0.0.1", "root", "", "dk181");
$mysqli->set_charset("utf8");
$sql = "SELECT * FROM `subjects`";
$result = mysqli_query($mysqli,$sql);

$myArray = array();

if ($mysqli) {

    while($row = mysqli_fetch_assoc($result)) {
            $myArray[] = $row;
    }
    $myJSON = json_encode($myArray);
    echo $myJSON;
}

$result->close();
$mysqli->close();


?>
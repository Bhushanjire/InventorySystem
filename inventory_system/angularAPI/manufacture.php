<?php 
require 'database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

class manufacture{
    public $name;
    public function insert_manufacture($dbOject,$data){
        if($dbOject->insert("manufacture",$data)){
            return true;
        }else{
            return false;
        }
    }

function getManufactureList($dbOject,$query){
    $data = $dbOject ->customQuery($query);
    if($data){
        return $data;
    }else{
        return false;
    }
    
}

}
$objManufacture = new manufacture();

$msg = array();
if($_POST['which_service']=="addManufacture"){ 
if(isset($_POST['manufacture_name'])){
    $data = array(
        'manufacture_name' => $_POST['manufacture_name'],
    );
        echo $objManufacture->insert_manufacture($dbOject,$data);
}
}if($_POST['which_service']=="listManufacture"){ 
    $query = "SELECT manufacture_id,manufacture_name FROM manufacture ORDER BY manufacture_name";
    echo json_encode($objManufacture->getManufactureList($dbOject,$query));
}

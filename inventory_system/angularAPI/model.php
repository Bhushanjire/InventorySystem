<?php 
require 'database.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

class model{
    public $name;
    public function insert_model($dbOject,$data){
        if($dbOject->insert("model",$data)){
            return true;
    }else{
        return false;
        } 
    }

    public function getData($dbOject,$query){
        $data = $dbOject ->customQuery($query);
        if($data){
            return $data;
        }else{
            return false;
        }
        
    }
}
$objModel = new model();
if($_POST['which_service']=="modelAdd"){
if(isset($_POST['manufacture_name'])){
    $picture1='';
    $picture2='';
    if(isset($_FILES['picture1'])){
        $files1=$_FILES['picture1'];
        $tmp_name1=$files1['tmp_name'];
        $picture1=$files1['name'];
        $destination1='../uploads/'.$picture1;
        $res=move_uploaded_file($tmp_name1, $destination1);
    }

    if(isset($_FILES['picture2'])){
        $files2=$_FILES['picture2'];
        $tmp_name2=$files2['tmp_name'];
        $picture2=$files2['name'];
        $destination2='../uploads/'.$picture2;
        $res=move_uploaded_file($tmp_name2, $destination2);
    }

    $data = array(
        'manufacture_id' => $_POST['manufacture_name'],
        'name' => $_POST['name'],
        'color' => $_POST['color'],
        'manufacturing_year' => $_POST['manufacturing_year'],
        'registration_no' => $_POST['registration_no'],
        'note' => $_POST['note'],
        'picture1' => $picture1,
        'picture2' => $picture2
    );
        echo $objModel->insert_model($dbOject,$data);

    }
}else if($_POST['which_service']=="inventoryList"){ 
    $query = "SELECT MA.manufacture_name,MO.name,MO.model_id,COUNT(`name`) AS TOTAL FROM manufacture MA  JOIN model MO ON MO.manufacture_id=MA.manufacture_id GROUP BY MO.name ORDER BY MO.model_id DESC";
   echo  json_encode($objModel->getData($dbOject,$query));
}else if($_POST['which_service']=="modelDetails"){ 
   $query = "SELECT * FROM model MO JOIN manufacture MA ON MO.manufacture_id=MA.manufacture_id WHERE model_id='".$_POST['model_id']."'";
   echo json_encode($objModel->getData($dbOject,$query));
}

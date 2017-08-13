<?php
$fileName = $_FILES["file1"]["name"];
$fileTmpLoc = $_FILES["file1"]["tmp_name"];
$fileType = $_FILES["file1"]["type"];
$fileSize = $_FILES["file1"]["size"];
$fileErrorMsg = $_FILES["file1"]["error"];

if(!$fileTmpLoc){
	echo "Error, please first select a file!";
	exit();
}
if(move_uploaded_file($fileTmpLoc, "assets/data/uploads/$fileName")){
	echo "$fileName has completed uploading.";
}else{
	echo "move_uploaded_file function failed";
}
?>
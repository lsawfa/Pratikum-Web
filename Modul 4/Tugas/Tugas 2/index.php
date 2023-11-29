<?php
include("Controllers/DramaController.php");

use Controller\DramaController;

$DramaController = new DramaController();
// echo $DramaController->getAllDrama();
// echo $DramaController->getDrama(1);
// echo $DramaController->getDrama(2);
// echo $DramaController->getDrama(3);
echo $DramaController->getDrama(4);
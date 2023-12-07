<?php
namespace app\Routes;  

include "app/Controller/UserController.php";

use app\Controller\UserController;

class UserRoute{
    public function handle($method,$path){
        $controller = new UserController();
        if($method== "GET" && $path== "/api/pasien_with_rmedis"){
            echo $controller->index();
        }
        if($method== "GET" && $path== "/api/pasien"){
            echo $controller->indexPasien();
        }
        if($method== "GET" && $path== "/api/rmedis"){
            echo $controller->indexRiwayatMedis();
        }
        if($method== "GET" && strpos($path,"/api/pasien_with_rmedis/") === 0){
            $pathParts = explode("/",$path);
            $id = $pathParts[count($pathParts)-1];
            echo $controller->getById($id);
        }
        if($method== "POST" && $path == "/api/pasien_with_rmedis"){
            echo $controller->insert();
        }
        if($method== "PUT" && strpos($path,"/api/pasien_with_rmedis/") === 0){
            $pathParts = explode("/",$path);
            $id = $pathParts[count($pathParts)-1];
            echo $controller->update($id);
        }
        if($method== "DELETE" && strpos($path,"/api/pasien_with_rmedis/") === 0){
            $pathParts = explode("/",$path);
            $id = $pathParts[count($pathParts)-1];
            echo $controller->delete($id);
        }
    }
}
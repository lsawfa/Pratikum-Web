<?php

namespace app\Controller;  

include "app/Traits/ApiResponseFormatter.php";
include "app/Models/User.php";

use app\Models\User;
use app\Traits\ApiResponseFormatter;

class UserController{
    use ApiResponseFormatter;
    public function index(){
        $usersModel = new User();
        $response = $usersModel->findAllWithRiwayatMedis();
        return $this->apiResponse(200,"Success",$response);
    }
    public function indexPasien(){
        $usersModel = new User();
        $response = $usersModel->findAllPasien();
        return $this->apiResponse(200,"Success",$response);
    }
    public function indexRiwayatMedis(){
        $usersModel = new User();
        $response = $usersModel->findAllRiwayatMedis();
        return $this->apiResponse(200,"Success",$response);
    }
    public function getById($id){
        $productModel = new User();
        $response = $productModel->findById($id);
        return $this->apiResponse(200, "success", $response);
    }

    public function insert(){
        $jsonInput = file_get_contents("php://input");
        $inputData = json_decode($jsonInput, true);
        if(json_last_error()){
            return $this->apiResponse(400,"error invalid input", null);
        }

        $productModel = new User();
        $response = $productModel->create([
            "Nama"=> $inputData["Nama"],
            "Umur"=> $inputData["Umur"],
            "No_telepon"=> $inputData["No_telepon"],
            "ID_Riwayat_Medis"=> $inputData["ID_Riwayat_Medis"],
        ]);
        return $this->apiResponse(200, "success", $response);
    }

    public function update($id) {
        // Tangkap input JSON
        $jsonInput = file_get_contents("php://input");
        $inputData = json_decode($jsonInput, true);
        // Validasi apakah input valid
        if (json_last_error()) {
            return $this->apiResponse(400, "error invalid input", null);
        }
        $productModel = new User();
        $response = $productModel->update([
            "Nama"=>$inputData["Nama"],
            "Umur"=>$inputData["Umur"],
            "No_telepon"=>$inputData["No_telepon"],
            "ID_Riwayat_Medis"=>$inputData["ID_Riwayat_Medis"],
        ], $id);

        return $this->apiResponse(200, "success", $response);
    }

    public function delete($id){
        $productModel = new User();
        $response = $productModel->delete($id);
        return $this->apiResponse(200, "success", $response);
    }
}
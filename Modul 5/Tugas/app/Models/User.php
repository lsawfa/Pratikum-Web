<?php
namespace app\Models;

include "app/Config/DatabaseConfig.php";

use app\Config\DatabaseConfig;
use mysqli;

class User extends DatabaseConfig {
    public $conn;
    public function __construct() {
        $this->conn = new mysqli($this->host,$this->username,$this->password, $this->database, $this->port);
    }

    public function findAllWithRiwayatMedis(){
        $sql = "SELECT pasien.Nama, pasien.Umur, pasien.No_telepon, riwayat_medis.Jenis_Riwayat_Medis, riwayat_medis.Catatan, riwayat_medis.Tanggal_Catatan 
        FROM pasien INNER JOIN riwayat_medis ON pasien.ID_Riwayat_Medis = riwayat_medis.ID_Riwayat_Medis";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }
    public function findAllPasien(){
        $sql = "SELECT DISTINCT pasien.Nama, pasien.Umur, pasien.No_telepon FROM pasien";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }
    public function findAllRiwayatMedis(){
        $sql = "SELECT DISTINCT riwayat_medis.Jenis_Riwayat_Medis, riwayat_medis.Catatan, riwayat_medis.Tanggal_Catatan FROM riwayat_medis";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function findById($id){
        $sql = "SELECT pasien.Nama, pasien.Umur, pasien.No_telepon, riwayat_medis.Jenis_Riwayat_Medis, riwayat_medis.Catatan, riwayat_medis.Tanggal_Catatan 
        FROM pasien INNER JOIN riwayat_medis ON pasien.ID_Riwayat_Medis = riwayat_medis.ID_Riwayat_Medis WHERE ID_Pasien = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }
    public function create($data){
        $namaPasien = $data["Nama"];
        $umurPasien = $data["Umur"];
        $noTeleponPasien = $data["No_telepon"];
        $ID_Riwayat_Medis = $data["ID_Riwayat_Medis"];
        $sql = "INSERT INTO pasien (Nama, Umur, No_telepon, ID_Riwayat_Medis ) VALUES (?, ?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("sisi", $namaPasien, $umurPasien, $noTeleponPasien, $ID_Riwayat_Medis);
        $stmt->execute();
        $this->conn->close();
    }

    public function update($data, $id){
        $namaPasien = $data["Nama"];
        $umurPasien = $data["Umur"];
        $noTeleponPasien = $data["No_telepon"];
        $ID_Riwayat_Medis = $data["ID_Riwayat_Medis"];
        $sql = "UPDATE pasien SET Nama = ?, Umur = ?, No_telepon = ?, ID_Riwayat_Medis = ? WHERE ID_Pasien = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("sisii",$namaPasien, $umurPasien, $noTeleponPasien, $ID_Riwayat_Medis , $id);
        $stmt->execute();
        $this->conn->close();
    }
    public function delete($id){
        $sql = "DELETE FROM pasien WHERE ID_Pasien = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $this->conn->close();
    }
}
<?php

namespace Controller;

include "Controllers/Controller.php";
include "Traits/ResponseFormat.php";

use Traits\responseFormat;

class DramaController extends Controller
{
    use responseFormat;
    public function __construct()
    {
        $this->controllerName = "DramaController";
    }

    public function dataDummy()
    {
        $dummyData = [
            ["Name" => "Snowdrop", "Main Cast" => "Jisoo", "Genre" => "History"],
            ["Name" => "Big Mouse", "Main Cast" => "Yoona", "Genre" => "Thriller"],
            ["Name" => "A Time Caled You", "Main Cast" => "Jeon Yeo Bin", "Genre" => "Drama"],
        ];
        return $dummyData;
    }
    public function getAllDrama()
    {
        $data = $this->dataDummy();
        $response = [
            "controller_attribute " => $this->getAttribute("GetAllDrama", "GET"),
            "drama" => $data
        ];
        return $this->responseFormat(200, "Success", $response);
    }
    public function getDrama($index)
    {
        $data = $this->dataDummy();
        $response = [
            "controller_attribute " => $this->getAttribute("GetDramaByID", "GET"),
            "drama" => "No Data Recieved"
        ];
        if ($index <= count($data)) {
            $response["drama"] = $data[$index - 1];
            return $this->responseFormat(200, "Success", $response);
        } else {
            return $this->responseFormat(400, "Failed", $response);
        }
    }
}
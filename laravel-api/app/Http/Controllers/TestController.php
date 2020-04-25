<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function getData(){
        $vTest="Respondiendo desde la api de laravel";
        return $vTest;
    }
}

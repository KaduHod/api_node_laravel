<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\ClienteExport;

class ClienteController extends Controller
{
    public function __construct() {
        
    }

    public function index(){

    }

    public function insertClient(Request $request)
    {
        return $request;
    }
    
    public function export(){
        return Excel::download(new ClienteExport);
    }
    
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\ClientesExport;
use App\Models\Cliente;
use Maatwebsite\Excel\Facades\Excel;

class ClienteController extends Controller
{
    public function __construct() {

    }

    public function index(){
        $clientes =  Cliente::all();
        dd($clientes[0]);
    }

    public function export(){
        return Excel::download(new ClientesExport, 'clientes.');
    }


}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();

        $validation = Validator::make($data, [
            'fullname' => ['fullname', 'required'],
            'email' => ['email', 'required'],
            'message' => ['string', 'required'],
        ]);

        if ($validation->fails()) {
            return response()->json($validation->errors(), 400);
        }

        $result = Contact::Create($validation->validated());
        if ($result) {
            return response()->json(['Başarılı bir şekilde oluşturuldu...']);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Education_form;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class EducationFormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data=$request->all();

        //
        $validation = Validator::make($data, [
            "name"=>["string" ,"required"],
            "lastname"=>["string" ,"required"],
            "address"=>["string"],
            "phone_number"=>["string" ,"required"],
            "email"=>["string" ,"required"],
            "school"=>["string" ,"required"],
            "school_major"=>["string" ,"required"],
            "company"=>["string" ,"required"],
            "department"=>"string",
            "job"=>["string" ,"required"],
            "job_title"=>["string"],
            "wantcnc"=>["string" ,"required"],
            "havecnc"=>["bool" ,"required"],
            "havecnc_description"=>["string"],
            "usecnc"=>["bool" ,"required"],
            "isknow_sawdust_machining_information"=>["bool" ,"required"],
            "isknow_sawdust_machining_information_description"=>["string"],
            "material_information"=>["string" ,"required"],
            "gauge_information"=>["string" ,"required"],
            "maintenance_information"=>["string"],
            "kvkk"=>["bool" ,"required"],

        ]);

        if($validation->fails()){
            return response()->json($validation->errors(), 400);
        }

        $result = Education_form::Create([
            "name"=>$request->name,
            "lastname"=>$request->lastname,
            "address"=>$request->address,
            "phone_number"=>$request->phone_number,
            "email"=>$request->email,
            "school"=>$request->school,
            "school_major"=>$request->school_major,
            "company"=>$request->company,
            "department"=>$request->department,
            "job"=>$request->job,
            "job_title"=>$request->job_title,
            "wantcnc"=>$request->wantcnc,
            "havecnc"=>$request->havecnc,
            "havecnc_description"=>$request->havecnc_description,
            "usecnc"=>$request->usecnc,
            "isknow_sawdust_machining_information"=>$request->isknow_sawdust_machining_information,
            "isknow_sawdust_machining_information_description"=>$request->isknow_sawdust_machining_information_description,
            "material_information"=>$request->material_information,
            "gauge_information"=>$request->gauge_information,
            "maintenance_information"=>$request->maintenance_information,
            "take_eeducations"=>$request->take_deducations,
            "kvkk"=>$request->kvkk,
        ]);
        if($result){
            $addUser=[
                 "hyildirim@socialthinks.com",
                "rkapucuoglu@socialthinks.com",
                "horal@socialthinks.com"
            ];
            $details = [
                "name"=>$request->name,
                "lastname"=>$request->lastname,
                "address"=>$request->address,
                "phone_number"=>$request->phone_number,
                "email"=>$request->email,
                "school"=>$request->school,
                "school_major"=>$request->school_major,
                "company"=>$request->company,
                "department"=>$request->department,
                "job"=>$request->job,
                "job_title"=>$request->job_title,
                "wantcnc"=>$request->wantcnc,
                "havecnc"=>$request->havecnc,
                "havecnc_description"=>$request->havecnc_description,
                "usecnc"=>$request->usecnc,
                "isknow_sawdust_machining_information"=>$request->isknow_sawdust_machining_information,
                "isknow_sawdust_machining_information_description"=>$request->isknow_sawdust_machining_information_description,
                "material_information"=>$request->material_information,
                "gauge_information"=>$request->gauge_information,
                "maintenance_information"=>$request->maintenance_information,
                "take_educations"=>$request->take_educations,
                "kvkk"=>$request->kvkk,
            ];
            Mail::to($addUser)->send(new \App\Mail\EducationFormMail($details));
        return response()->json(["Başarılı bir şekilde oluşturuldu..."]);
    }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

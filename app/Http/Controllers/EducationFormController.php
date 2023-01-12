<?php

namespace App\Http\Controllers;

use App\Models\EducationForm;
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
            "phone_number"=>["string" ,"required"],
            "email"=>["string" ,"required"],
            "school"=>["string" ,"required"],
            "school_major"=>["string" ,"required"],
            "company"=>["string" ,"required"],
            "job"=>["string" ,"required"],
            "wantcnc"=>["string" ,"required"],
            "havecnc"=>["bool" ,"required"],
            "usecnc"=>["bool" ,"required"],
            "isknow_sawdust_machining_information"=>["bool" ,"required"],
            "material_information"=>["string" ,"required"],
            "gauge_information"=>["string" ,"required"],
            "take_educations"=>["string" ,"required"],
            "kvkk"=>["bool" ,"required"],
        ]);

        if($validation->fails()){
            return response()->json($validation->errors(), 400);
        }

        $result = EducationForm::Create([
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
            "want_educations"=>$request->want_education,
            "education_time"=>$request->education_time
        ]);
        if($result){
            $addUser=[
                "info@gncakademi.com",
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
                "want_educations"=>$request->want_education,
                "education_time"=>$request->education_time
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

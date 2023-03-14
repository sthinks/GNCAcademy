<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/education-image', [
    \App\Http\Controllers\EducationController::class,
    'EducationImageAll',
]);
Route::get('/education-list', [
    \App\Http\Controllers\EducationController::class,
    'EducationListAll',
]);
//educationform
Route::post('/form', [
    \App\Http\Controllers\EducationFormController::class,
    'store',
]);
Route::post('/contact', [
    \App\Http\Controllers\ContactController::class,
    'store',
]);

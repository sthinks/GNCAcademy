<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $lastname
 * @property string $address
 * @property string $phone_number
 * @property string $email
 * @property string $school
 * @property string $school_major
 * @property string $company
 * @property string $department
 * @property string $job
 * @property string $job_title
 * @property string $wantcnc
 * @property boolean $havecnc
 * @property string $havecnc_description
 * @property boolean $usecnc
 * @property boolean $isknow_sawdust_machining_information
 * @property string $isknow_sawdust_machining_information_description
 * @property string $material_information
 * @property string $gauge_information
 * @property string $maintenance_information
 * @property string $take_educations
 * @property boolean $kvkk
 * @property string $created_at
 * @property string $updated_at
 */
class Education_form extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'education_form';

    /**
     * @var array
     */
    protected $fillable = ['name', 'lastname', 'address', 'phone_number', 'email', 'school', 'school_major', 'company', 'department', 'job', 'job_title', 'wantcnc', 'havecnc', 'havecnc_description', 'usecnc', 'isknow_sawdust_machining_information', 'isknow_sawdust_machining_information_description', 'material_information', 'gauge_information', 'maintenance_information', 'take_educations', 'kvkk', 'created_at', 'updated_at'];
}

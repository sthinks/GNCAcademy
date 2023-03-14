<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EducationList extends Model
{
    public function trainers()
    {
        return $this->belongsToMany('App\Models\Trainer', 'pivots');
    }
    public function education_types()
    {
        return $this->belongsToMany('App\Models\EducationType', 'type_pivots');
    }
}

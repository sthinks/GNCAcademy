<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EducationImage;
use App\Models\EducationList;
use App\Models\Trainer;

class EducationController extends Controller
{
    public function EducationImageAll()
    {
        $data = EducationImage::all();
        $data->map(function ($item) {
            $item->images = asset(
                sprintf('storage/%s', str_replace('\\', '/', $item->images))
            );
        });
        return response()->json($data);
    }

    public function EducationListAll()
    {
        $trainers = Trainer::all();
        $data = EducationList::all();
        $data->map(function ($item) {
            $item->education_image = asset(
                sprintf(
                    'storage/%s',
                    str_replace('\\', '/', $item->education_image)
                )
            );
        });

        return response()->json($data);
    }
}

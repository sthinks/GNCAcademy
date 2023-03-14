<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EducationImage;
use App\Models\EducationList;
use App\Models\Trainer;
use App\Models\Week;

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
        $data = EducationList::with('trainers')
            ->with('education_types')
            ->get();

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
    public function aa()
    {
        $data = Week::all();

        return response()->json($data);
    }
}

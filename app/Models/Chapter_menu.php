<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter_menu extends Model
{
    use HasFactory;

    protected $fillable = [
       'Chapter_Name',
       'status',
 
    ];
}

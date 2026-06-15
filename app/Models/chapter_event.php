<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class chapter_event extends Model
{
   use HasFactory;

    protected $fillable = [
        'Chapter_menu_id',
        'event_title',
        'event_image',
        'event_heading',
        'event_description',
        'status',
 
    ];
}

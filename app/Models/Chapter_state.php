<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter_state extends Model
{
    use HasFactory;
    protected $table = 'chapter_state';

    protected $fillable = [
        'Chapter_menu_id',
        'about_title',
        'about_image',
        'about_content',
        'banner_image',
        'banner_text',
        'title',
        'member_image',
        'member_name',
        'member_designation',
        'status',

    ];
}

<?php

namespace App\Http\Controllers;

use App\Models\Home;

use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Chapter_menu;
use App\Models\MediaCoverage;
use App\Models\Chapter;
use App\Models\Gallery;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */



  public function index()
{
    $Chapter_menu = Chapter_menu::latest()->get();
    $members = Member::all();
    $mediaCoverage = MediaCoverage::latest()->get();
    $gallery = Gallery::latest()->get();
     $chapter = Chapter::latest()->get();

    return Inertia::render('Front/Home', [
        'Chapter_menu' => $Chapter_menu,
        'members' => $members,
        'mediaCoverage' => $mediaCoverage,
        'galleries' => $gallery,
        'chapters' => $chapter,
    ]);
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Home $home)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Home $home)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Home $home)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Home $home)
    {
        //
    }
}

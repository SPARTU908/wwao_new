<?php

namespace App\Http\Controllers;

use App\Models\About;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Chapter_menu;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */                                     
    public function index()
{
    $Chapter_menu = Chapter_menu::all();

    return Inertia::render('Front/About', [
        'Chapter_menu' => $Chapter_menu
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
    public function show(About $about)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(About $about)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, About $about)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(About $about)
    {
        //
    }
}

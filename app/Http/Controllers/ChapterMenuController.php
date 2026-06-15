<?php

namespace App\Http\Controllers;

use App\Models\Chapter_menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChapterMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chapter_menu=Chapter_menu::latest()->get();
        return Inertia::render('Admin/ChapterMenu',compact('chapter_menu'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return  Inertia::render('Admin/AddChapterMenu');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $data = $request->validate([
            'Chapter_Name' => 'required|string|max:255',
          
            
        ]);
 
 
        Chapter_menu::create($data);
          return redirect('/admin/chapter-menu')->with('success', 'Chapter Menu added successfully');
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Chapter_menu $chapter_menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $chaptermenu=Chapter_menu::FindOrFail($id);
        // Pass the chapter to the Inertia edit page
         return Inertia::render('Admin/EditChapterMenu',compact('chaptermenu'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'Chapter_Name' => 'required|string|max:255',
          
            
        ]);
 $chaptermenu=Chapter_menu::FindOrFail($id);
  
       $chaptermenu->update($data);
          return redirect('/admin/chapter-menu')->with('success', 'Chapter Menu Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
         $chaptermenu=Chapter_menu::FindOrFail($id);
  
       $chaptermenu->delete();
          return redirect('/admin/chapter-menu')->with('success', 'Chapter Menu Delete successfully');
    }
}

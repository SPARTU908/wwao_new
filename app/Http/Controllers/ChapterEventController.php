<?php

namespace App\Http\Controllers;

use App\Models\chapter_event;
use Illuminate\Http\Request;
use App\Models\Chapter_menu;
use Inertia\Inertia;
use App\Models\Chapters;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class ChapterEventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chapter_events = DB::table('chapter_events')  // ✅ correct table name
            ->join('chapter_menus', 'chapter_menus.id', '=', 'chapter_events.Chapter_menu_id')
            ->where('chapter_events.status', 1)
            ->select(
                'chapter_events.id',
                'chapter_menus.Chapter_Name',
                'chapter_events.event_title',
                'chapter_events.event_image',
                'chapter_events.event_heading',
                'chapter_events.event_description'
            )
            ->get();

        return Inertia::render('Admin/ChapterEvent', compact('chapter_events'));
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $Chapter_menu = Chapter_menu::latest()->get();
        return  Inertia::render('Admin/AddChapterEvent', compact('Chapter_menu'));
    }

   
    public function store(Request $request)
{
    $data = $request->validate([
        'Chapter_menu_id' => 'nullable|integer',
        'event_title' => 'nullable|string|max:255',
        'event_image.*' => 'image|mimes:jpg,jpeg,png,webp',
        'event_heading' => 'nullable|string|max:255',
        'event_description' => 'nullable|string|max:255',
    ]);

   $images = [];

if ($request->hasFile('event_image')) {
    foreach ($request->file('event_image') as $image) {
        $path = $image->store('chapters', 'public');
        $images[] = $path;
    }
}

$data['event_image'] = json_encode($images);

   

    Chapter_Event::create($data);

    return redirect('/admin/chapter-event')->with('success', 'Chapter event added successfully');
}

    /**
     * Display the specified resource.
     */
  

    /**
     * Show the form for editing the specified resource.
     */
   public function edit($id)
    {
        $Chapter_menu = Chapter_menu::latest()->get();
        $chapter_events = Chapter_Event::FindOrFail($id);
        // Pass the chapter to the Inertia edit page
        return Inertia::render('Admin/EditChapterEvent', compact('chapter_events', 'Chapter_menu'));
    }

    /**
     * Update the specified resource in storage.
     */
  public function update(Request $request, $id)
{
    $chapter_events = Chapter_Event::findOrFail($id);

    $data = $request->validate([
        'Chapter_menu_id' => 'nullable|integer',
        'event_title' => 'nullable|string|max:255',
        'event_image.*' => 'nullable|image|mimes:jpg,jpeg,png,webp',
        'event_heading' => 'nullable|string|max:255',
        'event_description' => 'nullable|string|max:255',
    ]);

    // Existing images
    $images = $chapter_events->event_image
        ? json_decode($chapter_events->event_image, true)
        : [];

    // Delete selected images
    if ($request->deleted_images) {
        foreach ($request->deleted_images as $deleted) {

            if (Storage::disk('public')->exists($deleted)) {
                Storage::disk('public')->delete($deleted);
            }

            $images = array_filter($images, fn($img) => $img != $deleted);
        }
    }

    // Upload new images
    if ($request->hasFile('event_image')) {
        foreach ($request->file('event_image') as $file) {
            $path = $file->store('chapters', 'public');
            $images[] = $path;
        }
    }

    // Save updated images
    $data['event_image'] = json_encode(array_values($images));

    $chapter_events->update($data);

    return redirect('/admin/chapter-event')
        ->with('success', 'Chapter Event Updated Successfully');
}
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
         $chapter_events=Chapter_Event::FindOrFail($id);
  
       $chapter_events->delete();
          return redirect('/admin/chapter-event')->with('success', 'Chapter Event Delete successfully');
    }


 
}

<?php

namespace App\Http\Controllers;


use App\Models\Chapter_state;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\Chapter_menu;
use App\Models\chapter_event;


use Illuminate\Support\Facades\DB;
class ChaptersController extends Controller
{
    public function frontindex($id)
    {
       $chapters = DB::table('Chapter_state')
            ->join('chapter_menus', 'chapter_menus.id', '=', 'Chapter_state.Chapter_menu_id')
            ->where('Chapter_state.Chapter_menu_id', $id)
            ->select(
           'Chapter_state.id',
                'chapter_menus.Chapter_Name',

                'chapter_state.about_title',

                'chapter_state.about_image',
                'chapter_state.about_content',

                'chapter_state.banner_image',
                'chapter_state.banner_text',

                'chapter_state.title',
                'chapter_state.member_image',
                'chapter_state.member_name',
                'chapter_state.member_designation'
            )->get();
        return Inertia::render('Front/Chapters', [
            'chapters' => $chapters
        ]);
    }




   public function index()
    {
        $chapters = DB::table('chapter_state') // make sure this matches your actual table name
            ->join('chapter_menus', 'chapter_menus.id', '=', 'chapter_state.chapter_menu_id') // column names in snake_case
            ->where('chapter_state.status', 1)
            ->select(
                'chapter_state.id',
                'chapter_menus.chapter_name',
                'chapter_state.about_title',
                'chapter_state.about_image',
                'chapter_state.about_content',
                'chapter_state.banner_image',
                'chapter_state.banner_text',
                'chapter_state.title',
                'chapter_state.member_image',
                'chapter_state.member_name',
                'chapter_state.member_designation'
            )
            ->get();

        return Inertia::render('Admin/ChaptersList', compact('chapters'));
    }


    public function kashiindex()
    {
        $kashi = Chapter_state::latest()->get();
        return Inertia::render('Front/KashiChapter', compact('kashi'));
    }

    public function delhiindex()
    {
        $delhi = Chapter_state::latest()->get();
        return Inertia::render('Front/DelhiChapter', compact('delhi'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $Chapter_menu = Chapter_menu::latest()->get();
        return  Inertia::render('Admin/AddChapters', compact('Chapter_menu'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'Chapter_menu_id' => 'nullable|integer',
            'about_title'=>'nullable|string',
            'about_image'=>'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'about_content'=>'nullable|string',
            'banner_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'banner_text' => 'nullable|string|max:255',
            'title' => 'nullable|string|max:255',

            'member_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'member_name' => 'nullable|string|max:255',
            'member_designation' => 'nullable|string|max:255',

      ]);

        if ($request->hasFile('banner_image')) {
            $data['banner_image'] = $request->file('banner_image')->store('chapters', 'public');
        }
        if ($request->hasFile('about_image')) {
            $data['about_image'] = $request->file('about_image')->store('chapters', 'public');
        }

        if ($request->hasFile('member_image')) {
            $data['member_image'] = $request->file('member_image')->store('chapters', 'public');
        }
     

        Chapter_state::create($data);
        return redirect('/admin/chapter-list')->with('success', 'Chapter added successfully');
    }

    /**
     * Display the specified resource.
     */


// public function show($menu_id)
// {
//     $chapters = Chapters::where('Chapter_menu_id', $menu_id)->get();
//     $chapter_event = chapter_event::where('Chapter_menu_id', $menu_id)->get();

//     return Inertia::render('Front/Chapters', [
//         'chapters' => $chapters,
//         'chapter_event' => $chapter_event,
//     ]);
// }


public function show($menu_id)
{
    $chapter_state = Chapter_state::where('Chapter_menu_id', $menu_id)->get();
    $chapter_event = chapter_event::where('Chapter_menu_id', $menu_id)->get();
    $Chapter_menu = Chapter_menu::all(); // add this

    return Inertia::render('Front/Chapters', [
        'chapters' => $chapter_state,
        'chapter_event' => $chapter_event,
        'Chapter_menu' => $Chapter_menu, // send menu
    ]);
}




    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $Chapter_menu = Chapter_menu::latest()->get();
        $chapters = Chapter_state::FindOrFail($id);
        // Pass the chapter to the Inertia edit page
        return Inertia::render('Admin/EditChapters', compact('chapters', 'Chapter_menu'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $chapters = Chapter_state::findOrFail($id);

        $data = $request->validate([
            'Chapter_menu_id' => 'nullable|integer',
            'about_title'=>'nullable|string',
            'about_image'=>'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'about_content'=>'nullable|string',
            'banner_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'banner_text' => 'nullable|string|max:255',
            'title' => 'nullable|string|max:255',

            'member_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'member_name' => 'nullable|string|max:255',
            'member_designation' => 'nullable|string|max:255',

           

        ]);

        if ($request->hasFile('banner_image')) {

            if ($chapters->banner_image && Storage::disk('public')->exists($chapters->banner_image)) {
                Storage::disk('public')->delete($chapters->banner_image);
            }

            $data['banner_image'] = $request->file('banner_image')->store('chapters', 'public');
        }


         if ($request->hasFile('about_image')) {

            if ($chapters->about_image && Storage::disk('public')->exists($chapters->about_image)) {
                Storage::disk('public')->delete($chapters->about_image);
            }

            $data['about_image'] = $request->file('about_image')->store('chapters', 'public');
        }

        if ($request->hasFile('member_image')) {

            if ($chapters->member_image && Storage::disk('public')->exists($chapters->member_image)) {
                Storage::disk('public')->delete($chapters->member_image);
            }

            $data['member_image'] = $request->file('member_image')->store('chapters', 'public');
        }

       

        $chapters->update($data);

        return redirect('/admin/chapter-list')->with('success', 'Chapter Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
         $chapters=Chapter_state::FindOrFail($id);
  
       $chapters->delete();
          return redirect('/admin/chapter-list')->with('success', 'Chapter Delete successfully');
    }

    public function getMenus()
{
    $menus = Chapter_menu::all(); // get all menus like Kashi, Delhi, etc.
    return Inertia::render('Front/Header', [
        'Chapter_menu' => $menus
    ]);
}

// public function showEvent($menu_id)
// {
//     $chapters = Chapter_state::where('Chapter_menu_id', $menu_id)->get();

//     $chapter_event = chapter_event::where('Chapter_menu_id', $menu_id)->get();

//     return Inertia::render('Front/Chapters', [
//         'chapters' => $chapters,
//         'chapter_event' => $chapter_event,
//     ]);
// }
}

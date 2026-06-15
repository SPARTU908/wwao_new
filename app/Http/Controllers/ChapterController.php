<?php

namespace App\Http\Controllers;
use App\Models\Chapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ChapterController extends Controller
{
    public function index()
    {
        $chapter = Chapter::latest()->get();

        return Inertia::render('Admin/Chapter', [
            'chapter' => $chapter
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/AddChapter');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',

        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')
                ->store('chapters', 'public');
        }

        Chapter::create([
            'name' => $request->name,
            'image' => $imagePath,

        ]);

        return redirect('/admin/chapter')->with('success', 'Chapter added successfully.');
    }

    public function show(Chapter $chapter)
    {
        return Inertia::render('Admin/Chapters/Show', [
            'chapter' => $chapter
        ]);
    }

    public function edit($id)
    {

        $chapter = Chapter::findOrFail($id);
        return Inertia::render('Admin/EditChapter', [
            'chapter' => $chapter
        ]);
    }

    public function update(Request $request, $id)


    {

        $chapter = Chapter::findOrFail($id);


        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',

        ]);

        $data = [
            'name' => $request->name,

        ];

        if ($request->hasFile('image')) {

            if (
                $chapter->image &&
                Storage::disk('public')->exists($chapter->image)
            ) {
                Storage::disk('public')->delete($chapter->image);
            }

            $data['image'] = $request->file('image')
                ->store('chapters', 'public');
        }

        $chapter->update($data);

        return redirect('/admin/chapter')
            ->with('success', 'Chapter updated successfully.');
    }

    public function destroy(Chapter $chapter)
    {
        if (
            $chapter->image &&
            Storage::disk('public')->exists($chapter->image)
        ) {
            Storage::disk('public')->delete($chapter->image);
        }

        $chapter->delete();

        return redirect('/admin/chapter')
            ->with('success', 'Chapter deleted successfully.');
    }
}

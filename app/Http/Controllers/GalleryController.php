<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    public function index()
    {
        $gallery = Gallery::latest()->get();

        return Inertia::render('Admin/Gallery', [
            'gallery' => $gallery,
        ]);
    }

    public function create()
    {
        return  Inertia::render('Admin/AddGallery');
    }



    public function store(Request $request)
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $imagePath = $request->file('image')->store('gallery', 'public');

        Gallery::create([
            'title' => $request->title,
            'image' => $imagePath,
        ]);

        return redirect('/admin/gallery')->with('success', 'Gallery image added successfully.');
    }


    public function edit($id)
    {
        $gallery = Gallery::findOrFail($id);

        return Inertia::render('Admin/EditGallery', [
            'gallery' => $gallery,
        ]);
    }



  public function update(Request $request, $id)
{
    $gallery = Gallery::findOrFail($id);

    $request->validate([
        'title' => 'nullable|string|max:255',
        'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
    ]);

    $data = [
        'title' => $request->title,
    ];

    if ($request->hasFile('image')) {

        if ($gallery->image) {
            Storage::disk('public')->delete($gallery->image);
        }

        $data['image'] = $request->file('image')->store('gallery', 'public');
    }

    $gallery->update($data);

    return redirect('/admin/gallery')
        ->with('success', 'Gallery image updated successfully.');
}

    public function destroy($id)
{
    $gallery = Gallery::findOrFail($id);

    if ($gallery->image) {
        Storage::disk('public')->delete($gallery->image);
    }

    $gallery->delete();

    return redirect('/admin/gallery')
        ->with('success', 'Gallery image deleted successfully.');
}
}

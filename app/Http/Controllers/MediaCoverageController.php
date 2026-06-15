<?php

namespace App\Http\Controllers;
use App\Models\MediaCoverage;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaCoverageController extends Controller
{

 public function index()
{
     $mediaCoverages = MediaCoverage::latest()->get();


    return Inertia::render('Admin/MediaCoverage', [
       'mediaCoverages' => $mediaCoverages,
    ]);
}

  public function create()
    {
        return  Inertia::render('Admin/AddMediaCoverage');
    }


   public function store(Request $request)
{
    $data = $request->validate([
        'title' => 'nullable|string|max:255',
        'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
    ]);

    if ($request->hasFile('image')) {
        $data['image'] = $request->file('image')->store('media-coverage', 'public');
    }

    MediaCoverage::create($data);

    return redirect('/admin/media')
        ->with('success', 'Media Coverage added successfully');
}


public function edit($id)
{
    $mediaCoverages = MediaCoverage::findOrFail($id);

    return Inertia::render('Admin/EditMediaCoverage', [
        'mediaCoverages' => $mediaCoverages,
    ]);
}


public function update(Request $request, $id)
{
    $mediaCoverage = MediaCoverage::findOrFail($id);

    $request->validate([
        'title' => 'nullable|string|max:255',
        'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
    ]);

    $data = $request->except('image');

    if ($request->hasFile('image')) {

        if ($mediaCoverage->image) {
            Storage::disk('public')->delete($mediaCoverage->image);
        }

        $data['image'] = $request->file('image')
            ->store('media-coverage', 'public');
    }

    $mediaCoverage->update($data);

    return redirect()
        ->route('Media')
        ->with('success', 'Media Coverage updated successfully.');
}



}

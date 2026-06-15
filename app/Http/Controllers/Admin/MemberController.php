<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class MemberController extends Controller
{


   public function index()
{
   $members = Member::latest()->get();

    return Inertia::render('Admin/Member', [
        'members' => $members,
    ]);
}

    public function create()
    {
        return  Inertia::render('Admin/AddMember');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'designation' => 'nullable',
            'category' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp',
            'mobile' => 'nullable|integer',
            'city' => 'nullable',
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')
                ->store('members', 'public');
        }

        Member::create($data);

        return redirect()
            ->route('Member')
            ->with('success', 'Member created successfully.');
    }

    public function show(Member $member)
    {
        return view('admin.members.show', compact('member'));
    }

public function edit($id)
{
    $member = Member::findOrFail($id);

    return Inertia::render('Admin/EditMember', [
        'member' => $member,
    ]);
}

  public function update(Request $request, $id)
{
    $member = Member::findOrFail($id);

    $request->validate([
        'name' => 'required',
        'designation' => 'nullable',
        'category' => 'required',
        'image' => 'nullable|image|mimes:jpg,jpeg,png,webp',
        'mobile' => 'nullable',
        'city' => 'nullable',
    ]);

    $data = $request->except('image');

    if ($request->hasFile('image')) {

        if ($member->image) {
            Storage::disk('public')->delete($member->image);
        }

        $data['image'] = $request->file('image')
            ->store('members', 'public');
    }

    $member->update($data);

    return redirect()
        ->route('Member')
        ->with('success', 'Member updated successfully.');
}

    public function destroy(Member $member)
    {
        if ($member->image) {
            Storage::disk('public')->delete($member->image);
        }

        $member->delete();

        return redirect()
            ->route('members.index')
            ->with('success', 'Member deleted successfully.');
    }


    
}




<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Chapter_menu;
class DonationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
     $Chapter_menu = Chapter_menu::all();

    return Inertia::render('Front/Donate', [
        'Chapter_menu' => $Chapter_menu
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
         $Chapter_menu = Chapter_menu::all();

    return Inertia::render('Front/Donate', [
        'Chapter_menu' => $Chapter_menu
    ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
          $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'amount' => 'required|string|max:255',
            'transaction' => 'required|string',
        ]);

        Donation::create($validated);

        return response()->json([
            'message' => 'Payment done successfully'
        ], 201);

  }

    /**
     * Display the specified resource.
     */
    public function show(Donation $donation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Donation $donation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Donation $donation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Donation $donation)
    {
        //
    }

    public function adminDonations()
{
    $donations = Donation::latest()->get(); // fetch all records

    return Inertia::render('Admin/Donation', [
        'donations' => $donations
    ]);
}
}

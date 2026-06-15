<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DonationController;

Route::post('/contact', [ContactController::class, 'store']);

Route::post('/donate', [DonationController::class, 'store']);

<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin\MemberController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\ChapterEventController;
use App\Http\Controllers\ChaptersController;
use App\Http\Controllers\ChapterMenuController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MediaCoverageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Front/Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/donate', [DonationController::class, 'index'])->name('donate');

// Route::get('/chapters/{id}', [ChaptersController::class, 'frontindex'])->name('chapter');

// Route::get('/chapters/{id}', [ChaptersController::class, 'show'])->name('chapters.show');
// Route::get('/chapters/{id}', [ChaptersController::class, 'showEvent'])->name('chapters.showEvent');

Route::get('/chapters/{id}', [ChaptersController::class, 'show']);
// Route::get('/chapters/{id}/events', [ChaptersController::class, 'showEvent']);

Route::get('admin/dashboard', function () {
  return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  // routes/web.php

  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
  Route::get('/admin/chapter-list', [ChaptersController::class, 'index'])->name('ChaptersList');
  Route::get('/admin/add-chapter/create', [ChaptersController::class, 'create'])->name('addchapter');
  Route::post('/admin/add-chapter/store', [ChaptersController::class, 'store'])->name('storechapter');
  Route::get('/admin/edit-chapter/{id}', [ChaptersController::class, 'edit'])->name('editchapter');
  Route::post('/admin/chapter-update/{chapter}', [ChaptersController::class, 'update'])->name('chapter.update');
  Route::delete('/admin/chapter-delete/{id}', [ChaptersController::class, 'destroy'])->name('chapter.delete');



  // Chapter-menu

  Route::get('/admin/chapter-menu', [ChapterMenuController::class, 'index'])->name('ChapterMenu');
  Route::get('/admin/add-chapter-menu/create', [ChapterMenuController::class, 'create'])->name('addchaptermenu');
  Route::post('/admin/add-chapter-menu/store', [ChapterMenuController::class, 'store'])->name('storechaptermenu');
  Route::get('/admin/edit-chapter-menu/{id}', [ChapterMenuController::class, 'edit'])->name('editchaptermenu');
  Route::post('/admin/chapter-update-menu/{id}', [ChapterMenuController::class, 'update'])->name('chapter.updatemenu');
  Route::delete('/admin/chapter-delete-menu/{id}', [ChapterMenuController::class, 'destroy'])->name('chapter.deletemenu');


  // Event Chapter

  Route::get('/admin/chapter-event', [ChapterEventController::class, 'index'])->name('ChapterEvent');
  Route::get('/admin/add-chapter-event/create', [ChapterEventController::class, 'create'])->name('addchapterevent');
  Route::post('/admin/add-chapter-event/store', [ChapterEventController::class, 'store'])->name('storechapterevent');
  Route::get('/admin/edit-chapter-event/{id}', [ChapterEventController::class, 'edit'])->name('editchapterevent');
  Route::post('/admin/chapter-update-event/{id}', [ChapterEventController::class, 'update'])->name('chapter.updateevent');
  Route::delete('/admin/chapter-delete-event/{id}', [ChapterEventController::class, 'destroy'])->name('chapter.deleteevent');


  // Add Member

  Route::get('/admin/member', [MemberController::class, 'index'])->name('Member');
  Route::get('/admin/add-member/create', [MemberController::class, 'create'])->name('addmember');
  Route::post('/admin/add-member/store', [MemberController::class, 'store'])->name('storemember');
  Route::get('/admin/edit-member/{id}', [MemberController::class, 'edit'])->name('editmember');
  Route::post('/admin/update-member/{id}', [MemberController::class, 'update'])->name('updatemember');
  Route::delete('/admin/delete-member/{id}', [MemberController::class, 'destroy'])->name('deletemember');



  // Add Media Coverage

  Route::get('/admin/media', [MediaCoverageController::class, 'index'])->name('Media');
  Route::get('/admin/add-media/create', [MediaCoverageController::class, 'create'])->name('addmedia');
  Route::post('/admin/add-media/store', [MediaCoverageController::class, 'store'])->name('storemedia');
  Route::get('/admin/edit-media/{id}', [MediaCoverageController::class, 'edit'])->name('editmedia');
  Route::post('/admin/update-media/{id}', [MediaCoverageController::class, 'update'])->name('updatemedia');
  Route::delete('/admin/delete-media/{id}', [MediaCoverageController::class, 'destroy'])->name('deletemedia');


  // Add Gallery

  Route::get('/admin/gallery', [GalleryController::class, 'index'])->name('gallery');
  Route::get('/admin/add-gallery/create', [GalleryController::class, 'create'])->name('addgallery');
  Route::post('/admin/add-gallery/store', [GalleryController::class, 'store'])->name('storegallery');
  Route::get('/admin/edit-gallery/{id}', [GalleryController::class, 'edit'])->name('editgallery');
  Route::post('/admin/update-gallery/{id}', [GalleryController::class, 'update'])->name('updategallery');
  Route::delete('/admin/delete-gallery/{id}', [GalleryController::class, 'destroy'])->name('deletegallery');

  // Add Chapter Homepage

  Route::get('/admin/chapter', [ChapterController::class, 'index'])->name('chapter');
  Route::get('/admin/add-chapter/create', [ChapterController::class, 'create'])->name('addchapter');
  Route::post('/admin/add-chapter/store', [ChapterController::class, 'store'])->name('storechapter');
  Route::get('/admin/edit-chapter/{id}', [ChapterController::class, 'edit'])->name('editchapter');
  Route::post('/admin/update-chapter/{id}', [ChapterController::class, 'update'])->name('updatechapter');
  Route::delete('/admin/delete-chapter/{id}', [ChapterController::class, 'destroy'])->name('deletechapter');




  // Donation

  Route::get('/admin/donations', [DonationController::class, 'adminDonations']);
});


Route::get('/contact', [ContactController::class, 'create']);




require __DIR__ . '/auth.php';



Route::get('/route-cache', function () {
  $exitCode = Artisan::call('route:cache');
  return 'Routes cache cleared';
});


Route::get('/clear-cache', function () {
  $exitCode = Artisan::call('cache:clear');
  return 'Application cache cleared';
});


Route::get('/config-cache', function () {
  $exitCode = Artisan::call('config:cache');
  return 'Config cache cleared';
});

Route::get('/clear-optimize', function () {
  $exitCode = Artisan::call('optimize:clear');
  return 'Application optimize cleared';
});

Route::get('/copy-storage-files', function () {
  try {
    File::copyDirectory(storage_path('app/public'), public_path('storage'));
    return '✅ Files copied from storage/app/public to public/storage successfully.';
  } catch (\Exception $e) {
    return '❌ Failed to copy storage files: ' . $e->getMessage();
  }
});
Route::get('/optimize', function () {
  $exitCode = Artisan::call('optimize');
  return 'Application optimize ';
});

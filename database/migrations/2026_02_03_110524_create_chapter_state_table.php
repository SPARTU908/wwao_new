<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chapter_state', function (Blueprint $table) {
        $table->id();

        $table->foreignId('Chapter_menu_id')  
                ->constrained('chapter_menus')    
                ->cascadeOnDelete();
        $table->string('about_title')->nullable();
        $table->string('about_image')->nullable();
        $table->longText('about_content')->nullable();
        $table->string('banner_image');
        $table->string('banner_text');
        $table->string('title');
        $table->string('member_image');
        $table->string('member_name');
        $table->string('member_designation');
       

        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapters');
    }
};

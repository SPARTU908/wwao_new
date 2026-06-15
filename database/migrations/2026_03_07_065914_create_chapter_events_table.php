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
        Schema::create('chapter_events', function (Blueprint $table) {
            $table->id();
             $table->foreignId('Chapter_menu_id')  
                ->constrained('chapter_menus')    
                ->cascadeOnDelete();
            $table->string('event_title');
           $table->text('event_image')->nullable();
            $table->string('event_heading');
            $table->string('event_description')->nullable();
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapter_events');
    }
};

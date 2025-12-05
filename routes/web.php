<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Dashboard\IndexController;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::get('/dashboard-menu', [IndexController::class, 'index'])->name('dashboard.menu');
<?php

use App\Http\Controllers\Api\AttributeController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CommentsController;
use App\Http\Controllers\Api\DiscountController;
use App\Http\Controllers\Api\FileUploadController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ReturnPolicyController;
use App\Http\Controllers\Api\StockController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\WishListController;
use App\Http\Controllers\AuditsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// user routes
Route::get('/customer', [UserController::class, 'index']);
Route::get('/customer/buys', [UserController::class, 'showBuyings']);

// attributes routes
Route::get('/attributes', [AttributeController::class, 'index']);
Route::get('/attributes/{id}', [AttributeController::class, 'show']);
Route::Post('/attributes', [AttributeController::class, 'store']);
Route::put('/attributes/{id}', [AttributeController::class, 'update']);
Route::delete('/attributes/{id}', [AttributeController::class, 'destroy']);

// product routes
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/products', [ProductController::class, 'store']);
Route::put('products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

// comment on product
Route::get('/comment/{id}', [CommentsController::class, 'showComment']);
Route::post('/comment', [CommentsController::class, 'store']);
Route::put('/comment/{id}', [CommentsController::class, 'update']);
Route::delete('/comment/{id}', [CommentsController::class,'destroy']);

// file uplaod route
Route::post('/products/upload', [FileUploadController::class, 'uploadFile']);

// stock routes
Route::get('/stocks', [StockController::class, 'index']);
Route::get('/stocks/{id}', [StockController::class, 'show']);
Route::put('/stocks/{id}', [StockController::class, 'update']);

// discount routes
Route::get('/discount', [DiscountController::class, 'index']);
Route::get('/discount/{id}', [DiscountController::class, 'show']);
Route::put('/discount/{id}', [DiscountController::class, 'update']);

// brand routes
Route::get('/brands', [BrandController::class, 'index']);
Route::get('/brands/{id}', [BrandController::class, 'show']);
Route::post('/brands', [BrandController::class, 'store']);
Route::put('/brands/{id}', [BrandController::class, 'update']);
Route::delete('/brands/{id}', [BrandController::class, 'destroy']);

//blog routes
Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blogs/{id}', [BlogController::class, 'show']);
Route::post('/blogs', [BlogController::class, 'store']);
Route::put('/blogs/{id}', [BlogController::class, 'update']);
Route::delete('/blogs/{id}', [BlogController::class, 'destroy']);

// wishlist routes
Route::get('/wishlists', [WishListController::class, 'index']);
Route::post('/wishlists', [WishListController::class, 'store']);
Route::delete('/wishlists/{id}', [WishListController::class, 'destroy']);

// return policy 
Route::get('/returnpolicy', [ReturnPolicyController::class, 'show']);
Route::put('/returnpolicy', [ReturnPolicyController::class, 'update']);


// get audit lgos
Route::get('/logs', [AuditsController::class, 'showAdminLogs']);
Route::get('/logs/customer', [AuditsController::class, 'showCustomerLogs']);

// payment routes 
Route::post('/payment',[PaymentController::class, 'creditCharge']);
Route::post('/payement/facture',[PaymentController::class, 'paymentFacture']);
Route::get('/factures', [PaymentController::class, 'getAllFactures']);

// get current user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// check if route is verified to pass
Auth::routes(['verify' => true]);

<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Image;
use App\Models\Product;
use App\Models\User;
use APP\Models\Attribute;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //User::factory(10)->create(); 
        //Brand::factory(10)->create(); 
        Attribute::factory(10)->create(); 
    }
}

<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Like;
use App\Models\Question;
use App\Models\Reply;
use App\Models\User;
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
        User:: factory()->count(100)->create();
        Category:: factory()->count(100)->create();
        Question:: factory()->count(100)->create();

        Reply::factory()->count(100)->create()->each(function ($reply){
            return $reply->like()->save(Like::factory()->make());
        });
//
//        factory(Category::class, 100)->create();
//        factory(Question::class, 100)->create();
//        factory(Reply::class, 100)->create()->each(function ($reply) {
//            return $reply->like()->save(factory(User::class)->make());
//        });
    }

}

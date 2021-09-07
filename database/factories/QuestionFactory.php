<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Question;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Question::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        $title = $this->faker->sentence;
        return [
            'title' => $title,
            'slug' => str_slug($title),
            'body' => $this->faker->text,
            'category_id' => function () {
                return Category::all()->random();
            },
            'user_id' => function () {
                return User::all()->random();
            }
        ];
    }


}

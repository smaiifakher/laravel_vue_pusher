<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function LikeIt(Reply $reply)
    {
        $reply->like()->create([
            //'user_id'=>auth()->id()
            'user_id' => '1'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function unLikeIt(Reply $reply)
    {
       // $reply->like()->where(['user_id', auth()->id()])->first()->delete();
        $reply->like()->where('user_id', '1')->first()->delete();

    }


}

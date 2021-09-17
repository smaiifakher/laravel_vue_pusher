const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .browserSync({
    proxy: 'pusher.test',
    files: [
        "public/css/app.css",
        "public/js/*.js",
        "resources/views/*.blade.php",
        "resources/views/**/*.blade.php",
        "app/Http/Controllers/*.php",
        "routes/web.php",
    ],
});

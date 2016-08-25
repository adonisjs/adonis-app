const elixir = require('laravel-elixir')

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Adonis application. By default, we are compiling the Sass
 | file for our application.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
})

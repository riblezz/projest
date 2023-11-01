"use strict"

const numberOfFilms = prompt("Сколько фильмов посмотрели?", "")
let personalMovieDB = {
    count:{numberOfFilms},
    movies:{саня:30},
    actors:{},
    genres:[],
    privat:false
}
const lastFilms = prompt("Один из последних просмотреных фильмов?", ""),
    degreesFilms = prompt("Насколько оцените его?", "")

personalMovieDB.movies[lastFilms] = degreesFilms

console.log(personalMovieDB)
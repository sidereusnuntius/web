const express = require("express");
const app = express();
const port = 8080;

const anime_arr = [
    {
        id: 0,
        name: 'Serial Experiments Lain',
        genre: 'cyberpunk, psychological horror',
        studio: 'Triangle Staff'
    },
    {
        id: 1,
        name: 'Neon Genesis Evangelion',
        genre: 'mecha, psychological drama',
        studio: 'Gainax'
    },
    {
        id: 2,
        name: 'Cowboy Bebop',
        genre: 'noir, space western',
        studio: 'Sunrise'
    }
];


function insertAnime(name, genre, studio){
    const id = anime_arr.length;
    const anime = {id, name, genre, studio};
    anime_arr.push(anime);
}
module.exports = {express, app, port, anime_arr, insertAnime};
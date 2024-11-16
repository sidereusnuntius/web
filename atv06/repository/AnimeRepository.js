const Anime = require('../model/anime');

class AnimeRepository {
    constructor() {
        this.anime_arr = [
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
    }

    findAll() {
        return this.anime_arr;
    }

    findById(id) {
        return this.anime_arr.find(anime => anime.id === id);
    }

    create(name, genre, studio) {
        const id = this.anime_arr.length;
        const anime = new Anime(id, name, genre, studio);
        this.anime_arr.push(anime);

        return anime;
    }

    update(id, data) {
        const anime = this.findById(id);
        if (!anime) return null;

        anime.name = data.name || anime.name;
        anime.genre = data.genre || anime.genre;
        anime.studio = data.studio || anime.studio;

        return anime;
    }

    delete(id) {
        const index = this.anime_arr.findIndex(anime => anime.id === id);
        if (index === -1) return null;

        return this.anime_arr.splice(index, 1)[0];
    }
}

module.exports = new AnimeRepository();
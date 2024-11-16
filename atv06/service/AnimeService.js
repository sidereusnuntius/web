const animeRepository = require('../repository/AnimeRepository');

class AnimeService {
    findAll() {
        return animeRepository.findAll();
    }

    findById(id) {
        return animeRepository.findById(id);
    }

    insert(id, name, genre, studio) {
        return animeRepository.create(id, name, genre, studio);
    }

    update(id, data) {
        return animeRepository.update(id, data);
    }

    delete(id) {
        return animeRepository.delete(id);
    }
}

module.exports = new AnimeService();
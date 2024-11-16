const animeService = require('../service/AnimeService');

class AnimeController {
    findAll(req, res) {
        const animes = animeService.findAll();
        return res.json(animes);
    }

    findById(req, res) {
        const id = parseInt(req.params.id);
        const anime = animeService.findById(id);
        
        if (anime) {
            return res.json(anime);
        } else {
            return res
                .status(404)
                .json({ message: 'anime not found' });
        }
    }

    insert(req, res) {
        const { id, name, genre, studio } = req.body;
        const anime = animeService.insert(id, name, genre, studio);
        return res.status(201).json(anime);
    }

    update(req, res) {
        const id = parseInt(req.params.id);
        const updated = animeService.update(id, req.body);

        if (updated) {
            return res.json(updated);
        } else {
            return res.status(404).json({ message: 'anime not found' });
        }
    }

    deleteAnime(req, res) {
        const id = parseInt(req.params.id);
        const deleted = animeService.delete(id);

        if (deleted) {
            return res.status(204);
        } else {
            return res.status(404).json({ message: 'anime not found' });
        }
    }
}

module.exports = new AnimeController();
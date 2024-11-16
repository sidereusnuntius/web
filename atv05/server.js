const { express, app, port, anime_arr, insertAnime } = require('./app');

const bodyParser = require('body-parser');
app.use(bodyParser);
app.listen (port, () =>{
    console.log(`server started on port ${port}`);
});


app.post('/anime', (req, res) => {
    console.dir(req.body);
    const{name, genre, studio} = req.body
    insertAnime(name, genre, studio);
    res.status(201)
})

app.put('/anime/:id',  (req, res) => {
    const animeId = parseInt(req.params.id);
    const {name, genre, studio} = req.body;

    const anime = anime_arr.find(a => a.id === animeId);

    if(!anime) { return res.status(404).json ({message: 'anime not found'}) }
    
    if (name) anime.name = name;
    if (genre) anime.genre = genre;
    if (studio) anime.studio = studio;

    res.json({message: 'anime updated', anime})
})

app.delete('/anime/:id', (req, res) => {
    const animeId = parseInt(req.params.id)

    const animeDel = app.find(a => a.id === animeId)

    if(!animeDel){
        return res.status(404).json({message: 'anime not found'})
    }else{
        animeDel.splice(animeId, 1)
        return res.status(204).json({message: 'anime deleted'})
    }
})
app.get ('/anime', (res) =>{
    const animes = anime_arr.map(anime => anime.name)
    
    return res.json({ names: animes});
})

app.get ('/anime/:id', (req, res) => {
    const animeId = parseInt(req.params.id);
    const anime = anime_arr.find(a => a.id === animeId)

    return res.status(200).json({anime})

    
})
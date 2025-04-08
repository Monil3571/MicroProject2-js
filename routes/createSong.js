import express from 'express';
import Song from '../models/Song.js';

const router = express.Router();
router.post('/', async (req, res) => {
    try {
        // just for testing:
        console.log(req.body);
        const { song_id, name, album, artist, genre, streams } = req.body;

        // Validate that all required fields are present [Extra Optional & Advanced Step]:
        // Ensuring that the client has provided all necessary data for creating an employee
        if (!song_id || !name || !album || !artist || !genre || !streams) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newSong = new Song({
            song_id,
            name,
            album,
            artist,
            genre,
            streams
        });

        const savedSong = await newSong.save();
        res.status(201).json(savedSong);     
    } catch (error){
        res.status(400).json({ message: error.message });
    }
});

export default router;
       

// routes/readSong.js
import express from 'express';
import Song from '../models/Song.js';

const router = express.Router();

// Get all songs
router.get('/', async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single song by ID
router.get('/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

// routes/updateSong.js
import express from 'express';
import Song from '../models/Song.js';

const router = express.Router();
// Update a song by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedSong = await Song.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedSong) {
            return res.status(404).json({ message: 'Song not found' });
        }

        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
export default router;

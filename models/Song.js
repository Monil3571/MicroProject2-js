import mongoose, { mongo } from "mongoose";

const songSchema = new mongoose.Schema({
    song_id: {
        type: String,
        required: [true, 'Song ID is required'], // song_id must be provided
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Song Name is required'],
        // Optional Validation: name length at least 3 characters:
        // minlength: [3, 'Song Name must be at least 3 characters long'],
    },
    album: {
        type: String,
        required: [true, 'The album of the song is required']
    },
    artist: {
        type: String,
        required: [true, 'The artist of the song is required']
    },
    genre: {
        type: String,
        required: [true, 'The genre of this song is required']
    },
    streams: {
        type: String,
        required: [true, 'The amount of streams of this song is required']
    },
});

const Song = mongoose.model('Song', songSchema);

export default Song;
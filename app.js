import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import createSongRoute from './routes/createSong.js';
import readSongRoute from './routes/readSong.js';
import updateSongRoute from './routes/updateSong.js';
import deleteSongRoute from './routes/deleteSong.js';

dotenv.config();
const app = express();
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('MONGO_URI is not defined in environment variables!');
    process.exit(1);
}

async function main() {
    try {
        await mongoose.connect(mongoURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        // Exit the process if MongoDB connection fails:
        process.exit(1);
    }
}
main();

app.use('/api/songs/create', createSongRoute);
app.use('/api/songs', readSongRoute);         // GET all / GET one
app.use('/api/songs/update', updateSongRoute); // PUT by ID
app.use('/api/songs/delete', deleteSongRoute); // DELETE by ID


app.get('/', (req, res) => {
    res.send('MongoDB, Express, and Node.js are working!');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Healthy', timestamp: new Date() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application URL: http://localhost:${port}`);
}).on('error', (err) => {
    console.error('Server loading error:', err);
    process.exit(1); // Exit with code "1" for errors for any issue
});
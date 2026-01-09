const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const fs = require('fs');
const path = require('path');

// Set ffmpeg path to the installer binary
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const inputDir = path.join(__dirname, '..', 'public', 'videos');
const outputDir = path.join(__dirname, '..', 'public', 'videos', 'compressed');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const compressVideo = (filename) => {
    return new Promise((resolve, reject) => {
        const inputPath = path.join(inputDir, filename);
        const outputPath = path.join(outputDir, filename);
        
        const startSize = fs.statSync(inputPath).size;
        console.log(`Compressing ${filename}... (Original size: ${(startSize / (1024 * 1024)).toFixed(2)} MB)`);

        ffmpeg(inputPath)
            .outputOptions([
                '-vcodec libx264',
                '-crf 28',
                '-preset fast',
                '-movflags +faststart'
            ])
            .on('progress', (progress) => {
                if (progress.percent) {
                    process.stdout.write(`\rProgress: ${progress.percent.toFixed(2)}%`);
                }
            })
            .on('end', () => {
                const endSize = fs.statSync(outputPath).size;
                const reduction = ((1 - endSize / startSize) * 100).toFixed(2);
                console.log(`\rFinished ${filename}: ${(endSize / (1024 * 1024)).toFixed(2)} MB (${reduction}% reduction)`);
                resolve();
            })
            .on('error', (err) => {
                console.error(`Error compressing ${filename}:`, err.message);
                reject(err);
            })
            .save(outputPath);
    });
};

async function run() {
    try {
        const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.mp4') && file !== 'hero-video.mp4');
        
        if (files.length === 0) {
            console.log('No .mp4 files (excluding hero-video.mp4) found in public/videos');
            return;
        }

        for (const file of files) {
            await compressVideo(file);
        }

        console.log('\nAll videos compressed successfully.');
        console.log('Replacing original videos with compressed versions...');

        for (const file of files) {
            const outputPath = path.join(outputDir, file);
            const finalPath = path.join(inputDir, file);
            fs.renameSync(outputPath, finalPath);
        }

        // Cleanup temporary directory
        fs.rmdirSync(outputDir);
        console.log('Cleanup complete. Original files replaced.');

    } catch (err) {
        console.error('An error occurred during process:', err);
    }
}

run();

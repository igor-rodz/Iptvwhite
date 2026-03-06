import https from 'https';

const images = [
    "5i5Fg549J27knMvhI5NRM2FT3Gn.jpg",
    "jnpSxSMdFAj4dtF59agzgmKM9fg.jpg",
    "loM7T7Mwd849wFaWj9KPlNNSHZr.jpg",
    "iCsM4oeBM9PIESD6PJw7mWO1xbl.jpg",
    "r0uVKBsPj74lQGNRdC9IM2P5roW.jpg",
    "A9gML0mmuyE2m3hGK0eZZA2tRPg.jpg",
    "zwJuStMjSOT1jaPUkX3dweIciRs.jpg",
    "xJv3oJoVQqITux8N9isJfb1Ao6g.jpg",
    "kP23RWbUWM6vGhT9PxFyP5VT3y4.jpg"
];

const tmdbBase = 'https://image.tmdb.org/t/p/w500/';

async function checkAspectRatios() {
    console.log("Checking TMDB URLs...");
    for (const img of images) {
        const url = tmdbBase + img;
        // We just download to buffer to check size, or just print url out to let me test
        // Actually, I can use a simpler approach since w500 is 500px wide. 
        // Wait, the file size can indicate portrait vs landscape. Or I just pick the right one visually...
        console.log(url);
    }
}
checkAspectRatios();

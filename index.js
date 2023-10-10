const btn = document.getElementsByTagName('button')[0];
const images = [
    'https://cdn.wallpapersafari.com/53/70/KlE4e6.jpg',
    'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt500bad270ce6c5ad/63e6e95f9b18a175e2431347/Val_Banner_PatchNotes_6_03_16x9.jpg',
    'https://wallpapers.com/images/hd/feature-for-valorant-champ-reyna-1et01powk6ekc5uj.jpg',
    'https://c4.wallpaperflare.com/wallpaper/637/872/995/valorant-jett-valorant-riot-games-hd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/855/989/111/valorant-pheonix-valorant-fire-hd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/446/790/403/valorant-viper-battlestar-galactica-video-games-smoke-neon-hd-wallpaper-preview.jpg',
    'https://wallpapers.com/images/high/valorant-agents-1920-x-1080-wallpaper-zuady3ggqaac1n6j.webp', 'https://wallpapers.com/images/high/valorant-agents-1920-x-1080-wallpaper-mq43vmnzb4ggzzsz.webp', 'https://w0.peakpx.com/wallpaper/584/723/HD-wallpaper-sage-valorant-agente-games-riotgames-wiwferr.jpg', 'https://w0.peakpx.com/wallpaper/20/427/HD-wallpaper-astra-valorant-ultra-games-other-games-game-astra-valorant-riot-fps-agent.jpg', 'https://w0.peakpx.com/wallpaper/897/447/HD-wallpaper-yoru-agent-duelist-new-agent-valorant-thumbnail.jpg'
];

let currentImageIndex = 0;

btn.addEventListener('click', function() {
    // Generate a random index for the next image
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const nextImage = images[randomImageIndex];
    document.body.style.backgroundImage = `url('${nextImage}')`;
    currentImageIndex = randomImageIndex;
});

const btn = document.getElementsByTagName('button')[0];
const images = [
    'https://cdn.wallpapersafari.com/53/70/KlE4e6.jpg',
    'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt500bad270ce6c5ad/63e6e95f9b18a175e2431347/Val_Banner_PatchNotes_6_03_16x9.jpg',
    'https://wallpapers.com/images/hd/feature-for-valorant-champ-reyna-1et01powk6ekc5uj.jpg',
    'https://c4.wallpaperflare.com/wallpaper/637/872/995/valorant-jett-valorant-riot-games-hd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/855/989/111/valorant-pheonix-valorant-fire-hd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/446/790/403/valorant-viper-battlestar-galactica-video-games-smoke-neon-hd-wallpaper-preview.jpg'
];

let currentImageIndex = 0;

btn.addEventListener('click', function() {
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    const nextImage = images[nextImageIndex];
    document.body.style.backgroundImage = `url('${nextImage}')`;
    currentImageIndex = nextImageIndex;

});
function openFullscreen(img) {
    const overlay = document.querySelector('.fullscreen-overlay');
    const fullscreenImg = overlay.querySelector('.fullscreen-img');
    
    fullscreenImg.src = img.src;
    overlay.style.display = 'flex';
}

function closeFullscreen() {
    document.querySelector('.fullscreen-overlay').style.display = 'none';
}
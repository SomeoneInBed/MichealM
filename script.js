let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('horizontalNav').style.top = '0';
    } else {
        document.getElementById('horizontalNav').style.top = '-70px';
    }
    prevScrollpos = currentScrollPos;
}

//loadingScreen
document.addEventListener('DOMContentLoaded', function() { 
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000); // Show for at least 1000ms
    }
})


/* window.onload = function() {
    resetLoadingAnimation();
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 800); // Show for at least 800ms
    }
}

//reseting the loading animation
gifContainer = document.getElementById('loadingScreen');
function resetLoadingAnimation() {
    const gifAnimation = gifContainer.querySelector('.animation');

    originalSrc = gifAnimation.src;
    gifAnimation.src = '';
    gifAnimation.src = originalSrc;
} */

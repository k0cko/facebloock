const videoElement = document.querySelector('[href="/watch/?ref=tab');
videoElement?.closest('li')?.remove();

const currentURL = window.location.href;
if (currentURL.includes('/watch/')) {
    const mainDiv = document.querySelector('div[role="main"');
    mainDiv?.remove();
}
let toggleButton = document.getElementById('toggleButton');
let videoSection = document.getElementById('videoSection');
let imageSection = document.getElementById('imageSection');

toggleButton.onclick = () => {
    if (videoSection.style.display !== 'none') {
        videoSection.style.display = 'none';
        imageSection.style.display = 'flex';
    } else {
        videoSection.style.display = 'grid';
        imageSection.style.display = 'none';
    }
};

let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});

document.querySelectorAll('.image-grid img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

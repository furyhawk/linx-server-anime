
(function () {
    // 👇 This code is pretty unstable due to it needing to have the same images in the mascot directory.
    var mascots = ['blue-shark.webp', 'grey-shark.webp', 'red-shark.webp', 'sticker-shark.webp']
    var newMascot = mascots[Math.floor(Math.random() * mascots.length)];
    var imageElement = document.getElementById('mascot').children[0];
    // 👇 This code is pretty unstable because it requires the blue-shark.webp to be the first/default image.
    imageElement.src = imageElement.src.replace('blue-shark.webp', newMascot)
})()
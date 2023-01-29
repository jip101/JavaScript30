window.addEventListener("keydown", (e) => {
    keyPress = e.key.toUpperCase().charCodeAt();
    let audio = document.querySelector(`audio[data-key='${keyPress}']`)
    let drumKey = document.querySelector(`div[data-key='${keyPress}']`)
    if (!audio || !drumKey) return;
    audio.currentTime = 0;
    audio.play();
    drumKey.classList.add('playing')
});


window.addEventListener("keyup", (e) => {
    keyPress = e.key.toUpperCase().charCodeAt();
    let key = document.querySelector(`div[data-key='${keyPress}']`)
    if (!key) return;
    key.classList.remove('playing')
});
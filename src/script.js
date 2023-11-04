
function log_pressed_key(event) {
    let kbd_tag = event.target;
    let letters = ['A', 'S', 'D', 'F', 'G', 'H', 'J','E','T','U','W','Y']
    let key = event.key.toUpperCase()
    if (letters.includes(key)) {
        console.log(`The '${key}' key is pressed.`);
        audio = new Audio(`white_keys\\${key}.mp3`);
        audio.play();
    } else {
        console.log(`Warning: an unbound key '${key}' was pressed.`);
    }

}


for (let key of document.querySelectorAll("kbd")) {
    key.addEventListener("keydown", log_pressed_key)
}
document.addEventListener("keydown", log_pressed_key)
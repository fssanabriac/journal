
let darkMode = false;

changeMode = () => {
    if (!darkMode){
        document.
            getElementById('darkModeButton').
            innerHTML = 'Light';
        document.body.style.backgroundColor = 'grey';
        darkMode = !darkMode;
    }else{
        document.
            getElementById('darkModeButton').
            innerHTML = 'Dark';
        document.body.style.backgroundColor = 'white';
        darkMode = !darkMode;
    }
}

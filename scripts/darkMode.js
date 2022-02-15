
let darkMode = false;
const darkColor = 'grey';
const lightColor = 'white';

changeMode = () => {
  if (!darkMode){
    document.
      getElementById('darkModeButton').
      innerHTML = '<i class="fa-solid fa-sun fa-2x"></i>';
    document.
      getElementById('darkModeButton').
      style.backgroundColor = darkColor;
      document.body.style.backgroundColor = darkColor;
    darkMode = !darkMode;
  }else{
    document.
      getElementById('darkModeButton').
      innerHTML = '<i class="fa-solid fa-moon fa-2x"></i>' ;
    document.
      getElementById('darkModeButton').
      style.backgroundColor = lightColor;
    document.body.style.backgroundColor = lightColor;
    darkMode = !darkMode;
  }
}

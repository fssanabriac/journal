// define variables. get dom elements
const form = document.querySelector('form');
const theme = document.querySelector("[name='theme']");
const inputTitle = document.querySelector("[name='entryTitle']");
const inputBody = document.querySelector("[name='entryBody']");
const items = document.getElementById('items');


const themesSelect = document.getElementById('themeSelector');
const themes = ["ThemeA", "ThemeB", "ThemeC"];

// Insert <option> on <select>
themes.forEach((theme) => {
  const newTheme = document.createElement('option');
  newTheme.innerHTML = theme;
  themesSelect.appendChild(newTheme);
});

// Lifecycle
const lista = Object.keys(localStorage);
const existingItems = []

lista.forEach( (theme) => {
  JSON.parse(localStorage.getItem(theme)).forEach( (item) => {
    existingItems.push(item)
  })
});
//const existingItems = JSON.parse(localStorage.getItem('items')) || [];

const itemArray =  [];



// define update array function
addItem = (inputTheme, inputTitle, inputBody) =>{
  console.log("Pushing: ", inputTheme, inputTitle, inputBody);
  const itemObject = {themeName : inputTheme, title: inputTitle, body : inputBody};
  itemArray.push(itemObject);
  console.log("itemArray: ", itemArray);

  const newItem = document.createElement('li');
  newItem.innerHTML = "<button>" + `${inputTheme}` + "</button>" + 
    "<span>" + `${inputTitle }` + "</span>" + "<br>" + 
    "<p>" + `${inputBody}` + "</p>"; 

  items.appendChild(newItem);


  const currentThemeItems = JSON.parse(localStorage.getItem(inputTheme)) || [];
  currentThemeItems.push(itemObject);
  localStorage.setItem(inputTheme, JSON.stringify(currentThemeItems));
  //localStorage.setItem(inputTheme, JSON.stringify(itemArray));
}

// Add existing Items to itemArray
existingItems.forEach(item  => {
  addItem(item.themeName, item.title, item.body);
}
);

// add event listener for submit
form.onsubmit = (event) =>{

  event.preventDefault();
  //console.log(form, inputTitle, inputBody);
  addItem(theme.value, inputTitle.value, inputBody.value)
}



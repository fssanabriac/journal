// Define variables. get dom elements
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

// Lifecycle: retrieve existing items from localStorage.
const lista = Object.keys(localStorage);
const existingItems = []

lista.forEach( (theme) => {
  JSON.parse(localStorage.getItem(theme)).forEach( (item) => {
    existingItems.push(item)
  })
});

// Define update UI and localStorage function
addItem = (inputTheme, inputTitle, inputBody, onLocalStorage) =>{

  console.log("Pushing: ", inputTheme, inputTitle, inputBody);
  const itemObject = {themeName : inputTheme, title: inputTitle, body : inputBody};

  // Insert new element inside HTML (UI).
  const newItem = document.createElement('li');
  newItem.innerHTML = "<div id=\"liHeader\">" + 
      "<span>" + `${inputTitle }` + "</span>" +  
      "<button>" + `${inputTheme}` + "</button>" + 
    "</div>" + "<hr>" + 
    "<p>" + `${inputBody}` + "</p>"; 

  items.appendChild(newItem);


  const currentThemeItems = JSON.parse(localStorage.getItem(inputTheme)) || [];

  if (!onLocalStorage){ currentThemeItems.push(itemObject)};
  localStorage.setItem(inputTheme, JSON.stringify(currentThemeItems));

  inputTitle.value = '';
  inputBody.value = '';
  inputTheme.value = 'ThemeA';
}

// Add existing Items to UI.
existingItems.forEach(item  => {
  addItem(item.themeName, item.title, item.body, true);
}
);

// Add event listener for submit
form.onsubmit = (event) =>{

  event.preventDefault();
  //console.log(form, inputTitle, inputBody);
  addItem(theme.value, inputTitle.value, inputBody.value, false);
}



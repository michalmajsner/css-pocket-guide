const themeDictionary = {
    dark: "light",
    light: "dark"
};
  
const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeDictionary)[0],
        localStorage.setItem('theme', tmp),
        tmp);
const mainSectionClass = document.querySelector("main").classList;
mainSectionClass.add(theme);
  
function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeDictionary[current];
  
  mainSectionClass.replace(current, next);
  localStorage.setItem('theme', next);
}
  
document.querySelector('.switchTheme').onclick = toggleTheme;
  

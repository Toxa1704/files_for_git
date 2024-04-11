const styleshets = document.styleSheets[1];
// console.log(styleshets);

const boxbody = [...styleshets.cssRules].find((y) => y.selectorText === ":root",);
console.log(boxbody);

boxbody.style.setProperty("--background-color", "#1c1c1e");
boxbody.style.setProperty("--text-color", "#adbac7");
boxbody.style.setProperty("--primary-dark", "#ffffff");
boxbody.style.setProperty("--highlight-color", "#f6c177");
boxbody.style.setProperty("--secondary-text-color", "#768390");
boxbody.style.setProperty("--bg-btn-color", "#f6c177");
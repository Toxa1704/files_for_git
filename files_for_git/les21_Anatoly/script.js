const contentArray = [
  {
    title: "Манго",
    text: "Манго багате на вітамін C та антиоксиданти, корисне для імунітету.",
    imagePath: "./img/mango.jpg",
    altText: "Зображення манго",
  },
  {
    title: "Драконів фрукт",
    text: "Драконів фрукт сприяє зниженню рівня цукру в крові.",
    imagePath: "./img/Pitaya.jpg",
    altText: "Зображення драконівого фрукта",
  },
  {
    title: "Лічі",
    text: "Лічі містить багато вітаміну В, корисне для нервової системи.",
    imagePath: "./img/lychees.jpg",
    altText: "Зображення лічі",
  },
  {
    title: "Ківі",
    text: "Фрукт дуже багатий на вітаміни, особливо А, В, С, мінеральні солі, а також дубильні речовини та ферменти, що розчиняють білок.",
    imagePath: "./img/kiwi.jpg",
    altText: "Зображення ківі",
  },
];


contentArray.forEach((fruit, i) => {
const articleCr = document.createElement("article")
const article = document.body.appendChild(articleCr)

const title = document.createElement("h3")
title.textContent = `${fruit.title}`

const img = document.createElement("img")
img.src = `${fruit.imagePath}`
img.alt = `${fruit.altText}`

const parag = document.createElement("p")
parag.textContent = `${fruit.text}`

articleCr.appendChild(title)
articleCr.appendChild(img)
articleCr.appendChild(parag)              
})


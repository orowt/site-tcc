let videos = [
  {
      "id": 1,
      "image": "silksong.jpg",
      "name": "Curso Python #01",
      "link": "https://youtu.be/phWxA89Dy94"
  },
  {
      "id": 2,
      "image": "",
      "name": "Curso Python #02",
      "link": ""
  },
  {
      "id": 3,
      "image": "",
      "name": "Curso Python #03",
      "link": ""
  },
  {
      "id": 4,
      "image": "",
      "name": "Curso Python #04",
      "link": ""
  },
  {
      "id": 5,
      "image": "",
      "name": "Curso Python #05",
      "link": ""
  },
  {
      "id": 6,
      "image": "",
      "name": "Curso Python #06",
      "link": ""
  },
  {
      "id": 7,
      "image": "",
      "name": "Curso Python #07",
      "link": ""
  },
  {
      "id": 8,
      "image": "",
      "name": "Curso Python #08",
      "link": ""
  },
  {
      "id": 9,
      "image": "",
      "name": "Curso Python #09",
      "link": ""
  },
  {
      "id": 10,
      "image": "",
      "name": "Curso Python #10",
      "link": ""
  },
  {
      "id": 11,
      "image": "",
      "name": "Curso Python #11",
      "link": ""
  },
  {
      "id": 12,
      "image": "",
      "name": "Curso Python #12",
      "link": ""
  }
]

document.getElementById("videos").innerHTML = videos
  .map(
    (item) =>
      `<a href="${item.link}">
        <div class="item">
          <img class="image-reset" src="${item.image}" />
          <div class="flex gap-10 items-center">
              <p>${item.name}</p>
          </div>
        </div>
      </a>
      `
  )
  .join("");

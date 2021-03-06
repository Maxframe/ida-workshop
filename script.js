const files = ["max", "niklas", "ruben"];

files.forEach((name) => {
  fetch(`./data/${name}.json`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data, name);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
  // create for every array element in the json this new HTML
  function appendData(data, name) {
    let mainContainer = document.getElementById(`${name}Data`);
    data.forEach((obj) => {
      var newElement = `
        <a class="button" href="${obj.link}" target="_blank">
          <img src="/img/${name}/${obj.img}">
        </a>`;
      mainContainer.insertAdjacentHTML("beforeend", newElement);
    });
  }
})

let menuDesc = document.getElementById('menu-desc');
let menuMax = document.getElementById('menu-max');
let menuNiklas = document.getElementById('menu-niklas');
let menuRuben = document.getElementById('menu-ruben')
let windowWidth = window.innerWidth;

let main = document.getElementsByTagName("main")[0];
main.addEventListener("scroll", (event) => {
  let scrollLeft = main.scrollLeft;

  if (scrollLeft < 0.5*windowWidth) {
    menuDesc.classList.add('highlight');
    menuMax.classList.remove('highlight')
    menuNiklas.classList.remove('highlight')
    menuRuben.classList.remove('highlight')
  } else if (scrollLeft < 1.5*windowWidth) {
    menuMax.classList.add('highlight');
    menuDesc.classList.remove('highlight')
    menuNiklas.classList.remove('highlight')
    menuRuben.classList.remove('highlight')
  } else if (scrollLeft < 2.5*windowWidth) {
    menuNiklas.classList.add('highlight');
    menuMax.classList.remove('highlight')
    menuDesc.classList.remove('highlight')
    menuRuben.classList.remove('highlight')
  } else {
    menuRuben.classList.add('highlight');
    menuMax.classList.remove('highlight')
    menuNiklas.classList.remove('highlight')
    menuDesc.classList.remove('highlight')
  }
});

menuDesc.addEventListener("click", function () {main.scrollTo(0, 0)} );
menuMax.addEventListener("click", function () {main.scrollTo(windowWidth, 0)} );
menuNiklas.addEventListener("click", function () {main.scrollTo(2*windowWidth, 0)} );
menuRuben.addEventListener("click", function () {main.scrollTo(3*windowWidth, 0)} );

main.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.deltaY > 0) {
    main.scrollBy(windowWidth, 0);
  } else if (event.deltaY < 0) {
    main.scrollBy(-windowWidth, 0);
  }
});
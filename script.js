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

// nav highlight
let menuDesc = document.getElementById('menu-desc');
let menuMax = document.getElementById('menu-max');
let menuNiklas = document.getElementById('menu-niklas');
let menuRuben = document.getElementById('menu-ruben')
let windowWidth = window.innerWidth;

let main = document.getElementsByTagName("main")[0];
main.addEventListener("scroll", (event) => {
  let scrollLeft = main.scrollLeft;

  if (scrollLeft < 0.5*windowWidth) {
    // add the class
    menuDesc.classList.add('highlight');
    // removing the class
    menuMax.classList.remove('highlight')
    menuNiklas.classList.remove('highlight')
    menuRuben.classList.remove('highlight')
  } else if (scrollLeft < 1.5*windowWidth) {
    // add the class
    menuMax.classList.add('highlight');
    // removing the class
    menuDesc.classList.remove('highlight')
    menuNiklas.classList.remove('highlight')
    menuRuben.classList.remove('highlight')
  } else if (scrollLeft < 2.5*windowWidth) {
    // add the class
    menuNiklas.classList.add('highlight');
    // removing the class
    menuMax.classList.remove('highlight')
    menuDesc.classList.remove('highlight')
    menuRuben.classList.remove('highlight')
  } else {
    // add the class
    menuRuben.classList.add('highlight');
    // removing the class
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
  main.scrollBy(event.deltaY, 0);
});
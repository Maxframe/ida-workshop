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
window.addEventListener("scroll", (event) => {
  let scrollX = this.scrollX;
  let windowWidth = window.innerWidth;

  if (scrollX < windowWidth) {
    // add the class
    document.getElementById('menu-desc').classList.add('highlight');
    // removing the class
    document.getElementById('menu-max').classList.remove('highlight')
    document.getElementById('menu-niklas').classList.remove('highlight')
    document.getElementById('menu-ruben').classList.remove('highlight')
  } else if (scrollX < 2*windowWidth) {
    // add the class
    document.getElementById('menu-max').classList.add('highlight');
    // removing the class
    document.getElementById('menu-desc').classList.remove('highlight')
    document.getElementById('menu-niklas').classList.remove('highlight')
    document.getElementById('menu-ruben').classList.remove('highlight')
  } else if (scrollX < 3*windowWidth) {
    // add the class
    document.getElementById('menu-niklas').classList.add('highlight');
    // removing the class
    document.getElementById('menu-max').classList.remove('highlight')
    document.getElementById('menu-desc').classList.remove('highlight')
    document.getElementById('menu-ruben').classList.remove('highlight')
  } else {
    // add the class
    document.getElementById('menu-ruben').classList.add('highlight');
    // removing the class
    document.getElementById('menu-max').classList.remove('highlight')
    document.getElementById('menu-niklas').classList.remove('highlight')
    document.getElementById('menu-desc').classList.remove('highlight')
  }
  console.log(scrollX);
});
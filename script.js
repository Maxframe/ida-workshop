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
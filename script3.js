// import data from json
fetch("./data/ruben.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
// create for every array element in the json this new HTML
function appendData(data) {
  let mainContainer = document.getElementById("myData");
  data.forEach((obj) => {
    var newElement = `
      <a class="button" href="${obj.link}" target="_blank">
        <img src="/img/ruben/${obj.img}">
      </a>`;
    mainContainer.insertAdjacentHTML("beforeend", newElement);
  });
}

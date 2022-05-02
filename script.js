// import data from json
fetch('./data/niklas.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(data) {
  let mainContainer = document.getElementById("myData");
  data.forEach((obj) => {
    console.log(obj.link)
    console.log(obj.img)
    // create <a> tag
    let a = document.createElement("a");
    a.href=obj.link;
    
    // create <img> inside
    a.appendChild(document.createElement("img")).src = '/img/niklas/' + obj.img;

    mainContainer.appendChild(a);
  })
}
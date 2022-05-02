const data = [
  {
    img: "b1.png",
    link: "https://drive.google.com/drive/u/0/my-drive",
  },
  {
    img: "b2.png",
    link: "https://www.reddit.com/coins",
  },
  {
    img: "b3.png",
    link: "https://tailwindcss.com/docs/installation",
  },
  {
    img: "b4.png",
    link: "https://www.digitec.ch/de/magazine",
  },
  {
    img: "b5.png",
    link: "https://www.youtube.com/feed/subscriptions",
  },
  {
    img: "b6.png",
    link: "https://nextjs.org/learn/foundations/about-nextjs",
  },
  {
    img: "b7.png",
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    img: "b8.png",
    link: "https://keep.google.com/u/0/#home",
  },
  {
    img: "b9.png",
    link: "https://www.netlify.com/pricing/",
  },
  {
    img: "b10.png",
    link: "https://www.cineman.ch/kinoprogramm/zuerich/",
  },
  {
    img: "b11.png",
    link: "https://apply.microverse.org/",
  },
  {
    img: "b12.png",
    link: "https://www.notion.so/desktop",
  },
  {
    img: "b13.png",
    link: "https://www.magazinesdirect.com/categories/tech/",
  },
  {
    img: "b14.png",
    link: "https://steamcharts.com/",
  },
  {
    img: "b15.png",
    link: "https://www.ecotreuhand.ch/terminvereinbarung/",
  },
  {
    img: "b16.png",
    link: "https://meeting.zuerich.com/en/cvb-newsletter",
  },
  {
    img: "b17.png",
    link: "https://www.twint.ch/download/",
  },
  {
    img: "b18.png",
    link: "https://www.nvidia.com/en-us/studio/canvas/",
  },
  {
    img: "b19.png",
    link: "https://www.shop-apotheke.com/arzneimittel/4652515/wasserstoffperoxid-loesung-3.htm",
  },
  {
    img: "b20.png",
    link: "https://www.gesundheitsinformation.de/service/kontakt/",
  },
  {
    img: "b21.png",
    link: "https://winterthur.com/de/buchen.html",
  },
  {
    img: "b22.png",
    link: "https://www.instagram.com/superdot_studio/",
  },
  {
    img: "b23.png",
    link: "https://www.deepl.com/pro?cta=header-pro-button",
  },
  {
    img: "b24.png",
    link: "https://www.wappalyzer.com/",
  },
  {
    img: "b25.png",
    link: "https://www.hslu.ch/de-ch/zllf/lehr-und-lerninfrastruktur/lernplattform-ilias/",
  },
  {
    img: "b26.png",
    link: "https://www.wikipedia.org/",
  },
  {
    img: "b27.png",
    link: "https://www.harpersbazaar.de/zeitgeist/kuenstlerportraet-schneller-als-das-licht",
  },
  {
    img: "b28.png",
    link: "https://de.langenscheidt.com/",
  },
  {
    img: "b29.png",
    link: "https://minus.social/",
  },
  {
    img: "b30.png",
    link: "https://p5js.org/reference/",
  },
  {
    img: "b31.png",
    link: "https://imgur.com/upload",
  },
  {
    img: "b32.png",
    link: "https://lunch-casino.com/",
  },
  {
    img: "b33.png",
    link: "https://www.grillitype.com/shops/gt-walsheim",
  },
  {
    img: "b34.png",
    link: "https://emp.jobylon.com/applications/jobs/109073/create/",
  },
];

/* const data = [];

fetch(",/data/max.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  }); */

let mainContainer = document.getElementById("myData");
data.forEach((obj) => {
  // console.log(obj.link);
  // console.log(obj.img);

  // create <a> tag
  let a = document.createElement("a");
  a.href = obj.link;
  a.target = "_blank";
  // create <img> inside
  let image = document.createElement("img")
  image.onload = this.naturalWidth*=0.5;
  image.src = "/img/max/" + obj.img;
  a.appendChild(image);
  a.classList.add("button");
  mainContainer.appendChild(a);
});

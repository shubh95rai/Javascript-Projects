const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const image = document.querySelector(".image");
const username = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let count = 0;

function showPerson() {
  let person = reviews[count];
  image.src = person.img;
  username.textContent = person.name;
  job.textContent = person.job;
  text.textContent = person.text;
}

window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

leftBtn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = reviews.length - 1;
  }
  showPerson();
});

rightBtn.addEventListener("click", () => {
  count++;
  if (count === reviews.length) {
    count = 0;
  }
  showPerson();
});

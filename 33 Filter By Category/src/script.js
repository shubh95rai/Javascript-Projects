const data = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "thumps up",
    category: "drink",
    price: 5,
    img: "./images/thumpsup.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "coca cola",
    category: "drink",
    price: 7,
    img: "./images/coca-cola.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const categories = document.querySelector(".categories");
const items = document.querySelector(".items");

window.addEventListener("DOMContentLoaded", () => {
  displayCategories();
  displayItems(data);
});

function displayCategories() {
  const categoriesArray = data.map((item) => {
    return item.category;
  });

  const newCategories = ["all", ...new Set(categoriesArray)];

  categories.innerHTML = newCategories
    .map((category) => {
      return `<div class="category bg-neutral-300 px-4 py-2 rounded text-neutral-900 capitalize  font-semibold ${category === "all" ? "active" : ""}"  data-id=${category}>${category}</div>`;
    })
    .join("");

  const allCategories = document.querySelectorAll(".category");

  function filterItems(seletedCategory) {
    if (seletedCategory === "all") {
      displayItems(data);
      return;
    }

    const newItems = data.filter((item) => {
      return item.category === seletedCategory;
    });

    displayItems(newItems);
  }

  allCategories.forEach((category) => {
    category.addEventListener("click", (e) => {
      const seletedCategory = e.target.dataset.id;

      filterItems(seletedCategory);

      if (!e.target.classList.contains("active")) {
        const alreadyActive = document.querySelector(".active");

        alreadyActive.classList.remove("active");

        e.target.classList.add("active");
      }
    });
  });
}

function displayItems(data) {
  items.innerHTML = data
    .map((item) => {
      return `<div class="bg-neutral-800 p-5 flex  items-center rounded capitalize">${item.title}</div>`;
    })
    .join("");
}

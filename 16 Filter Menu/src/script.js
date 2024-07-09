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
    price: 5.99,
    img: "./images/thumpsup.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "coca cola",
    category: "drink",
    price: 7.99,
    img: "./images/coca-cola.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const categories = document.querySelector(".category");
const menuItems = document.querySelector(".menu");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuButtons();
  displayMenuItems(data);
});

function displayMenuButtons() {
  const categoriesArray = data.map((item) => {
    return item.category;
  });

  const newCategories = ["all", ...new Set(categoriesArray)];

  categories.innerHTML = newCategories
    .map((item) => {
      return `<button class="btn hover:bg-yellow-600 py-2 px-4 rounded hover:text-white transition-all text-yellow-600 font-medium" data-id=${item}>
        ${item[0].toUpperCase()}${item.slice(1)}
      </button>`;
    })
    .join("");

  function filteredMenuItems(seletedCategory) {
    if (seletedCategory === "all") {
      displayMenuItems(data);
      console.log(seletedCategory);
      return;
    }

    let newMenuItems = data.filter((item) => {
      return item.category === seletedCategory;
    });

    displayMenuItems(newMenuItems);
  }

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filteredMenuItems(e.target.dataset.id);
    });
  });
}

function displayMenuItems(data) {
  menuItems.innerHTML = data
    .map((item) => {
      return `<article class="flex gap-5 h-[150px]">
        <img
          src="${item.img}"
          alt=""
          class="rounded border-2 border-yellow-600 h-[150px] object-cover min-w-60"
        />
  
        <div>
          <div class="flex justify-between">
            <h1 class="font-bold text-lg tracking-wider">${item.title[0].toUpperCase()}${item.title.slice(1)}</h1>
            <p class="text-yellow-600 font-bold text-lg tracking-wider">
              $${item.price}
            </p>
          </div>
          <div class="h-[.25px] bg-neutral-400 mt-1"></div>
          <p class="text-sm text-neutral-600 mt-4">${item.desc}</p>
        </div>
      </article>`;
    })
    .join("");
}

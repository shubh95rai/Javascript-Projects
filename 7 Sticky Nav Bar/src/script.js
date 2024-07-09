const testimonials = [
  {
    name: "Sarah J.",
    testimonial:
      "Absolutely blown away by the service! John and his team went above and beyond to ensure our satisfaction. Will definitely be recommending to all my friends.",
  },
  {
    name: "Michael S.",
    testimonial:
      "I've never experienced such professionalism and efficiency before. Kudos to Emily for her outstanding assistance!",
  },
  {
    name: "Amanda R.",
    testimonial:
      "James provided exceptional support throughout the entire process. Couldn't be happier with the results!",
  },
  {
    name: "David L.",
    testimonial:
      "Hats off to Samantha for her expertise and dedication. Our project wouldn't have been a success without her!",
  },
  {
    name: "Jennifer M.",
    testimonial:
      "Hands down the best customer service I've ever received. Thank you, Lisa, for making our experience seamless!",
  },
];

const image = document.querySelector(".image");
const testi = document.querySelector(".testi");
const author = document.querySelector(".author");

const imageUrl = [
  "https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&w=100",
  "https://images.pexels.com/photos/19248894/pexels-photo-19248894/free-photo-of-a-woman-in-a-black-t-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=100",
  "https://images.pexels.com/photos/13440112/pexels-photo-13440112.jpeg?auto=compress&cs=tinysrgb&w=100",
  "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=100",
  "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=100",
];

let counter = 1;

setInterval(() => {
  image.src = imageUrl[counter];

  let randomTesti = testimonials[counter];

  testi.textContent = randomTesti.testimonial;
  author.textContent = randomTesti.name;

  counter++;

  if (counter === testimonials.length) {
    counter = 0;
  }
}, 2000);

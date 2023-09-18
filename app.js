const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Bata",
      price: 4056,
      colors: [
        {
          code: "black",
          img: "./img/Bata.png",
        },
        {
          code: "darkblue",
          img: "./img/BATA2.PNG",
        },
      ],
    },

    
    {
      id: 2,
      title: "Adidas",
      price: 5786.85,
      colors: [
        {
          code: "lightgray",
          img: "./img/adidas.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Reebok",
      price: 9056.85,
      colors: [
        {
          code: "lightgray",
          img: "./img/reebok.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Nike",
      price: 12666.85,
      colors: [
        {
          code: "black",
          img: "./img/nike.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Jordon",
      price: 20056.85,
      colors: [
        {
          code: "gray",
          img: "./img/jordon.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let chosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg"); 
  const currentProductTitle = document.querySelector(".productTitle"); 
  const currentProductPrice = document.querySelector(".productPrice"); 
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".sizes");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {

        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        chosenProduct = products[index]

        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img
    })
})

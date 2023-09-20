const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Sketchers",
      price: 4056,
      colors: [
        {
          code: "black",
          img: "./img/sketchers.png",
        },
        {
          code: "darkblue",
          img: "./img/sketchers2.png",
        },
      ],
    },

    
    {
      id: 2,
      title: "Adidas",
      price: 5786.85,
      colors: [
        {
          code: "red",
          img: "./img/adidas.png",
        },
        {
          code: "skyblue",
          img: "./img/adidas2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Reebok",
      price: 9056.85,
      colors: [
        {
          code: "Pink",
          img: "./img/reebok.png",
        },
        {
          code: "green",
          img: "./img/reebok2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Nike",
      price: 12666.85,
      colors: [
        {
          code: "blue",
          img: "./img/nike.png",
        },
        {
          code: "red",
          img: "./img/nike2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Jordon",
      price: 20056.85,
      colors: [
        {
          code: "orange",
          img: "./img/crater2.png",
        },
        {
          code: "black",
          img: "./img/crater.png",
        },
      ],
    },
  ];

  let chosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg"); 
  const currentProductTitle = document.querySelector(".productTitle"); 
  const currentProductPrice = document.querySelector(".productPrice"); 
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

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


currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

  const productButton = document.querySelector(".productButton"); 
  const payment = document.querySelector(".payment"); 
  const close = document.querySelector(".close"); 

  productButton.addEventListener("click",()=>{
    payment.style.display="flex"
  })

  close.addEventListener("click",()=>{
    payment.style.display="none"
  })




const toys = [
    {
      name: "Cute Teddy",
      image: "https://cdn.pixabay.com/photo/2017/10/10/21/46/teddy-2831272_1280.jpg"
    },
    {
      name: "Speedy Car",
      image: "https://cdn.pixabay.com/photo/2013/07/12/19/01/car-154444_1280.png"
    },
    {
      name: "Color Blocks",
      image: "https://cdn.pixabay.com/photo/2016/03/31/20/17/building-blocks-1293115_1280.png"
    },
    {
      name: "Sweet Doll",
      image: "https://cdn.pixabay.com/photo/2014/12/21/23/28/doll-576451_1280.png"
    }
  ];
  
  const container = document.getElementById('toyContainer');
  const cartList = document.getElementById('cartList');
  
  function addToCart(name) {
    const item = document.createElement('li');
    item.textContent = name;
    cartList.appendChild(item);
  }
  
  toys.forEach(toy => {
    const card = document.createElement('div');
    card.className = 'toy-card';
  
    card.innerHTML = `
      <img src="${toy.image}" alt="${toy.name}" />
      <h3>${toy.name}</h3>
      <button onclick="addToCart('${toy.name}')">Add to Cart</button>
    `;
  
    container.appendChild(card);
  });
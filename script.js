
/*CODIGO PARA MOSTRAR  MENU DESKTOP*/
const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navBarEmail.addEventListener('click', toggleDisplayMenu);

function toggleDisplayMenu() {
    desktopMenu.classList.toggle('inactive');  
    shopCartView.classList.add('inactive');

}



/*CODIGO PARA MOSTRAR  MENU MOBILE*/
const menuIcon= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('activate');
    shopCartView.classList.add('inactive');

}


/*VISTA CARRRITO DE COMPRAS*/

const shopCartView = document.querySelector('.product-detail');
const shopCart = document.querySelector('.navbar-shopping-cart');

shopCart.addEventListener('click', toggleShopCartView);

function toggleShopCartView() {
    shopCartView.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.remove('activate');

}





/*Agregar productos*/


const cardsContainer = document.querySelector('.cards-container');


const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    name: 'Television HD',
    price: 10000,
    image: 'https://m.media-amazon.com/images/I/81DM+ZzL8rL._AC_SX300_SY300_.jpg'
}) 
productList.push({
    name: 'Teclado y Mouse',
    price: 3000,
    image: 'https://m.media-amazon.com/images/I/71y87QFHegL._AC_SX679_.jpg'
})
productList.push({
    name: 'Telefono Samsung',
    price: 7000,
    image: 'https://m.media-amazon.com/images/I/717yeZFskGL._AC_SX569_.jpg'
})
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});     


function imprimirProductos(arregloProductos) {
    for (producto of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', producto.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + producto.price;
    
        const productName = document.createElement('p');
        productName.innerText = producto.name;
    
        const figure = document.createElement('figure');
        
        const imgIcon = document.createElement('img');
        imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg' );
    
        /*Metiendo todo dentro de lo anterior*/
    
        figure.appendChild(imgIcon);
        productInfoDiv.append(productName, productPrice);
        productInfo.append(figure, productInfoDiv);
        productCard.append(img, productInfo);
    
        cardsContainer.append(productCard);
    }
    
}

imprimirProductos(productList);
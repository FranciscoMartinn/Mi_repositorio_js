/*~~~ CARRITO ~~~*/

let productos = [
    {
        id: "k141516asdas-14151",
        name: "Muzzarella",
        price: 3200,
        img: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
        description: "Pizza Muzzarella"
    },
    {
        id: "k141516asdas-14152",
        name: "Cebolla Caramelizada",
        price: 4700,
        img: 'https://www.hola.com/imagenes/cocina/recetas/20240227250035/pizza-casera-champinon-cebolla-caramelizada/1-398-719/pizza-cebolla-adobe-t.jpg?im=Resize=(680)',
        description: "Pizza de Cebolla Caramelizada"

    },
    {
        id: "k141516asdas-14153",
        name: "Calabresa",
        price: 3800,
        img: 'https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1002842.jpg',
        description: "Pizza Calabresa"
    },
    {
        id: "k141516asdas-14154",
        name: "Especial",
        price: 4000,
        img: 'https://images.rappi.com.ar/restaurants_background/arpizzazeta-1665697253003.jpg',
        description: "Pizza Especial"
    },
    {
        id: "k141516asdas-14155",
        name: "Romana",
        price: 4700,
        img: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg',
        description: "Pizza Romana"

    },
    {
        id: "k141516asdas-14156",
        name: "Rucala y Jamon Crudo",
        price: 5450,
        img: 'https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo.jpg',
        description: "Pizza de Rucula y Jamon Crudo"
    },
    {
        id: "k141516asdas-14157",
        name: "Doble Muzza",
        price: 3800,
        img: 'https://lighthouseco.work/web/image/product.template/294/image_1024?unique=5aef38c',
        description: "Pizza Doble Muzzarella"
    },
    {
        id: "k141516asdas-14158",
        name: "Hawaiana",
        price: 4000,
        img: 'https://assets.unileversolutions.com/recipes-v2/244028.jpg',
        description: "Pizza de Jamon y Ananá"
    },
    {
        id: "k141516asdas-14159",
        name: "Napo",
        price: 4000,
        img: 'https://pizzeriaciao.es/wp-content/uploads/2020/03/BLOG-RECETA-PIZZA-MARGARITA-MAR17-800x600-1.jpg.webp',
        description: "Pizza Napolitana"

    },
    {
        id: "k141516asdas-141510",
        name: "Pizza de Aceitunas",
        price: 5000,
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/f7/37/2e/gondola-pizza.jpg',
        description: "Pizza de Aceitunas Negras"
    }
];

mostrarProductos();
mostrarCarrito();

function mostrarProductos() {
    let contenedor = document.querySelector('#productos');
    let productosHTML = '';

    for (const product of productos) {
        productosHTML += `
        <div class="card" id=${product.id}>
            <img src=${product.img} alt=${product.description}>
            <div class="card-product">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <b>$${product.price}</b>
                <button class="agregar-carrito" data-id=${product.id}>Agregar</button>
            </div>
        </div>
    `;
    }

    contenedor.innerHTML = productosHTML;

    document.querySelectorAll('.agregar-carrito').forEach(btn => {
        btn.addEventListener('click', () => {
            const productoID = btn.getAttribute('data-id');
            agregarAlCarrito(productoID);
        });
    });
}

function agregarAlCarrito(productoID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const products = productos.find(product => product.id === productoID);
    const productosEnCarrito = carrito.find(p => p.id === productoID);

    if (productosEnCarrito) {
        productosEnCarrito.cantidad += 1;
        productosEnCarrito.totalPrice = productosEnCarrito.cantidad * productosEnCarrito.price;
    } else {
        carrito.push({
            id: productoID,
            name: products.name,
            price: products.price,
            cantidad: 1,
            totalPrice: products.price
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedorCarrito = document.querySelector('#contenedor-carrito');
    let footer = document.querySelector('#total');
    let carritoHTML = '';

    for (const p of carrito) {
        carritoHTML += `
        <div class="card-carrito" id=${p.id}>
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <p>Cantidad: ${p.cantidad}</p>
            <p>Total: $${p.totalPrice}</p>
            <button class="eliminar-carrito" data-id=${p.id}>Eliminar</button>
        </div>
        `;
    }

    contenedorCarrito.innerHTML = carritoHTML;

    document.querySelectorAll('.eliminar-carrito').forEach(btn => {
        btn.addEventListener('click', () => {
            let btnDelete = btn.getAttribute('data-id');
            eliminarDelCarrito(btnDelete);
        });
    });

    let totalCarrito = carrito.reduce((acc, p) => acc + p.totalPrice, 0);

    footer.innerHTML = `Total: $${totalCarrito}`
}

function eliminarDelCarrito(deleteID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = carrito.filter(p => p.id !== deleteID);

    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    mostrarCarrito();
}

/*---MODO OSCURO---*/

let btnColorMode = document.querySelector("#color-mode");

btnColorMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        btnColorMode.innerText = "🌞"
    } else {
        btnColorMode.innerText = "🌙"
    }
})


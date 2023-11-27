const usersStart = [{
    fullname: 'John Doe',
    age: 30,
    email: 'admin@admin.com',
    id: '1',
    active: true,
    password: 'admin',
    bornDate: 725846400000,
    location: 'La Luna',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
    role: 'ADMIN_ROLE'
},
{
    fullname: 'Jane Doe',
    age: 25,
    email: 'jane.doe@example.com',
    id: '2',
    active: false,
    password: 'password456',
    bornDate: new Date('1998-05-05').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280',
    role: 'CLIENT_ROLE'
},
{
    fullname: 'Alice Johnson',
    age: 35,
    email: 'alice.johnson@example.com',
    id: '3',
    active: true,
    password: 'password789',
    bornDate: new Date('1988-08-08').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325',
    role: 'CLIENT_ROLE',
},
{
    fullname: 'Michael Smith',
    age: 40,
    email: 'michael.smith@example.com',
    id: '4',
    active: false,
    password: 'password101',
    bornDate: new Date('1983-04-10').getTime(),
    location: 'San Luis',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280',
    role: 'CLIENT_ROLE',
},
{
    fullname: 'Emily Johnson',
    age: 28,
    email: 'emily.johnson@example.com',
    id: '5',
    active: true,
    password: 'password202',
    bornDate: new Date('1995-02-15').getTime(),
    location: 'Córdoba',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325',
    role: 'CLIENT_ROLE',
},
{
    fullname: 'Daniel Lee',
    age: 34,
    email: 'daniel.lee@example.com',
    id: '6',
    active: false,
    password: 'password303',
    bornDate: new Date('1989-07-07').getTime(),
    location: 'Buenos Aires',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325',
    role: 'CLIENT_ROLE',
},
];

if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(usersStart))
}

const productStart = [
    {
        name: 'play 5',
        image: "/assets/productos/ps/ps5.webp",
        description: "La PS5 de Sony: Juegos de última generación con gráficos espectaculares de hasta 4K, controlador innovador y tiempos de carga ultrarrápidos gracias a su SSD. Una experiencia de juego inmersiva y entretenimiento de vanguardia en una sola consola.",
        price: 870000,
        date: (new Date('2020-04-11')).getTime(),
        id: 1,
    },
    {
        name: 'play 4',
        image: "/assets/productos/ps/ps4.jpg",
        description: "La PlayStation 4 es una consola de videojuegos de la empresa Sony. Fue lanzada en 2013 y es la cuarta generación de la serie de consolas PlayStation. La PS4 se destaca por su potencia de procesamiento",
        price: 530000,
        date: (new Date('2020-04-11')).getTime(),
        id: 2,
    },
    {
        name: 'play 3',
        image: "/assets/productos/ps/ps3.jpg",
        description: "La PlayStation 3 es una consola de videojuegos lanzada por Sony en 2006. Fue la tercera integraciónde la serie PlayStation.La PS3 se destacó por su capacidad para reproducir discos ,lo que la convirtió en una plataforma multimedia versátil además de una consola de juegos. Introdujo el controlador inalámbrico DualShock 3 con detección de movimiento y vibración",
        price: 270000,
        date: (new Date('2020-04-11')).getTime(),
        id: 3,
    },
    {
        name: 'play 2',
        image: "/assets/productos/ps/ps2.jpg",
        description: "La PlayStation 2 es una consola de videojuegos desarrollada por Sony y lanzada en 2000. Es la sucesora de la PlayStation original y fue una de las consolas más exitosas de todos los tiempos. La PS2 presentó avances tecnológicos en términos de gráficos y jugabilidad en comparación con su predecesora.",
        price: 150000,
        date: (new Date('2020-04-11')).getTime(),
        id: 4,
    },
];

if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify(productStart))
} 

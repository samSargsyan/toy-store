import bear from '../assets/images/bear.png';
import th from '../assets/images/th.png';
import minion from '../assets/images/minion.png';
import slinky from '../assets/images/slinky.png';
import home from '../assets/images/homeToy.png';

var items = [
    {
        id:0,
        name: "Toy Bear",
        src: bear,
        desc: 'a toy bear with an outer fabric sewn from a textile and stuffed with flexible material. They are known by many names, such as plush toys, plushies, stuffed animals, and stuffies.',
        price: 15.99,
        age: 0
    },
    {
        id:1,
        name: "Pluto Toy",
        src: th,
        desc: 'A dog toy originally from Mickey Mouse.',
        price: 10.99,
        age: 0
    },
    {
        id:2,
        name: "Minion Toy",
        src: minion,
        desc: 'A yellow creature originally from Despicable Me',
        price: 20.99,
        age: 0
    },
    {
        id:3,
        name: "Home Toy",
        src: home,
        desc: 'A purple creature originally taken from Home.',
        price: 5.99,
        age: 3
    },
    {
        id:4,
        name: "Slinky Toy",
        src: slinky,
        desc: 'A slinky dog that was originally made by Toy Story.',
        price: 18.99,
        age: 5 
    }
]

export default items;
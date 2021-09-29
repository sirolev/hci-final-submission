/*
    This script allows you to hover over each of the featured book covers and it will 
    update the highlight pannel on the left to show more details about that book.
*/


// we can pretend that this data is a response from a server
// regarding what books are currently featured
let book_data = {
    "LOTM": {
        "cover_img_src": "img/covers/lord_of_the_mysteries.jpg",
        "banner_img_src": "img/banners/lord_of_the_mysteries.jpg",
        "title": "Lord of the Mysteries",
        "author": "Cuttlefish That Loves Diving",
        "genre": "Fantasy",
        "p1": "With the rising tide of steam power and machinery, who can come close to being a Beyonder? Shrouded in the fog of history and darkness, who or what is the lurking evil that murmurs into our ears?",
        "p2": "Waking up to be faced with a string of mysteries, Zhou Mingrui finds himself reincarnated as Klein Moretti in an alternate Victorian era world where he sees a world filled with machinery, cannons, dreadnoughts, airships, difference machines, as well as Potions, Divination, Hexes, Tarot Cards, Sealed Artifacts…"
    },
    "RTW": {
        "cover_img_src": "img/covers/release_that_witch.jpg",
        "banner_img_src": "img/banners/release_that_witch.jpg",
        "title": "Release That Witch",
        "author": "Er Mu",
        "genre": "Fantasy",
        "p1": "Chen Yan travels through time, only to end up becoming an honorable prince in the Middle Ages of Europe. Yet this world was not quite as simple as he thought. Witches with magical powers abound, and fearsome wars between churches and kingdoms rage throughout the land. ",
        "p2": "Roland, a prince regarded as hopeless by his own father and assigned to the worst fief, spends his time developing a poor and backward town into a strong and modern city, while fighting against his siblings for the throne and absolute control over the kingdom."
    },
    "AWE": {
        "cover_img_src": "img/covers/a_will_eternal.jpg",
        "banner_img_src": "img/banners/a_will_eternal.jpg",
        "title": "A Will Eternal",
        "author": "Er Gen",
        "genre": "Eastern Fantasy",
        "p1": "One will to create oceans. One will to summon the mulberry fields. One will to slaughter countless devils. One will to eradicate innumerable immortals. Only my will… is eternal.",
        "p2": "A Will Eternal tells the tale of Bai Xiaochun, an endearing but exasperating young man who is driven primarily by his fear of death and desire to live forever, but who deeply values friendship and family."
    },
    "NULL": {
        "cover_img_src": "img/covers/empty.png",
        "banner_img_src": "img/banners/empty.jpg",
        "title": "Book Title",
        "author": "Author",
        "genre": "Genre",
        "p1": "No Description",
        "p2": ""
    }
}

// get elements from the featured section
let f_img = document.getElementById("featured-banner");
let f_title = document.getElementById("featured-title");
let f_details = document.getElementById("featured-details");
let f_p1 = document.getElementById("featured-p1");
let f_p2 = document.getElementById("featured-p2");
let f_items = document.getElementsByClassName("featured-item"); // is an array

// attach mouseover event listener on all featured items
for (let i=0; i<f_items.length; i++) {
    f_items[i].addEventListener("mouseover", mouseOverItem);
}

// process mouseover event
function mouseOverItem(event) {
    if (event.target.nodeName == "IMG") {
        let item_id = event.target.dataset.id;
        setHighlight(book_data[item_id]);
    }
}

// set data to highlight pannel
function setHighlight(data) {
    f_img.src = data.banner_img_src;
    f_title.textContent = data.title;
    f_details.innerHTML = data.genre + '   ·   <span style="color: #242424;">' + data.author + '</span>';
    f_p1.textContent = data.p1;
    f_p2.textContent = data.p2;
}
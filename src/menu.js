const loadPage = function() {
    const contentDiv = document.getElementById("content");
    const menuContainerDiv = document.createElement("div");
    menuContainerDiv.classList.add("menu-container");

    const menuContentsDiv = document.createElement("div");
    menuContentsDiv.classList.add("menu-contents");
    menuContainerDiv.append(menuContentsDiv);

    const startersH2 = document.createElement("h2");
    startersH2.textContent = "Starters";
    menuContentsDiv.append(startersH2);

    const starterDishes = [
        {
            name: "Jiao yan you yu",
            description: "A traditional dish originating from Guangzhou. Crispy, lightly battered squid tossed with fragrant salt, cracked pepper, and a hint of fresh chili for a perfectly savory bite.",
            price: 45
        },
        {
            name: "Tangbao (8px)",
            description: "The name tangbao or tangbaozi refers to a broad group of steamed Chinese soup-filled dumplings.",
            price: 35
        },
        {
            name: "Sesame chicken",
            description: "Our signature dish originating from the heart of Shanghai. A fan favourite consisting of deep fried chicken topped with fine sesame seeds.",
            price: 40
        },
    ];

    const startersContainer = document.createElement("div");
    startersContainer.classList.add("starters");
    for (let i = 0; i < starterDishes.length; i++) {
        const dish = starterDishes[i];
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        
        const dishDetails = document.createElement("div");
        dishDetails.className = "dish-details";

        const dishName = document.createElement("h4");
        dishName.textContent = dish.name;

        const dishText = document.createElement("p");
        dishText.className = "dish-text";
        dishText.textContent = dish.description;

        dishDetails.appendChild(dishName);
        dishDetails.appendChild(dishText);
        
        const priceDiv = document.createElement("div");
        priceDiv.className = "price";
        priceDiv.textContent = `¥${dish.price}`;

        menuItem.appendChild(dishDetails);
        menuItem.appendChild(priceDiv);
        startersContainer.append(menuItem);
    };
    menuContentsDiv.append(startersContainer);

    const mainsH2 = document.createElement("h2");
    mainsH2.textContent = "Main Courses";
    menuContentsDiv.append(mainsH2);

    const mainDishes = [
        {
            name: "Kung Pao Chicken",
            description: "Tender diced chicken stir-fried with dried chilies, toasted peanuts, and scallions in a bold, savory-sweet Sichuan sauce with a gentle numbing heat.",
            price: 78
        },
        {
            name: "Ma Po Tofu",
            description: "Silky tofu simmered in a bold, spicy Sichuan chili-bean sauce with mushrooms and a signature tongue-tingling Sichuan peppercorn finish.",
            price: 55
        },
        {
            name: "Chow Mein",
            description: "Stir-fried egg noodles tossed with crisp vegetables and your choice of chicken, beef, shrimp, or tofu, all coated in a savory soy-based sauce and lightly seasoned with garlic and scallions.",
            price: 68
        },
    ];

    const mainsContainer = document.createElement("div");
    mainsContainer.classList.add("main-courses");
    for (let j = 0; j < mainDishes.length; j++) {
        const dish = mainDishes[j];
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        
        const dishDetails = document.createElement("div");
        dishDetails.className = "dish-details";

        const dishName = document.createElement("h4");
        dishName.textContent = dish.name;

        const dishText = document.createElement("p");
        dishText.className = "dish-text";
        dishText.textContent = dish.description;

        dishDetails.appendChild(dishName);
        dishDetails.appendChild(dishText);
        
        const priceDiv = document.createElement("div");
        priceDiv.className = "price";
        priceDiv.textContent = `¥${dish.price}`;

        menuItem.appendChild(dishDetails);
        menuItem.appendChild(priceDiv);
        mainsContainer.append(menuItem);
    };
    menuContentsDiv.append(mainsContainer);


    const dessertsH2 = document.createElement("h2");
    dessertsH2.textContent = "Desserts";
    menuContentsDiv.append(dessertsH2);

    const dessertDishes = [
        {
            name: "Nian Gao",
            description: "Sweet, sticky glutinous rice cake lightly pan-fried and served with a hint of caramel or brown sugar, perfect for a traditional festive finish.",
            price: 35
        },
        {
            name: "Mango Pomelo Sago Soup",
            description: "A refreshing, chilled dessert of sweet mango puree, creamy coconut milk, chewy sago pearls, and bursts of tangy pomelo for a tropical finish.",
            price: 38
        },
        {
            name: "Don Tat",
            description: "Buttery, flaky pastry filled with a smooth, creamy egg custard, lightly baked to golden perfection for a classic sweet finish.",
            price: 28
        },
    ];

    const dessertsContainer = document.createElement("div");
    dessertsContainer.classList.add("desserts");
    for (let k = 0; k < dessertDishes.length; k++) {
        const dish = dessertDishes[k];
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        
        const dishDetails = document.createElement("div");
        dishDetails.className = "dish-details";

        const dishName = document.createElement("h4");
        dishName.textContent = dish.name;

        const dishText = document.createElement("p");
        dishText.className = "dish-text";
        dishText.textContent = dish.description;

        dishDetails.appendChild(dishName);
        dishDetails.appendChild(dishText);
        
        const priceDiv = document.createElement("div");
        priceDiv.className = "price";
        priceDiv.textContent = `¥${dish.price}`;

        menuItem.appendChild(dishDetails);
        menuItem.appendChild(priceDiv);
        dessertsContainer.append(menuItem);
    };
    menuContentsDiv.append(dessertsContainer);
    contentDiv.append(menuContainerDiv);
};
export default loadPage;
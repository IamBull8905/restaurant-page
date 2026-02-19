const loadPage = function() {
    const contentDiv = document.getElementById("content");
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-us");

    const header = document.createElement("h1");
    header.classList.add("contact-us-header");
    header.textContent = "Contact us";
    const staffHeading = document.createElement("h4");
    staffHeading.classList.add("staff-heading");
    staffHeading.textContent = "Key staff";
    contactDiv.append(header);
    contactDiv.append(staffHeading);


    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    const bullDiv = document.createElement("div");
    bullDiv.classList.add("Bull");
    const bullTitle = document.createElement("p");
    bullTitle.textContent = "Bull - Manager at Bull on the Moon";
    const bullNumber = document.createElement("p");
    bullNumber.textContent = "Phone number: +86 12 3456 7890";
    const bullEmail = document.createElement("p");
    bullEmail.textContent = "Email address: Bull@bullonthemoon.cn";
    bullDiv.append(bullTitle);
    bullDiv.append(bullNumber);
    bullDiv.append(bullEmail);
    textContainer.append(bullDiv);

    const chaosDiv = document.createElement("div");
    chaosDiv.classList.add("Chaos");
    const chaosTitle = document.createElement("p");
    chaosTitle.textContent = "ChaosXuan - Dragon Wok";
    const chaosNumber = document.createElement("p");
    chaosNumber.textContent = "Phone number: +86 98 7654 3210";
    const chaosEmail = document.createElement("p");
    chaosEmail.textContent = "Email address: ChaosXuan@bullonthemoon.cn";
    chaosDiv.append(chaosTitle);
    chaosDiv.append(chaosNumber);
    chaosDiv.append(chaosEmail);
    textContainer.append(chaosDiv);

    const mythsDiv = document.createElement("div");
    mythsDiv.classList.add("myths");
    const mythsTitle = document.createElement("p");
    mythsTitle.textContent = "Mythsling - Spirit of the Sinks";
    const mythsNumber = document.createElement("p");
    mythsNumber.textContent = "Phone number: +86 11 2233 4455";
    const mythsEmail = document.createElement("p");
    mythsEmail.textContent = "Email address: Mythsling@bullonthemoon.cn";
    mythsDiv.append(mythsTitle);
    mythsDiv.append(mythsNumber);
    mythsDiv.append(mythsEmail);
    textContainer.append(mythsDiv);

    const placeContainer = document.createElement("div");
    placeContainer.classList.add("place-container");
    const locationH4 = document.createElement("h4");
    locationH4.textContent = "Location";
    const location = document.createElement("p");
    location.textContent = "China, Shang Hai Shi, Hongkou District, 752, 东北方向10米 邮政编码: 200434";
    placeContainer.append(locationH4);
    placeContainer.append(location);

    contactDiv.append(textContainer);
    contactDiv.append(placeContainer);
    contentDiv.append(contactDiv);
};

export default loadPage;
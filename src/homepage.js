import frontDish from "./images-&-icons/front-page-dish.png";

const loadPage = function() {
    const contentDiv = document.getElementById("content");


    const welcomingTextDiv = document.createElement("div");
    welcomingTextDiv.classList.add("welcoming-text");

    const h1 = document.createElement("h1");
    h1.textContent = "Bull on the Moon";
    const restaurantSummary = document.createElement("p");
    restaurantSummary.textContent = "Nǐ hǎo! Welcome to Bull on the Moon. This restaurant opens on Lunar New Year marking the year of the Horse. Come dine with us to experience authentic Chinese cuisine!";
    const ownerSignOff = document.createElement("p");
    ownerSignOff.classList.add("owner-sign-off");
    ownerSignOff.textContent = "~ Bull - Staff member at Bull on the Moon";

    welcomingTextDiv.append(h1);
    welcomingTextDiv.append(restaurantSummary);
    welcomingTextDiv.append(ownerSignOff);


    const middleContentDiv = document.createElement("div");
    middleContentDiv.classList.add("middle-content");

    const openingHoursDiv = document.createElement("div");
    openingHoursDiv.classList.add("opening-hours");

    const openingHoursH3 = document.createElement("h3");
    openingHoursH3.textContent = "Opening hours";
    openingHoursDiv.append(openingHoursH3);
    const openingHoursText1 = document.createElement("p");
    openingHoursText1.textContent = "Mon - Thurs: 11:30 - 22:00";
    openingHoursDiv.append(openingHoursText1);
    const openingHoursText2 = document.createElement("p");
    openingHoursText2.textContent = "Fri: 12:30 - 23:00";
    openingHoursDiv.append(openingHoursText2);
    const openingHoursText3 = document.createElement("p");
    openingHoursText3.textContent = "Sat - Sun: 11:30 - 23:00";
    openingHoursDiv.append(openingHoursText3);

    middleContentDiv.append(openingHoursDiv);

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location-container");
    const locationH3 = document.createElement("h3");
    locationH3.textContent = "Location";
    const locationDetails = document.createElement("p");
    locationDetails.textContent = "China, Shang Hai Shi, Hongkou District, 752, 东北方向10米 邮政编码: 200434";
    locationContainer.append(locationH3);
    locationContainer.append(locationDetails);
    middleContentDiv.append(locationContainer);

    const frontPageImg = document.createElement("img");
    frontPageImg.classList.add("front-page-dish");
    frontPageImg.src = frontDish;

    contentDiv.append(welcomingTextDiv);
    contentDiv.append(middleContentDiv);
    contentDiv.append(frontPageImg);
};

export default loadPage;
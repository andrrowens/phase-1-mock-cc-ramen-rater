// write your code here

const renderRamens = (ramenObj) => {
  const ramenMenuDiv = document.getElementById("ramen-menu");
  //console.log(ramenMenuDiv);
  const ramenImage = document.createElement("img");
  ramenImage.src = ramenObj.image;
  //console.log(ramenImage);
  ramenMenuDiv.appendChild(ramenImage);

  ramenImage.addEventListener("click", (e) => {
    const ramenDetail = document.getElementById("ramen-detail");
    const ratingDisplay = document.getElementById("rating-display");
    const commentDisplay = document.getElementById("comment-display");
    const mainImage = document.querySelector(".detail-image");
    const ramenName = document.querySelector(".name");
    const restaurantName = document.querySelector(".restaurant");

    ratingDisplay.textContent = ramenObj.rating;
    commentDisplay.textContent = ramenObj.comment;
    mainImage.src = ramenObj.image;
    ramenName.textContent = ramenObj.name;
    restaurantName.textContent = ramenObj.restaurant;

    ramenDetail.appendChild(ratingDisplay, commentDisplay, mainImage);
  });

  // const ramenForm = document.getElementById("new-ramen");
  // ramenForm.document.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   const newName = document.getElementById("new-name");
  //   const newRestaurant = document.getElementById("new-restaurant");
  //   const newImage = document.getElementById("new-image");
  //   const newRating = document.getElementById("new-rating");
  //   const newComment = document.getElementById("new-comment");

  //   newName = e.target.name.value
  //   newRestaurant = e.target.restaurant.value
  //   newImage = e.target.image.value
  //   newRating = e.target.rating.value
  //   newComment = e.target.comment.value

  // });
};

const fetchData = () => {
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramens) => {
      //console.log(ramens);
      ramens.forEach(renderRamens).catch((error) => alert(error));
    });
};

fetchData();

// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const ramenImage = document.querySelector('.detail-image');
  const ramenName = document.querySelector('.name');
  const ramenRestaurant = document.querySelector('.restaurant');
  const ramenRating = document.getElementById('rating-display');
  const ramenComment = document.getElementById('comment-display');


  // Update details with selected ramen information
  ramenImage.src = ramen.image;
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ramenRating.textContent = ramen.rating;
  ramenComment.textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const newRamenForm = document.getElementById('new-ramen');
  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    // Collect values from the form
    const newRamen = {
      name: document.getElementById('new-name').value,
      restaurant: document.getElementById('new-restaurant').value,
      image: document.getElementById('new-image').value,
      rating: document.getElementById('new-rating').value,
      comment: document.getElementById('new-comment').value,
};

// Create new image element for the ramen menu
const ramenMenu = document.getElementById('ramen-menu');
const ramenImage = document.createElement('img');
ramenImage.src = newRamen.image;
ramenImage.alt = newRamen.name;

// Set up click event listener to show ramen details when clicked
ramenImage.addEventListener('click', () => handleClick(newRamen));

// Add the new ramen image to the ramen menu
ramenMenu.appendChild(ramenImage);

// Reset the form after submission
newRamenForm.reset();
});
};

const displayRamens = () => {
  // Add code
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

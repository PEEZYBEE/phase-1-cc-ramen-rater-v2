// index.js

// Callbacks
const handleClick = (ramen) => {
  const ramenImage = document.querySelector('.detail-image');
  const ramenName = document.querySelector('.name');
  const ramenRestaurant = document.querySelector('.restaurant');
  const ramenRating = document.getElementById('rating-display');
  const ramenComment = document.getElementById('comment-display');


  ramenImage.src = ramen.image;
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ramenRating.textContent = ramen.rating;
  ramenComment.textContent = ramen.comment;



  // Populate the edit form with the ramen's rating and comment
  document.getElementById('new-rating').value = ramen.rating;
  document.getElementById('new-comment').value = ramen.comment;

  // Save the ramen id to update it later
  document.getElementById('edit-ramen').dataset.ramenId = ramen.id;


};
const addEditSubmitListener = () => {
  const editRamenForm = document.getElementById('edit-ramen');
  editRamenForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the updated data from the form
    const updatedRamen = {
      rating: document.getElementById('new-rating').value,
      comment: document.getElementById('new-comment').value,
    };

    const ramenId = editRamenForm.dataset.ramenId;

    // Send a PATCH request to update the ramen details
    fetch(`http://localhost:3000/ramens/${ramenId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRamen),
    })
      .then((response) => response.json())
      .then((ramen) => {
        // Update the details on the frontend
        handleClick(ramen);
      })
      .catch((error) => console.error('Error updating ramen:', error));
  });
};



const addSubmitListener = () => {
  // Add code
  const newRamenForm = document.getElementById('new-ramen');
  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

  
    const newRamen = {
      name: document.getElementById('new-name').value,
      restaurant: document.getElementById('new-restaurant').value,
      image: document.getElementById('new-image').value,
      rating: document.getElementById('new-rating').value,
      comment: document.getElementById('new-comment').value,
};
 // Send the new ramen data to the backend
 fetch('http://localhost:3000/ramens', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newRamen),
})
  .then((response) => response.json())
  .then((ramen) => {

const ramenMenu = document.getElementById('ramen-menu');
const ramenImage = document.createElement('img');
ramenImage.src = ramen.image;
ramenImage.alt = ramen.name;


 // Add event listener to new ramen image to show details on click
ramenImage.addEventListener('click', () => handleClick(ramen));


ramenMenu.appendChild(ramenImage);

// Reset the form after submission
newRamenForm.reset();
})
 .catch((error) => console.error('Error adding new ramen:', error));
 });
};

const displayRamens = (ramens) => {
  // Add code
  const ramenMenu = document.getElementById('ramen-menu');
  ramenMenu.innerHTML = ''; 

  ramens.forEach((ramen) => {
    const ramenImage = document.createElement('img');
    ramenImage.src = ramen.image;
    ramenImage.alt = ramen.name;

    
    ramenImage.addEventListener('click', () => handleClick(ramen));

    ramenMenu.appendChild(ramenImage);
  });

};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here

  // Fetch ramen data from server
  fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((ramens) => {
      // Display all ramens
      displayRamens(ramens);
      handleClick(ramens[0]); // Show the first ramen’s details

      // Initialize the form submission listener
      addSubmitListener();
      addEditSubmitListener(); // Attach the submit listener for updating ramen
    })
    .catch((error) => console.error('Error fetching ramens:', error));

};

document.addEventListener('DOMContentLoaded', main);

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

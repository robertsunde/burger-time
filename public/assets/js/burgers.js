document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM has been loaded');
    }

//global variables
const createBurgerButton = document.getElementById('create-form');
const updateDevouredBoolean = document.querySelectorAll('.change-devoured');
const disposeOfCreationButton = document.querySelectorAll('.delete-burger');

/////////////////////////////////////////////////////////////////////////////
// Button for Creating a Burger
/////////////////////////////////////////////////////////////////////////////

if (createBurgerButton) {
  createBurgerButton.addEventListener('submit', (e) => {
    e.preventDefault();

    const newBurger = {
      burger_name: document.getElementById('populate').value.trim(),
      devoured: document.getElementById('devoured').checked,
    };

    fetch('/api/burgers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(newBurger),
    }).then(() => {
      document.getElementById('populate').value = '';
      console.log('Created a new Burger!');
      location.reload();
    });
  });
}

/////////////////////////////////////////////////////////////////////////////
// Buttons for Deleting Burgers
/////////////////////////////////////////////////////////////////////////////

disposeOfCreationButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('data-id');

    fetch(`/api/burgers/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      console.log(res);
      console.log(`Removed from table: ${id}`);
      location.reload();
    });
  });
});

//////////////////////////////////////////////////////////////////////////////
// Buttons for Switching Burgers between true/false within burgers table
/////////////////////////////////////////////////////////////////////////////
    
    if (updateDevouredBoolean) {
      updateDevouredBoolean.forEach((button) => {
        button.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          const newDevoured = e.target.getAttribute('data-newdevoured');
          const newDevouredState = {
            devoured: newDevoured,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            body: JSON.stringify(newDevouredState),
          }).then((response) => {
            if (response.ok) {
              console.log(`Updated the devoured section of the "burgers" table to: ${newDevoured}`);
              location.reload('/');
            } else {
              alert('We have a problem!');
            }
          });
        });
      });
    }
  

  });
  
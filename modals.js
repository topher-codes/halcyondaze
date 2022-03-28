// Local Variables
const cardEl = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
// Get the <span> element that closes the modal
const span = document.querySelector('.close');

class Modal {
  content = {about: '.modal-about', features: '.modal-features', email: '.modal-email'};

 showModal(val) {
   // Show the modal
   modal.classList.remove('active');
   // Show the appropriate content
   let modalContent = document.querySelector(this.content[val]);
   modalContent.classList.remove('active');
   // Listen for click on close button, and then close the modal
   span.addEventListener('click', this.closeModal = () => {
    modal.classList.add('active');
    modalContent.classList.add('active');
    delete this;
   });
 };

}

//Construct a new modal and then execute the showModal method.
const createModal = (val) => {
  let mod = new Modal;
  mod.showModal(val);
}

// When the card click event is pressed
function cardClick() {
  // Get the card's data-id attribute
  let cardId = this.getAttribute('data-id');
  //Depending on the card id, create a new instance of the Modal class and make sure the content matches the cardId
   switch(cardId) {
    case 'card-about': createModal('about');
    break;
    case 'card-features':  createModal('features');
    break;
    case 'card-email': createModal('email');
    break;
  }
 };

// Add event listeners
cardEl.forEach(card => card.addEventListener('click', cardClick));

// End of file
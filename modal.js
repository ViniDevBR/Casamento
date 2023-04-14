const modal = document.querySelector('#modal')
const openModal = document.querySelector('#openModal')
const closeModal = document.querySelector('#closeModal')

openModal.addEventListener('click', () => {
  modal.classList.add('isModalOpen')
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('isModalOpen')
})

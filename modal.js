const modalMoney = document.querySelector('#modalPIX')
const openModalMoney = document.querySelector('#openModal')
const closeModalMoney = document.querySelector('#closeModal')
const modalGift = document.querySelector('#modalPresente')
const openModalGift = document.querySelector('#openModalGift')
const closeModalGift = document.querySelector('#closeModalGift')

openModalMoney.addEventListener('click', () => {
  modalMoney.classList.add('isModalOpen')
})

closeModalMoney.addEventListener('click', () => {
  modalMoney.classList.remove('isModalOpen')
})

openModalGift.addEventListener('click', () => {
  modalGift.classList.add('isModalOpen')
})

closeModalGift.addEventListener('click', () => {
  modalGift.classList.remove('isModalOpen')
})

const modalMoney = document.querySelector('#modalPIX')
const openModalMoney = document.querySelector('#openModal')
const closeModalMoney = document.querySelector('#closeModal')
const modalGift = document.querySelector('#modalPresente')
const openModalGift = document.querySelector('#openModalGift')
const closeModalGift = document.querySelector('#closeModalGift')
const modalWhatsapp = document.querySelector('#modalWhatsapp')
const openModalWhatsapp = document.querySelector('#openModalWhatsapp')
const closeModalWhatsapp = document.querySelector('#closeModalWhatsapp')
const closeModalWhatsappByButton = document.querySelector(
  '#closeModalWhatsappByButton'
)

openModalMoney.addEventListener('click', () => {
  modalMoney.classList.add('isModalOpen')
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

closeModalMoney.addEventListener('click', () => {
  modalMoney.classList.remove('isModalOpen')
})

openModalGift.addEventListener('click', () => {
  modalGift.classList.add('isModalOpen')
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

closeModalGift.addEventListener('click', () => {
  modalGift.classList.remove('isModalOpen')
})

openModalWhatsapp.addEventListener('click', () => {
  modalWhatsapp.classList.add('isModalOpen')
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

closeModalWhatsapp.addEventListener('click', () => {
  modalWhatsapp.classList.remove('isModalOpen')
})

closeModalWhatsappByButton.addEventListener('click', () => {
  modalWhatsapp.classList.remove('isModalOpen')
})

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
const inputName = document.querySelector('#inputName')
const form = document.querySelector('#form')

closeModalWhatsappByButton.disabled = true

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
  const nameOfPerson = inputName.value
  window.open(
    `https://wa.me/5519981316770?text=Ola+Mari%2C+viemos+confirmar+nossa+presen%C3%A7a+em+seu+casamento.%0ANosso+nome:+${nameOfPerson}`
  )
  modalWhatsapp.classList.remove('isModalOpen')
  closeModalWhatsappByButton.classList.add('disabled')
  form.reset()
})

inputName.addEventListener('input', () => {
  const nameOfPerson = inputName.value

  if (nameOfPerson !== null && nameOfPerson !== '') {
    closeModalWhatsappByButton.classList.remove('disabled')
    closeModalWhatsappByButton.disabled = false
  } else {
    closeModalWhatsappByButton.classList.add('disabled')
    closeModalWhatsappByButton.disabled = true
  }
})

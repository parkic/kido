Paddle.Environment.set("sandbox")
Paddle.Initialize({
  token: 'test_96406623aa9a0b2af2a768b393f',
  eventCallback: function(data) {
    if (data.name == "checkout.completed") {
      handlePaymentSuccess(data.data.transaction_id)
    }
  },
  pwCustomer: { }
})

const subscriptionPlans = {
  monthly: {
    priceId: 'pri_01j3yykrygkmh960wqmqz3p1nn',
    quantity: 1
  },
  yearly :{  
    priceId: 'pri_01j3yyqbqs9ncga4awv4v3cf5s',
    quantity: 1
  }
}

let selectedPlan = null

function openCreateSchoolModal(item) {
  selectedPlan = subscriptionPlans[item]
  const popupModal = document.getElementById('popup-modal')
  popupModal.classList.add('active')
}

function closeModal() {
  const popupModal = document.getElementById('popup-modal')
  popupModal.classList.remove('active')
}


let formData = {
  school: {},
  user: {}
}

function checkError(inputName, inputError, event) {
  const inputValue = event.target.value

  if(inputError == 'empty') {
    if(!inputValue || inputValue.trim() == ''){
      document.querySelector(`#${inputName}-error`).classList.remove('hidden')
    } else {
      document.querySelector(`#${inputName}-error`).classList.add('hidden')
    }
  }

  if(inputError == 'email') {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(regex.test(inputValue)) {
      document.querySelector(`#${inputName}-error`).classList.add('hidden')
    } else {
      document.querySelector(`#${inputName}-error`).classList.remove('hidden')
    }
  }
}

function handleEnter(step, event) {
  if (event.key === "Enter") {
    event.preventDefault();
    nextStep(step)
  }
}
function nextStep(step) {
  if (step === 2) {
    const firstStepError = document.querySelector('#first-step-error')
    formData.school.name = document.getElementById('school-name').value
    formData.school.phone = document.getElementById('school-phone').value
    formData.school.email = document.getElementById('school-email').value
    formData.school.address = document.getElementById('school-address').value
    
    if (!formData.school.name || !formData.school.phone || !formData.school.email || !formData.school.address) {
      firstStepError.classList.remove('hidden')
      return
    } else {
      firstStepError.classList.add('hidden')
    }

    document.getElementById('admin-email').value = formData.school.email
  } else if (step === 3) {
    const secondStepError = document.querySelector('#second-step-error')
    formData.user.first_name = document.getElementById('admin-first-name').value
    formData.user.last_name = document.getElementById('admin-last-name').value
    formData.user.email = document.getElementById('admin-email').value    

    if (!formData.user.first_name || !formData.user.last_name || !formData.user.email) {
      secondStepError.classList.remove('hidden')
      return
    } else {
      secondStepError.classList.add('hidden')
    }

    openCheckout(selectedPlan, formData.school.email)
  }

  document.getElementById(`modal-step-1`).style.display = 'none'
  document.getElementById(`modal-step-2`).style.display = 'none'
  if(step === 3) {
    closeModal()
    document.getElementById(`modal-step-1`).style.display = 'block'
  } else {
    document.getElementById(`modal-step-${step}`).style.display = 'block'
  }
}

function openCheckout(item, schoolEmail) {
  Paddle.Checkout.open({
    items: [item],
    customer: {
      email: schoolEmail
    },
  })
}

function handlePaymentSuccess(transaction_id) {
  formData.transaction_id = transaction_id

  fetch('https://dev.kido.cloud/api/process-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(responseData => {
    closeModal()
  })
  .then(res => {
    document.getElementById('school-name').value = ''
    document.getElementById('school-phone').value = ''
    document.getElementById('school-email').value = ''
    document.getElementById('school-address').value = ''
    document.getElementById('admin-first-name').value = ''
    document.getElementById('admin-last-name').value = ''
    document.getElementById('admin-email').value = ''
  })
  .catch(error => console.error('Error creating school:', error))
}
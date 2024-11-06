class Validation {
  static isPhoneNumber(phoneNumber) {
    const regex = /^\d{10}$/
    const res =  regex.test(phoneNumber)

    return { isValid: res, message: res ? '' : 'Invalid phone number'}
  }

  static isEmailAddress(emailAddress) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const res =  regex.test(emailAddress)

    return res
  }

  static isEmpty(input) {
    if(!input) return true
    if(input.trim() == '') return true

    return false
  }

  static isValidName(name) {
    const regex = /^[a-zA-Z\s]+$/
    const res = regex.test(name)

    return { isValid: res, message: res ? '' : 'Invalid name'}
  }

  static isValidAddress(address) {
    const regex = /[a-zA-Z0-9\s,]+/
    const res = regex.test(address)

    return { isValid: res, message: res ? '' : 'Invalid address'}
  }

  static isValidPassword(password, errorMessage) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    const res = regex.test(password)

    return { isValid: res, message: res ? '' : errorMessage}
  }
}

export default Validation
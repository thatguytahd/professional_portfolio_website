function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

function emailCheck() {
    let x = document.getElementById('email').value

    let validResult = emailIsValid(x)

    if (validResult == false) {
        return alert('Enter valid email. Example: JohnSmith@test.com')
    } else {
        alert('Contact Information Submitted for ' + x + '!')
        document.getElementById('formId').reset()
    }
}

document.getElementById('submitBtn').addEventListener('click', emailCheck)

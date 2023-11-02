var userList = [
    { name: 'admin', email: 'admin@gmail.com', pass: 'admin' },
    { name: '', email: '', pass: '' },
    { name: '', email: '', pass: '' },
    { name: '', email: '', pass: '' }
]

//Link 'já possui conta'
document.querySelector('#register-box span a').addEventListener('click', function () {
    document.querySelector('#register-box').hidden = true
    document.querySelector('#login-box').hidden = false
})

//Link 'não possui conta'
document.querySelector('#login-box span a').addEventListener('click', function () {
    document.querySelector('#register-box').hidden = false
    document.querySelector('#login-box').hidden = true
})


//teste de tabela de usuários
var usersList = []

//funções de estilização do tratamento de erros
function colorChange(element, color) {
    element.style.borderColor = color
}

function returnColor(element) {
    element.target.style.borderColor = ''
}

// register
var registerInputs = document.querySelectorAll('.input-register')

document.querySelector('#register-button').addEventListener('click', function() {
    //teste estilização do tratamento de erros

    for (i = 0; i < registerInputs.length; i++) {
        if (registerInputs[i].value == '') {
            colorChange(registerInputs[i], 'red')
        }
    }


    //teste inserção de dados

    // let index = userList.length-1
    // userList.push((
    //     userList[index].name = registerInputs[0].value,
    //     userList[index].email = registerInputs[1].value,
    //     userList[index].pass = registerInputs[3].value
    // ))
    // console.table(userList)

    console.warn('sem armazenamento de dados')
})

for (i = 0; i < registerInputs.length; i++) {
    registerInputs[i].addEventListener('mouseover', returnColor)
}


///login
var loginInputs = document.querySelectorAll('.input-login')

document.querySelector('#login-button').addEventListener('click', function() {
    //teste estilização do tratamento de erros

    for (i = 0; i < loginInputs.length; i++) {
        if (loginInputs[i].value == '') {
            colorChange(loginInputs[i], 'red')
        }
    }

    console.warn('confirmação armazenamento de dados')
})

for (i = 0; i < loginInputs.length; i++) {
    loginInputs[i].addEventListener('mouseover', returnColor)
}
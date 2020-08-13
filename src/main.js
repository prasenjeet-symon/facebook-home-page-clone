
let date_of_birth_info_visible = false

const show_date_of_birth_info = () => {
    const info = document.getElementById('date_of_birth_info')
    info.style.visibility = 'visible'
    date_of_birth_info_visible = true
}

const hide_date_of_birth_info = () => {
    const info = document.getElementById('date_of_birth_info')
    info.style.visibility = 'hidden'
    date_of_birth_info_visible = false
}

document.getElementById('date_of_birth_info_button').addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()

    date_of_birth_info_visible ? hide_date_of_birth_info() : show_date_of_birth_info()
})

document.getElementById('date_of_birth_info_button_internal').addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    date_of_birth_info_visible ? hide_date_of_birth_info() : show_date_of_birth_info()
})

// gender info pop

let gender_info_pop_visible = false

const show_gender_info = () => {
    const info = document.getElementById('gender_info')
    info.style.visibility = 'visible'
    gender_info_pop_visible = true
}

const hide_gender_info_pop = () => {
    const info = document.getElementById('gender_info')
    info.style.visibility = 'hidden'
    gender_info_pop_visible = false
}

document.getElementById('gender_info_button').addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()

    gender_info_pop_visible ? hide_gender_info_pop() : show_gender_info()
})

document.getElementById('gender_info_button_internal').addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()

    gender_info_pop_visible ? hide_gender_info_pop() : show_gender_info()
})

// handle error first name input

const highlight_error_first_name = () => {
    const info = document.getElementById('error_info_first_name')
    const input = document.getElementById('first_name_input')
    const button = document.getElementById('error_icon_first_name_button')

    input.style.border = '1.5px solid red'
    button.style.visibility = 'visible'
    button.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        info.style.visibility = 'visible'
        button.style.visibility = 'hidden'
    })

}

const remove_error_first_name = () => {
    const info = document.getElementById('error_info_first_name')
    const input = document.getElementById('first_name_input')
    const button = document.getElementById('error_icon_first_name_button')

    input.style.border = '0px'
    button.style.visibility = 'hidden'
    info.style.visibility = 'hidden'
}

const first_name_input = document.getElementById('first_name_input')
first_name_input.addEventListener('focus', (e) => {
    if (!e.target.value) {
        const info = document.getElementById('error_info_first_name')
        info.style.visibility = 'visible'
    }
})

first_name_input.addEventListener('keyup', (e) => {
    if (!e.target.value) {
        const info = document.getElementById('error_info_first_name')
        info.style.visibility = 'hidden'
        highlight_error_first_name()
    } else {
        remove_error_first_name()
    }
})

// handle error surname

const highlight_error_surname = () => {
    const input = document.getElementById('surname_input')
    const info = document.getElementById('error_info_surname')
    const button = document.getElementById('error_button_surname')

    input.style.border = '1.5px solid red'
    button.style.visibility = 'visible'
    button.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        info.style.visibility = 'visible'
        button.style.visibility = 'hidden'
    })

}

const remove_error_surname = () => {
    const input = document.getElementById('surname_input')
    const info = document.getElementById('error_info_surname')
    const button = document.getElementById('error_button_surname')

    input.style.border = '0px'
    button.style.visibility = 'hidden'
    info.style.visibility = 'hidden'
}

const surname_input = document.getElementById('surname_input')
surname_input.addEventListener('focus', (e) => {
    if (!e.target.value) {
        const info = document.getElementById('error_info_surname')
        info.style.visibility = 'visible'
    }
})

surname_input.addEventListener('keyup', (e) => {
    if (!e.target.value) {
        const info = document.getElementById('error_info_surname')
        info.style.visibility = 'hidden'
        highlight_error_surname()
    } else {
        remove_error_surname()
    }
})

// handle mobile error 

const highlight_error_mobile = () => {
    const input = document.getElementById('mobile_input')
    const info = document.getElementById('error_info_mobile')
    const button = document.getElementById('error_button_mobile')

    input.style.border = '1.5px solid red'
    button.style.visibility = 'visible'
    button.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        info.style.visibility = 'visible'
        button.style.visibility = 'hidden'
    })
}

const remove_error_mobile = () => {
    const input = document.getElementById('mobile_input')
    const info = document.getElementById('error_info_mobile')
    const button = document.getElementById('error_button_mobile')

    input.style.border = '0px'
    button.style.visibility = 'hidden'
    info.style.visibility = 'hidden'
}

const mobile_input = document.getElementById('mobile_input')
mobile_input.addEventListener('focus', (e) => {
    if (!e.target.value) {
        const info = document.getElementById('error_info_mobile')
        info.style.visibility = 'visible'
    }
})

mobile_input.addEventListener('keyup', (e) => {
    if (!e.target.value) {
        const info = document.getElementById('error_info_mobile')
        info.style.visibility = 'hidden'
        highlight_error_mobile()
    } else {
        remove_error_mobile()
    }
})

// handle error password

const highlight_error_password = () => {
    const input = document.getElementById('password_input')
    const button = document.getElementById('error_button_password')
    const info = document.getElementById('error_info_password')

    input.style.border = '1.5px solid red'
    button.style.visibility = 'visible'
    button.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        info.style.visibility = 'visible'
        button.style.visibility = 'hidden'
    })
}

const remove_error_password = () => {
    const input = document.getElementById('password_input')
    const button = document.getElementById('error_button_password')
    const info = document.getElementById('error_info_password')

    input.style.border = '0px'
    button.style.visibility = 'hidden'
    info.style.visibility = 'hidden'
}

const password_input = document.getElementById('password_input')
password_input.addEventListener('focus', (e) => {
    if (!e.target.value) {
        const info = document.getElementById('error_info_password')
        info.style.visibility = 'visible'
    }
})

password_input.addEventListener('keyup', (e) => {
    if (!e.target.value) {
        const info = document.getElementById('error_info_password')
        info.style.visibility = 'hidden'
        highlight_error_password()
    } else {
        remove_error_password()
    }
})


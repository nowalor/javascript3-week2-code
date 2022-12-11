// Config
const BASE_URL = 'https://tasty.p.rapidapi.com'
const API_HOST = 'tasty.p.rapidapi.com'

// Regular variables
const inputEl = document.getElementById('input')
const buttonEl = document.getElementById('button')

// Try/catch to catch server errors(500)
// 400 errors need to be handled in the try

const getRecepies = async (search) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    }

    try {
        const response = 
            await fetch(`${BASE_URL}/recipes/auto-complete?prefix=${search}`, options)

        if(response.status !== 200) {
            return 'Something went wrong'
        }

        const data = await response.json()

        return data
    } catch(error) {
        return error.message
    } 

}

// 1. add input to the html
// 2. add button to the html
// 3. when someone clicks button console.log value of input

const handleButtonClick = async () => {
    const recepies = await getRecepies(inputEl.value)

    console.log('recepies', recepies)
}

buttonEl.addEventListener('click', handleButtonClick)
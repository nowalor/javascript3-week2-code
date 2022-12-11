// URL https://api.agify.io/?name=Nikulas
// 1. Create a input and a button[x]
// 2. Console.log the value of the input when I click the button[x]
// 3. Make a request to the API with the user input as the name[x]
// 4. Use a try catch and handle different status codes[x]
// 5. Console.log the results of the API call after making the request[x]

const BASE_URL = 'https://api.agify.io'
// https://api.agify.io/?name=Nikulas

const inputEl = document.getElementById('input')
const buttonEl = document.getElementById('button')

const getAge = async (name) => {
    try {
        const response = 
            await fetch(`${BASE_URL}/?name=${name}`)

        if(response.status !== 200) {
            return 'Something went wrong'
        }

        const data = await response.json()

        return data
    } catch (error) {
        return error.message
    }
}

const handleButtonClick = async () => {
    const age = await getAge(inputEl.value)

    console.log('age', age)
}



buttonEl.addEventListener('click', handleButtonClick)

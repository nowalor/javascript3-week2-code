const BASE_URL = 'https://api.open-notify.org/astros.json'

// 1. Mark the function as async
// 2. Await the response of fetch with your url
// 3. Await .json() on the response

// 1. Fetch the url
// 2. Chain a .then method that takes a callback and returns response.json()
// 3. Chain another .then that does something with the data

const testAsync = async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json()

    return data
}

const testThen = () => {
    return fetch(BASE_URL)
        .then(response => response.json())

}


const logResponse = async (cb) => {
    const data = await cb()

    console.log('data', data)
}
 

logResponse(testAsync)
logResponse(testThen)


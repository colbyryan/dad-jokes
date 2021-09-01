
export const getUsers = () => {
    return fetch("localhost.8088")
}

export const getUsers = () => {
    return fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => response.json())
    .then(parsedResponse => {
        console.log(parsedResponse.joke);
    })
}
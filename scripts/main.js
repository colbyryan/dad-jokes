import { joke } from "./JokesData";
import { getJoke } from "./DataManager";

const contentElemantJoke = document.querySelector(".joke")

getJoke().then(apiJoke => {
    contentElemantJoke.innerHTML += joke(apiJoke);
})

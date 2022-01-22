const button = document.getElementById("clickbtn");
const joke = document.getElementById("jokeTitle")

button.addEventListener("click",() => {
    fetch("https://icanhazdadjoke.com/slack")
        .then(response => response.json())
        .then(data => {
            joke.innerText = data.attachments[0].text
            button.innerText = "Generate a new Funny Joke"
        })
})
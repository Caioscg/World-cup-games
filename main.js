function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon=${player2}.svg" alt="Bandeira do ${player2}">
    </li>
    `
}
function createCard(date, day, game) {
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${game}
        </ul>
    </div>
    `
    }
document.querySelector("#cards").innerHTML =
createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
createCard("21/11", "segunda", createGame("england", "10:00", "iran") + createGame ("senegal", "13:00", "netherlands") + createGame("united states", "16:00", "wales")) +
createCard("22/11", "terça", createGame("argentina", "07:00", "saudi arabia") + createGame ("denmark", "10:00", "tunisia") + createGame("mexico", "13:00", "poland") + createGame("france", "16:00", "australia")) +
createCard("23/11", "quarta", createGame("morocco", "07:00", "croatia") + createGame ("germany", "10:00", "japan") + createGame("spain", "13:00", "costa rica") + createGame("belgium", "16:00", "canada")) +
createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + createGame("uruguay", "10:00", "south korea") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia")) +
createCard("25/11", "sexta", createGame("wales", "07:00", "iran") + createGame("qatar", "10:00", "senegal") + createGame("netherlands", "13:00", "ecuador") + createGame("england", "16:00", "united states")) +
createCard("26/11", "sabado", createGame("tunisia", "07:00", "australia") + createGame("poland", "10:00", "saudi arabia") + createGame("france", "13:00", "denmark") + createGame("argentina", "16:00", "mexico")) +
createCard("27/11", "domingo", createGame("japan", "07:00", "costa rica") + createGame("belgium", "10:00", "morocco") + createGame("croatia", "13:00", "canada") + createGame("spain", "16:00", "germany")) +
createCard("28/11", "segunda", createGame("cameroon", "07:00", "serbia") + createGame("south korea", "10:00", "ghana") + createGame("brazil", "13:00", "switzerland") + createGame("portugal", "16:00", "uruguay")) +
createCard("29/11", "terca", createGame("ecuador", "12:00", "senegal") + createGame("netherlands", "12:00", "qatar") + createGame("iran", "16:00", "united states") + createGame("wales", "16:00", "england")) +
createCard("30/11", "quarta", createGame("tunisia", "12:00", "france") + createGame("australia", "12:00", "denmark") + createGame("poland", "16:00", "argentina") + createGame("saudi arabia", "16:00", "mexico")) +
createCard("01/12", "quinta", createGame("croatia", "12:00", "belgium") + createGame("canada", "12:00", "morocco") + createGame("japan", "16:00", "spain") + createGame("costa rica", "16:00", "germany")) +
createCard("02/12", "sexta", createGame("south korea", "12:00", "portugal") + createGame("ghana", "12:00", "uruguay") + createGame("serbia", "12:00", "switzerland") + createGame("brazil", "16:00", "cameroon"))

const yellow = document.querySelector("#yellow")
const blue = document.querySelector("#blue")
const green = document.querySelector("#green")
const body = document.querySelector("body")

yellow.addEventListener("click", changeYellow)
blue.addEventListener("click", changeBlue)
green.addEventListener("click", changeGreen)

function changeYellow() {
    body.classList.remove("green")
    body.classList.remove("blue")
}
function changeBlue() {
    body.classList.remove("green")
    body.classList.add("blue")
}
function changeGreen() {
    body.classList.remove("blue")
    body.classList.add("green")
}
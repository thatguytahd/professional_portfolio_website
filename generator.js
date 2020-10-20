// Array that houses random facts
const facts = [
    "I graduated with a Bachelors of Science in Criminal Justice and spent the first 3 years out of college working at a state prison.",
    "I am married and have two cats, Sam and Milo.",
    "I have visited the desert during a snow storm.",
    "I work for a restaurant technology company called QSR Automations."
]

function randomNumber () {
    return Math.floor(Math.random() * facts.length)
}

function generateFact () {
    let randomFact = facts[randomNumber()]
    return document.getElementById("bannerInfo").innerHTML = randomFact
}

generateFact()
let facts = [
    "I gradueated with Bachelors of Science in Criminal Justic and spent the first 3 years out of college working at a state prison.",
    "I am married and have two cats, Sam and Milo.",
    "I have visited the desert during a snow storm.",
    "I work for a restaurant technology company called QSR Automations."
]

function randomNumber () {
    return Math.floor(Math.random() * facts.length)
}

function generateFact () {
    let randomFact = facts[randomNumber]
    document.getElementById("bannerInfo").innerHTML = randomFact;
}
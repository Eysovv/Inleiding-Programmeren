// Alle elementen uit de HTML namelijk afbeeldingen, buttons, labels, checkbox en audio worden geselecteerd
const plant = document.querySelector('#plant')
const bij = document.querySelector('#bij')
const waterKnop = document.querySelector('#waterknop')
const waterKnop2 = document.querySelector('#waterknop2')
const resetKnop = document.querySelector('#reset')
const bestuifLabel = document.querySelector('#bestuiven')
const checkbox = document.querySelector('#checkbox')
const water = document.querySelector('#water')
const bee = document.querySelector('#bee')
let plantStatus = 'zaadje'
// ChatGPT prompt maakt het niet duidelijker, maar het gaf het advies na het laten checken van mijn code om de let plantStatus toe te voegen om op basis daarvan acties uit te voeren

//source van de afbeelding wordt verandert bij het klikken van de 'Water Geven' knop. En de status veranderd mee.
function updateZaadje () {
    if (plantStatus === 'zaadje'){
        plant.src = "Afbeeldingen/plant.webp"
        plantStatut = 'plant'
        waterKnop.style.opacity = '0'
        waterKnop2.style.opacity = '100'
        resetKnop.style.opacity = '100'
        water.play()
        console.log('Water gegeven');
    }
}

//Op basis van de nieuwe status wordt de source weer naar het juiste plaatje verandert. In deze laatste status wordt ook de 'bestuiven' checkbox zichtbaar, en het plaatje van de bij koomt te voorschijn.
function updatePlant () {
    if (plantStatus === 'plant');{
        plant.src = "Afbeeldingen/boom.png"
        plantStatus = 'boom'
        waterKnop2.style.opacity = '0'
        resetKnop.style.opacity = '100'
        bestuifLabel.style.opacity = '100'
        bij.style.opacity = '100'
        water.play()
        console.log('Water gegeven');
    }
}

//Bij het indrukken van de resetknop verandert de source en de plantStatus weer naar de originele waar de website ook mee start. De 'bestuiven' knop wordt weer ontzichtbaar.
function resetPlant (){
        plant.src = "Afbeeldingen/zaadje.png"
        plantStatus = 'zaadje'
        waterKnop.style.opacity = '100'
        waterKnop2.style.opacity = '0'
        resetKnop.style.opacity = '0'
        bij.style.left = '0';
        bij.style.opacity = '0';
        bestuifLabel.style.opacity = '0'
    }

//In deze functie wordt met een klik op de checkbox de afbeelding van de bij 1500px naar recht bewogen (uit beeld) en wordt de source afbeelding van #plant verandert.
function bestuiven () {
    if (checkbox.checked) {
        bij.style.left = '1500px';
        // ChatGPT propmt: 'Schrijf javascript code voor de functie bestuiven om de afbeelding van de bij horizontaal naar rechts te verplaatsen als er op de checkbox geklikt wordt'
        plant.src = 'Afbeeldingen/bestoven.png'
        bee.play()
        console.log('Boom bestoven');
    } else {
        bij.style.left = '0';
    }
}

//Hier worden de events met bijbehorende functies toegevoegd aan de knoppen en de checkbox.
waterKnop.addEventListener('click', updateZaadje)
waterKnop2.addEventListener('click', updatePlant)
resetKnop.addEventListener('click', resetPlant)
checkbox.addEventListener('click', bestuiven)

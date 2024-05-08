function Slide(id, hl, text, btn1, btn2, img){
    this.idNr = id;
    this.headline = hl;
    this.mainText = text;
    this.btn1 = btn1;
    this.btn2 = btn2;
    this.image = img;
}
// Define event listener callbacks
function handleBtn1Click() {
    var slideId = parseInt(this.dataset.slideId);
    goToNextSlide(slideId, 1);
    console.log("btn 1 click");
}

function handleBtn2Click() {
    var slideId = parseInt(this.dataset.slideId);
    goToNextSlide(slideId, 2);
}

function displaySlide(slide) {
    document.getElementById("main-headline").innerHTML = slide.headline;
    document.getElementById("main-paragraph").innerHTML = slide.mainText;
    document.getElementById("main-btn-1").innerHTML = slide.btn1;
    document.getElementById("main-btn-2").innerHTML = slide.btn2;
    document.getElementById("main-img").src = slide.image;

    // Update data-slide-id attribute for both buttons
    document.getElementById("main-btn-1").setAttribute("data-slide-id", slide.idNr);
    document.getElementById("main-btn-2").setAttribute("data-slide-id", slide.idNr);

    // Hide the second button if btn2 is empty
    if (slide.btn2.trim() === "") {
        document.getElementById("main-btn-2").classList.add("hide-btn");
    } else {
        document.getElementById("main-btn-2").classList.remove("hide-btn");
    }

    // Add event listeners to the buttons
    document.getElementById("main-btn-1").addEventListener("click", handleBtn1Click);
    document.getElementById("main-btn-2").addEventListener("click", handleBtn2Click);
}

function goToNextSlide(currentSlideId, buttonClicked) {
    // Remove event listeners
    document.getElementById("main-btn-1").removeEventListener("click", handleBtn1Click);
    document.getElementById("main-btn-2").removeEventListener("click", handleBtn2Click);

    // Logic to determine the next slide based on currentSlideId and buttonClicked
    var nextSlideId;

    switch (currentSlideId) {
        case 0:
            nextSlideId = 1;
            break;
        case 1:
            nextSlideId = buttonClicked === 1 ? 2 : 3;
            break;
        case 2:
            nextSlideId = buttonClicked === 1 ? 3 : 4;
            break;
        case 3:
            nextSlideId = 6;
            break;
        case 4:
            nextSlideId = 5;
            break;
        case 5:
            nextSlideId = buttonClicked === 1 ? 7 : 8;
            break;
        case 6:
            nextSlideId = 9;
            break;  
        case 7:
        case 8:
        case 9:
            nextSlideId = 0;
            break;
        default:
            nextSlideId = 0;
    }
    // Display the next slide
    var nextSlide = getSlideById(nextSlideId);
    displaySlide(nextSlide);
}

// Define your slides
const slides = [
    new Slide(0, 'Lær som en leg', 'Velkommen til "Digital tryghed"! I en verden, hvor vores liv og data flyder gennem digitale strømme, er det mere vigtigt end nogensinde at beskytte vores online tilstedeværelse. Lad os sammen udforske en verden af digitale risici og belønninger gennem vores første scenarie: "password". Forestil dig at du sidder ved din computer, og du skal beslutte, om du vil beskytte den med et stærkt adgangskode eller ej. Lad os se, hvilke konsekvenser dine valg kan have i denne virtuelle rejse gennem datasikkerhedens labyrint. Er du klar til at udforske?', 'Start scenarie', '', 'Img/img_1.svg'),
    new Slide(1, 'Password', 'Første gang du starter din computeren op, beder den dig om at lave et password til at tilgå computeren.', 'Du laver et simpelt password som fx “password123”', 'Du laver et komplex password som fx “Tr0piCal.suNs3t”', 'Img/img_2.svg'),
    new Slide(2, 'Artiklen', 'Du læser en artikel om en person der har fået hacket sin computer, fordi hun havde et simpelt password.', 'Du laver et nyt komplex password til din computer', 'Du griner og tænker “sikke et fjols”', 'Img/img_3.svg'),
    new Slide(3, 'Hanky panky', 'Du tager en masse frække billleder af dig selv, som du gemmer dem på din computer.', 'Fortsæt', '', 'Img/img_4.svg'),
    new Slide(4, 'Hanky panky', 'Du tager en masse frække billleder af dig selv, som du gemmer dem på din computer.', 'Fortsæt', '', 'Img/img_4.svg'),
    new Slide(5, 'Stjålet', 'Din computer er blevet stjålet og fordi du havde et dårligt password, har tyven fået adgang til de frække billeder og du bliver nu afpresset til at betale for at få dem tilbage.', 'Jeg betaler for at få mine billeder tilbage', 'Jeg betaler ikke for at få mine billeder tilbage', 'Img/img_5.svg'),
    new Slide(6, 'Stjålet', 'Din computer er blevet stjålet, men fordi du havde et stærkt password kan du være næsten sikker på at tyven ikke har fået adgang til dine frække billeder.', 'Fortsæt', '', 'Img/img_5.svg'),
    new Slide(7, 'Katastrofe', 'DU HAR TRUFFET DE VÆRST TÆNKELIGE BESLUTNINGER! Du har mistet din computer og dine penge, men billederne har du da fået tilbage, for de ligger nu overalt på internettet og du føler dig forfærdeligt ydmyget. DET ER VIGTIGT MED STÆRKE PASSWORDS!', 'Spil scenariet igen', '', 'Img/img_6.svg'),
    new Slide(8, 'Ydmyget, men ikke ruineret', 'DU HAR TRUFFET NOGLE UHELDIGE BESLUTNINGER! Du har mistet din computer og de frække billeder ligger overalt på internettet, men du har i det mindste ikke lader dig afpresse, og tyven havde nok lagt billederne på internettet selv om han var blevet betalt. OVERVEJ AT LAVE BEDRE PASSWORDS I FREMTIDEN!', 'Spil scenariet igen', '', 'Img/img_6.svg'),
    new Slide(9, 'Hverken ruineret eller ydmyget', 'DU HAR TRUFFET NOGLE GODE BESLUTNINGER. Du har mistet din computer og de frække billeder, og det er jo trist, men tyven kan ikke tilgå computeren, med de frække billeder, og bruge dem mod dig, og det er da en trøst. STÆRKE PASSWORDS ER VIGTIGE, MEN DET VED DU ALLEREDE.', 'Spil scenariet igen', '', 'Img/img_6.svg'),
];

function getSlideById(id) {
    // Find slide by ID
    return slides.find(slide => slide.idNr === id);
}

// Display the first slide when the page loads
displaySlide(slides[0]);

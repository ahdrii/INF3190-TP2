window.addEventListener("load", function () {
    defaultDiv();
    const genreSelect = document.getElementById("genre");
    const naissanceInput = document.getElementById("naissance");
    const voitureInput = document.getElementById("voiture");
    const anneeInput = document.getElementById("annee");
    const kiloInput = document.getElementById("kilometre");
    const cameraSelect = document.getElementById("camera");
    const reclamationSelect= document.getElementById("reclamation");
    const reclamationNumbers= document.getElementById("numero-reclamation");
    const oneReclamation= document.getElementById("1-reclamation");
    const twoReclamation= document.getElementById("2-reclamation");
    const threeReclamation= document.getElementById("3-reclamation");
    const fourReclamation= document.getElementById("4-reclamation");



    const resetButton = document.getElementById("resetButton");
    const submitButton = document.getElementById("submit-button");

    const naissanceError = document.getElementById("naissance-error");
    const voitureError = document.getElementById("voiture-error");
    const anneeError = document.getElementById("annee-error");
    const kiloError = document.getElementById("kilo-error");
    const cameraError = document.getElementById("camera-error");
    const reclamationError = document.getElementById("reclamation-error");
    const numberReclamationError = document.getElementById("number-reclamation-error");
    const oneReclamationError = document.getElementById("1-reclamation-error");
    const twoReclamationError = document.getElementById("2-reclamation-error");
    const threeReclamationError = document.getElementById("3-reclamation-error");
    const fourReclamationError = document.getElementById("4-reclamation-error");
    const totalReclamationError = document.getElementById("amount-error");

    const showAnnualRate = document.getElementById("annual-rate");
    const showMonthlyRate = document.getElementById("monthly-rate");



    //******************************************
    //**            EVENT LISTENERS           **
    //******************************************

    // RESET BUTTON
    resetButton.style.display = 'none'; // Hide the reset button by default

    resetButton.addEventListener('click', function() {
        clearErrorMessages();
        enableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation, submitButton]);
        clearErrorMessage(showAnnualRate);
        clearErrorMessage(showMonthlyRate);
        defaultDiv();
        resetButton.style.display = 'none'; // Hide the reset button
    })


    // CHECK GENRE
    genreSelect.addEventListener('change', function() {
        let validation = validateNaissance(naissanceInput, genreSelect);
        if (!validation.isValid) {
            displayErrorMessage(validation.errorMessage, naissanceError);
            if (validation.errorMessage === "Désolé, nous n'avons aucun produit à offrir pour ce profil de client") {
                disableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation, submitButton]);
            }
        } else {
            clearErrorMessage(naissanceError);
        }
    });

    // CHECK DATE DE NAISSANCE
    naissanceInput.addEventListener('change', function() {
        let validation = validateNaissance(naissanceInput, genreSelect);
        if (!validation.isValid) {
            displayErrorMessage(validation.errorMessage, naissanceError);
            if (validation.errorMessage === "Désolé, nous n'avons aucun produit à offrir pour ce profil de client") {
                disableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation, submitButton]);
            }
        } else {
            clearErrorMessage(naissanceError);
        }
    });

    // //CHECK VOITURE
    voitureInput.addEventListener('change', function() {
        let validation = validateVoiture(voitureInput);
        if (!validation.isValid) {
            displayErrorMessage(validation.errorMessage, voitureError);
            if (validation.errorMessage === "Désolé, nous n'avons aucun produit à offrir pour ce profil de client") {
                disableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation, submitButton]);
            }
        }
        else {
            clearErrorMessage(voitureError);
        }
    });

    //CHECK ANNEE
    anneeInput.addEventListener('change', function() {
        const validation = validateAnnee(anneeInput, anneeError);
        if (!validation.isValid && validation.errorMessage === "Désolé, nous n'avons aucun produit à offrir pour ce profil de client") {
            disableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation, submitButton]);
        }
    });

    //CHECK KILO
    kiloInput.addEventListener('change', function() {
        const validation = validateKilo(kiloInput, kiloError);
        if (!validation.isValid && validation.errorMessage === "Désolé, nous n'avons aucun produit à offrir pour ce profil de client") {
            disableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation, submitButton]);
        }
    });


    //CHECK CAMERA
    cameraSelect.addEventListener('change', function() {
        const validation = validateCamera(cameraSelect, cameraError);
        if (!validation.isValid && validation.errorMessage === "Désolé, nous n'avons aucun produit à offrir pour ce profil de client") {
            disableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation, submitButton]);
        }
    });

    //CHECK RECLAMATION: More of a fonction than anything else
    reclamationSelect.addEventListener('change', function() {
        if (reclamationSelect.value === "oui-reclamation") {
            showDiv();
            showDiv1();
        } else {
            resetValues(oneReclamation,twoReclamation,threeReclamation,fourReclamation,totalReclamationError);
            defaultDiv();
        }
    });


    // CHECK NUMBER RECLAMATION :: FUNCTIONAL BUT NEED TO BE BETTER
    reclamationNumbers.addEventListener('change', function() {
        if (reclamationNumbers.value === "une-reclamation") {
            resetValues(oneReclamation,twoReclamation,threeReclamation,fourReclamation);
            clearErrorMessage(numberReclamationError);
            clearErrorMessage(oneReclamationError);
            clearErrorMessage(twoReclamationError);
            clearErrorMessage(threeReclamationError);
            clearErrorMessage(fourReclamationError);
            defaultDiv();
            showDiv();
            showDiv1();
        } else if (reclamationNumbers.value === "deux-reclamation") {
            resetValues(oneReclamation,twoReclamation,threeReclamation,fourReclamation);
            clearErrorMessage(numberReclamationError);
            clearErrorMessage(oneReclamationError);
            clearErrorMessage(twoReclamationError);
            clearErrorMessage(threeReclamationError);
            clearErrorMessage(fourReclamationError);
            defaultDiv();
            showDiv();
            showDiv1();
            showDiv2();
        } else if (reclamationNumbers.value === "trois-reclamation") {
            resetValues(oneReclamation,twoReclamation,threeReclamation,fourReclamation);
            clearErrorMessage(numberReclamationError);
            clearErrorMessage(oneReclamationError);
            clearErrorMessage(twoReclamationError);
            clearErrorMessage(threeReclamationError);
            clearErrorMessage(fourReclamationError);
            defaultDiv();
            showDiv();
            showDiv1();
            showDiv2();
            showDiv3();
        } else if (reclamationNumbers.value === "quattre-reclamation") {
            resetValues(oneReclamation,twoReclamation,threeReclamation,fourReclamation);
            clearErrorMessage(numberReclamationError);
            clearErrorMessage(oneReclamationError);
            clearErrorMessage(twoReclamationError);
            clearErrorMessage(threeReclamationError);
            clearErrorMessage(fourReclamationError);
            defaultDiv();
            showDiv();
            showDiv1();
            showDiv2();
            showDiv3();
            showDiv4();
        } else if (reclamationNumbers.value === "cinq-reclamation") {
            resetValues(oneReclamation,twoReclamation,threeReclamation,fourReclamation);
            clearErrorMessage(numberReclamationError);
            clearErrorMessage(oneReclamationError);
            clearErrorMessage(twoReclamationError);
            clearErrorMessage(threeReclamationError);
            clearErrorMessage(fourReclamationError);
            defaultDiv();
            showDiv();
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", numberReclamationError);
            disableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation, submitButton]);
        } 

    })


    function checkReclamation(reclamation, reclamationError, reclamationNumber) {
        reclamation.addEventListener('change', function() {
            const validation = validateReclamationInput(reclamation, reclamationError, reclamationNumber);
            const myOverload = checkOverload(oneReclamation, twoReclamation, threeReclamation, fourReclamation, totalReclamationError);
            if (!validation.isValid && validation.errorMessage === "Désolé, nous n'avons aucun produit à offrir pour ce profil de client") {
                disableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation]);
            } else if (validation.isValid) {
                if (myOverload ===false){
                    disableInputs([genreSelect, naissanceInput, voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, reclamationNumbers, oneReclamation, twoReclamation, threeReclamation, fourReclamation, submitButton]);
                }
            }
        });
    }
    
    //CHECK RECLAMATION 1
    checkReclamation(oneReclamation, oneReclamationError, 1);
    
    //CHECK RECLAMATION 2
    checkReclamation(twoReclamation, twoReclamationError, 2);
    
    //CHECK RECLAMATION 3
    checkReclamation(threeReclamation, threeReclamationError, 3);
    
    //CHECK RECLAMATION 4
    checkReclamation(fourReclamation, fourReclamationError, 4);
    //***************************************************************************************************************************************************************
    //**           IF EMPTY INPUTS            **
    //******************************************

    //CHECK DATE DE NAISSANCE VIDE
    const inputsDate = [voitureInput, anneeInput, kiloInput, cameraSelect, reclamationSelect, submitButton];

    inputsDate.forEach(input => {
        input.addEventListener('click', function() {
        emptyOnClick(naissanceInput, "Ce champs est vide.", naissanceError);
        });
    });

    //CHECK VOITURE VIDE

    const inputsVoiture = [anneeInput, kiloInput, cameraSelect, reclamationSelect, submitButton];

    inputsVoiture.forEach(input => {
        input.addEventListener('click', function() {
            emptyOnClick(voitureInput, "Ce champs est vide.", voitureError);
        });
    });


    //CHECK ANNEE VIDE

    const inputsAnnee = [kiloInput, cameraSelect, reclamationSelect, submitButton];

    inputsAnnee.forEach(input => {
        input.addEventListener('click', function() {
            emptyOnClick(anneeInput, "Ce champs est vide.", anneeError);
        });
    });

    //CHECK KILO VIDE
    const inputsKilo = [cameraSelect, reclamationSelect, submitButton];

    inputsKilo.forEach(input => {
        input.addEventListener('click', function() {
            emptyOnClick(kiloInput, "Ce champs est vide.", kiloError);
        });
    });  

    //CHECK RECLAMATION 1 VIDE
    const inputsRecOne = [twoReclamation, threeReclamation, fourReclamation, submitButton];

    inputsRecOne.forEach(input => {
        input.addEventListener('click', function() {
            emptyOnClick(oneReclamation, "Ce champs est vide.", oneReclamationError);
        });
    });  

    //CHECK RECLAMATION 2 VIDE
    const inputsRecTwo = [threeReclamation, fourReclamation, submitButton];

    inputsRecTwo.forEach(input => {
        input.addEventListener('click', function() {
            emptyOnClick(twoReclamation, "Ce champs est vide.", twoReclamationError);
        });
    });  


    //CHECK RECLAMATION 3 VIDE
    const inputsRecThree = [fourReclamation, submitButton];

    inputsRecThree.forEach(input => {
        input.addEventListener('click', function() {
            emptyOnClick(threeReclamation, "Ce champs est vide.", threeReclamationError);
        });
    });  



    //CHECK RECLAMATION 4 VIDE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const inputsRecFour= [submitButton];

    inputsRecFour.forEach(input => {
        input.addEventListener('click', function() {
            emptyOnClick(fourReclamation, "Ce champs est vide.", fourReclamationError);
        });
    });  

    function checkFilled(){
        if (naissanceInput.value === "") {
            return false;
        }
        if (voitureInput.value === "") {
            return false;
        }
        if (anneeInput.value === "") {
            return false;
        }
        if (kiloInput.value === "") {
            return false;
        }
        return true;
    }

//***************************************************************************************************************************************************************
    //we have the reclamation inputs, need MONTANT BASE, NBR RECLAMATION, KILOMETRES
    submitButton.addEventListener('click', function() {
        if (checkFilled() === true) {
            let totalReclamations = checkOverload(oneReclamation, twoReclamation, threeReclamation, fourReclamation, totalReclamationError); //will either return 0 or 700
            let myKilo = Number(kiloInput.value); //kilometrage de user 
            let mynumberReclamation = getNbrReclamation(reclamationNumbers, reclamationSelect); //nbr de reclamation de user
            let mybaseRate = getbaseRate(genreSelect,naissanceInput,voitureInput); //base rate de user
            let myAnnualRate = calculateAnnualRate(mybaseRate, mynumberReclamation, myKilo, totalReclamations); //annual rate de user
            let myMonthlyRate = calculateMonthlyRate(myAnnualRate); //monthly rate de user            
            displayErrorMessage(myAnnualRate, showAnnualRate); //THIS DISPLAYS THE RECLAMATION INPUTS
            displayErrorMessage(myMonthlyRate, showMonthlyRate); //THIS DISPLAYS THE RECLAMATION INPUTS
            
        }



    });

});


//******************************************
function showDiv(){
    const reclamationNumDiv = document.getElementById("reclamation-details");
    reclamationNumDiv.style.display = "block";
}
function showDiv1(){
    const questionOneDiv = document.getElementById("question-one");
    questionOneDiv.style.display = "block";
}
function showDiv2(){
    const questionTwoDiv = document.getElementById("question-two");
    questionTwoDiv.style.display = "block";
}
function showDiv3(){
    const questionThreeDiv = document.getElementById("question-three");
    questionThreeDiv.style.display = "block";
}
function showDiv4(){
    const questionFourDiv = document.getElementById("question-four");
    questionFourDiv.style.display = "block";
}


function defaultDiv(){
    const reclamationNumDiv = document.getElementById("reclamation-details");
    const questionOneDiv = document.getElementById("question-one");
    const questionTwoDiv = document.getElementById("question-two");
    const questionThreeDiv = document.getElementById("question-three");
    const questionFourDiv = document.getElementById("question-four");
    reclamationNumDiv.style.display = "none";
    questionOneDiv.style.display = "none";
    questionTwoDiv.style.display = "none";
    questionThreeDiv.style.display = "none";
    questionFourDiv.style.display = "none";
}


//******************************************
//**         FUNCTION VALIDATIONS         **
//******************************************


// VALIDATE DATE DE NAISSANCE
function validateNaissance(naissanceInput, genreSelect){
if (!isValidDate(naissanceInput)) {
    return { isValid: false, errorMessage: "Veuillez selectionner une date de naissance valide ex. 1970-01-06." };
}
const age = isAge(naissanceInput);
if ((genreSelect.value ==="femme" && age < 16) || ((genreSelect.value ==="homme" || genreSelect.value ==="non-binaire") && age < 18) || age >= 100) {
    return { isValid: false, errorMessage: "Désolé, nous n'avons aucun produit à offrir pour ce profil de client" };
}   
return { isValid: true, errorMessage: "" };
}

// VALIDATE VOITURE
function validateVoiture(voitureInput) {
    const voitureValue = voitureInput.value.trim();
    if (isNaN(voitureValue)) {
        return { isValid: false, errorMessage: "La valeur de votre voiture doit contenir uniquement des chiffres." };
    } else if (Number(voitureValue) > 100000) {
        return { isValid: false, errorMessage: "Désolé, nous n'avons aucun produit à offrir pour ce profil de client" };
    }
    return { isValid: true, errorMessage: "" };
}

//VALIDATE ANNEE

function validateAnnee(anneeInput, anneeError){
    let errorMessage = "";
    if(anneeInput.value.length !== 4 || isNaN(anneeInput.value)){
        errorMessage = "La valeur de l'année de la voiture doit contenir exactement 4 chiffres.";
    } else if(calcAgeCar(anneeInput)>25 || calcAgeCar(anneeInput)<0){
        errorMessage = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";
    }

    if (errorMessage) {
        displayErrorMessage(errorMessage, anneeError);
        return { isValid: false, errorMessage: errorMessage };
    } else {
        clearErrorMessage(anneeError);
        return { isValid: true, errorMessage: "" };
    }
}


//VALIDATE KILO 
function validateKilo(kiloInput, kiloError){
    let errorMessage = "";
    if (isNaN(kiloInput.value)) {
        errorMessage = "Veuillez ecrire le kilometrage en chiffres seulement.";
    } else if(kiloInput.value>50000){
        errorMessage = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";
    }


    if (errorMessage) {
        displayErrorMessage(errorMessage, kiloError);
        return { isValid: false, errorMessage: errorMessage };
    } else {
        clearErrorMessage(kiloError);
        return { isValid: true, errorMessage: "" };
    }
}


// VALIDATE CAMERA
function validateCamera(cameraSelect, cameraError){
    let errorMessage = "";
    if (cameraSelect.value ==="non-camera"){
        errorMessage = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";
    }

    if (errorMessage) {
        displayErrorMessage(errorMessage, cameraError);
        return { isValid: false, errorMessage: errorMessage };
    } else {
        clearErrorMessage(cameraError);
        return { isValid: true, errorMessage: "" };
    }
}

//Pour les champs vides, envoyer message d'erreur
function emptyOnClick(input, errorMessage, errorElement) {
    const inputValue = input.value.trim();
    if (inputValue === "") {
        displayErrorMessage(errorMessage, errorElement);
    }
}


    
// VALIDATE RECLAMATION NUMBER CONTENT 1, 2, 3, 4 :
function validateReclamationInput(reclamation, Errormsg){
    let errorMessage = "";
    if (isNaN(reclamation.value)) {
        errorMessage = "La valeur de votre reclamation doit contenir uniquement des chiffres.";
    } else if (Number(reclamation.value) > 35000) {
        errorMessage = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";
    }

    if (errorMessage) {
        displayErrorMessage(errorMessage, Errormsg);
        return { isValid: false, errorMessage: errorMessage };
    } else {
        clearErrorMessage(Errormsg);
        return { isValid: true, errorMessage: "" };
    }
}


function checkOverload(reclamation1, reclamation2, reclamation3, reclamation4, totalReclamationError){
    let amount1 = Number(reclamation1.value);
    let amount2 = Number(reclamation2.value);
    let amount3 = Number(reclamation3.value);
    let amount4 = Number(reclamation4.value);

    let total = amount1+amount2+amount3+amount4;
    if(total>35000){
        displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", totalReclamationError);
        return false
    }
    if(total >25000){
        return 700;
    }
    return 0;
}

//get nbr reclamation reeturn a int
function getNbrReclamation(reclamationNumbers, reclamationSelect){
    if(reclamationSelect.value === "non-reclamation"){
        return 0;
    }
    if(reclamationNumbers.value === "une-reclamation"){
        return 1;
    }
    if(reclamationNumbers.value === "deux-reclamation"){
        return 2;
    }
    if(reclamationNumbers.value === "trois-reclamation"){
        return 3;
    }
    if(reclamationNumbers.value === "quattre-reclamation"){
        return 4;
    }
}


//get rate base
function getbaseRate(genreSelect,naissanceInput,voitureInput){
    myValuedCar = Number(voitureInput.value);
    if (genreSelect.value === "homme" || genreSelect.value === "non-binaire" && isAge(naissanceInput) < 25) {
        return 0.05*myValuedCar //5%
    }
    else if (isAge(naissanceInput) <= 75) {
        return 0.04*myValuedCar; //4%
    }
    return 0.015*myValuedCar; //15%
}

//get final rate
function calculateAnnualRate(baseRate, nbrReclamation, kilo, totalReclamations){
    let annualRate = baseRate + (350*nbrReclamation) + (0.02*kilo) + totalReclamations;
    return annualRate;
}

//get monthly rate
function calculateMonthlyRate(annualRate){
    let monthlyRate = annualRate/12;
    return monthlyRate;
}

function resetValues(reclamation1, reclamation2, reclamation3, reclamation4) {
    reclamation1.value = "";
    reclamation2.value = "";
    reclamation3.value = "";
    reclamation4.value = "";
}


//******************************************
//**       FUNCTION OF EXECUTIONS         **
//******************************************


    //!!!!!!!!!!!!!!!!!!!!! TEST!!!!!!!!!!!!!!!!!!!!!!

function disableInputs(inputs) {
    for (let input of inputs) {
        input.disabled = true;
    }
    resetButton.style.display = 'block'; // show reset button 
} 


function enableInputs(inputs) {
    for (let input of inputs) {
        input.disabled = false;
    }
}


function calcAgeCar(anneeInput){
    const carYear = anneeInput.value;
    const currentDate = new Date();

    return currentDate.getFullYear()-carYear;
}

//validate naissance if unselected
function isValidDate(dateInput) {
    const dateValue = dateInput.valueAsDate;
    const today = new Date();
    if (dateValue===null){
        return false;
    }
    if (dateValue > today) {
        return false;
    }
    return true;
}


function isAge(dateInput){    
    const dateValue = dateInput.valueAsDate;
    const today = new Date();
    const birthDate = new Date(dateValue);
    let age = today.getFullYear() - birthDate.getFullYear();
    // Display the age
    return age; 
}


function displayErrorMessage(message, errorElement) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
}

function clearErrorMessages() {
    const errorElements = document.querySelectorAll(".error");
    for (const errorElement of errorElements) {
        errorElement.textContent = "";
    }
}


// Clear error message for a specific element
function clearErrorMessage(errorElement) {
    errorElement.textContent = "";
}
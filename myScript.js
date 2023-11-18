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
    

        const genreError = document.getElementById("genre-error");
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

        // CHECK GENRE
        genreSelect.addEventListener('change', function() {
            if (!validateGenre(genreSelect)) {
                displayErrorMessage("Ce champs est vide.", genreError);
            } else {
                clearErrorMessage(genreError);
            }
            // Validate the date when the genre changes
            const errorMessage = validateNaissance(naissanceInput, genreSelect);
            if (errorMessage) {
                displayErrorMessage(errorMessage, naissanceError);
            }
            else {
                clearErrorMessage(naissanceError);
            }
        });


        // CHECK DATE DE NAISSANCE
        naissanceInput.addEventListener('change', function() {
            const errorMessage = validateNaissance(naissanceInput, genreSelect);
            if (errorMessage) {
                displayErrorMessage(errorMessage, naissanceError);
            } else {
                clearErrorMessage(naissanceError);
            }
        });


        //CHECK VOITURE
        voitureInput.addEventListener('change', function() {
            validateVoiture(voitureInput, voitureError);
        });


        //CHECK ANNEE
        anneeInput.addEventListener('change', function() {
            validateAnnee(anneeInput, anneeError);
        });


        //CHECK KILO
        kiloInput.addEventListener('change', function() {
            validateKilo(kiloInput, kiloError);
        });


        //CHECK CAMERA
        cameraSelect.addEventListener('change', function() {
            validateCamera(cameraSelect, cameraError);
        });


        //CHECK RECLAMATION
        reclamationSelect.addEventListener('change', function() {
            if (reclamationSelect.value === "oui-reclamation") {
                showDiv();
            } else {
                defaultDiv();
            }
            validateReclamation(reclamationSelect, reclamationError);
        });


        //CHECK NUMBER RECLAMATION :: FUNCTIONAL BUT NEED TO BE BETTER
        reclamationNumbers.addEventListener('change', function() {
            if (reclamationNumbers.value === "vide-reclamation") {
                clearErrorMessage(numberReclamationError);
                defaultDiv();
                showDiv();
                displayErrorMessage("Ce champs est vide", numberReclamationError);
            } else if (reclamationNumbers.value === "une-reclamaition") {
                clearErrorMessage(numberReclamationError);
                defaultDiv();
                showDiv();
                showDiv1();
            } else if (reclamationNumbers.value === "deux-reclamation") {
                clearErrorMessage(numberReclamationError);
                defaultDiv();
                showDiv();
                showDiv1();
                showDiv2();
            } else if (reclamationNumbers.value === "trois-reclamation") {
                clearErrorMessage(numberReclamationError);
                defaultDiv();
                showDiv();
                showDiv1();
                showDiv2();
                showDiv3();
            } else if (reclamationNumbers.value === "quattre-reclamation") {
                clearErrorMessage(numberReclamationError);
                defaultDiv();
                showDiv();
                showDiv1();
                showDiv2();
                showDiv3();
                showDiv4();
            } else if (reclamationNumbers.value === "cinq-reclamation") {
                clearErrorMessage(numberReclamationError);
                defaultDiv();
                showDiv();
                displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", numberReclamationError);
            } 

        })
        

        //CHECK RECLAMATION 1
        oneReclamation.addEventListener('change', function() {
            if (validateReclamationInput(oneReclamation,oneReclamationError)) {
                checkOverload(oneReclamation, twoReclamation, threeReclamation, fourReclamation, totalReclamationError);
            }
        });

        //CHECK RECLAMATION 2
        twoReclamation.addEventListener('change', function() {
            if (validateReclamationInput(twoReclamation,twoReclamationError)) {
                checkOverload(oneReclamation, twoReclamation, threeReclamation, fourReclamation, totalReclamationError);
            }
        });

        //CHECK RECLAMATION 3  
        threeReclamation.addEventListener('change', function() {
            if (validateReclamationInput(threeReclamation,threeReclamationError)) {
                checkOverload(oneReclamation, twoReclamation, threeReclamation, fourReclamation, totalReclamationError);
            }
        });

        //CHECK RECLAMATION 4
        fourReclamation.addEventListener('change', function() {
            if (validateReclamationInput(fourReclamation,fourReclamationError)) {
                checkOverload(oneReclamation, twoReclamation, threeReclamation, fourReclamation, totalReclamationError);
            }
            
        });

//we have the reclamation inputs, need MONTANT BASE, NBR RECLAMATION, KILOMETRES
submitButton.addEventListener('click', function() {
    let totalReclamations = checkOverload(oneReclamation, twoReclamation, threeReclamation, fourReclamation, totalReclamationError); //will either return 0 or 700
    let myKilo = kiloInput.value; //kilometrage de user 
    let mynumberReclamation = getNbrReclamation(reclamationNumbers); //nbr de reclamation de user
    let mybaseRate = getbaseRate(genreSelect,naissanceInput,voitureInput); //base rate de user
    let myAnnualRate = calculateAnnualRate(mybaseRate, mynumberReclamation, myKilo, totalReclamations); //annual rate de user
    let myMonthlyRate = calculateMonthlyRate(myAnnualRate); //monthly rate de user
    displayErrorMessage(myAnnualRate, showAnnualRate); //THIS DISPLAYS THE RECLAMATION INPUTS
    displayErrorMessage(myMonthlyRate, showMonthlyRate); //THIS DISPLAYS THE RECLAMATION INPUTS

});

    });


    //******************************************
    function showDiv(){
        const reclamationNumDiv = document.getElementById("reclamationDetails");
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
        const reclamationNumDiv = document.getElementById("reclamationDetails");
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



    // VALIDATE GENRE
    function validateGenre(genreSelect){
        if (genreSelect.value === "empty-genre") {
            return false;
        }
        return true;
    }

    // VALIDATE DATE DE NAISSANCE
    function validateNaissance(naissanceInput, genreSelect){
        if (!isValidDate(naissanceInput)) {
            return "Veuillez selectionner une date de naissance ex. 1970-01-06.";
        }
        const age = isAge(naissanceInput);
        if ((genreSelect.value ==="femme" && age < 16) || ((genreSelect.value ==="homme" || genreSelect.value ==="non-binaire") && age < 18) || age >= 100) {
            return "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";
        }   
        return "";
    }

    // VALIDATE VOITURE

    function validateVoiture(voitureInput, voitureError) {
        const voitureValue = voitureInput.value.trim();
    
        if (voitureValue === "") {
            displayErrorMessage("Veuillez ecrire votre valeur de voiture", voitureError);
            return false;
        } else if (isNaN(voitureValue)) {
            displayErrorMessage("La valeur de votre voiture doit contenir uniquement des chiffres.", voitureError);
            return false;
        } else if (Number(voitureValue) > 100000) {
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", voitureError);
            return false;
        }
        clearErrorMessage(voitureError);
        return true;
    }
    
    //VALIDATE ANNEE
    function validateAnnee(anneeInput,anneeError){
        if(anneeInput.value.trim() === ""){
            displayErrorMessage("Veuillez ecrire l'annee de la voiture", anneeError);
            return false;
        }
        else if(anneeInput.value.length !== 4 || isNaN(anneeInput.value)){
            displayErrorMessage("La valeur de l'année de la voiture doit contenir exactement 4 chiffres.", anneeError);
            return false;
        }
        else if(calcAgeCar(anneeInput)>25 || calcAgeCar(anneeInput)<0){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", anneeError);
            return false;
        }
        clearErrorMessage(anneeError);
        return true;
    }

    //!!!VALIDATE KILO : Question, is allowed to have a decimal input?
    function validateKilo(kiloInput,kiloError){
        if (kiloInput.value.trim() === "") {
            displayErrorMessage("Veuillez ecrire le kilometrage de la voiture", kiloError);
            return false;
        }
        else if (isNaN(kiloInput.value)) {
            displayErrorMessage("Veuillez ecrire le kilometrage en chiffres seulement.", kiloError);
            return false;
        }
        else if(kiloInput.value>50000){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", kiloError);
            return false;
        }
        clearErrorMessage(kiloError);
        return true;
    }

    // VALIDATE CAMERA
    function validateCamera(cameraSelect,cameraError){
        if (cameraSelect.value === "empty-camera") {
            displayErrorMessage("Ce champs est vide.", cameraError);
            return false;
        }
        else if (cameraSelect.value ==="non-camera"){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client",cameraError);
            return false;
        }
        clearErrorMessage(cameraError);
        return true;
    }


    //VALIDATE RECLAMATION
    function validateReclamation(reclamationSelect,reclamationError){
        if (reclamationSelect.value === "empty-reclamation") {
            displayErrorMessage("Ce champs est vide.", reclamationError);
            return false;
        }
        clearErrorMessage(reclamationError);
        return true;
    }
        
    // VALIDATE RECLAMATION NUMBER CONTENT
    function validateReclamationInput(reclamation,Errormsg){
        if (reclamation.value.trim() === "") {
            displayErrorMessage("Veuillez ecrire votre valeur de reclamation numero 1", Errormsg);
            return false;
        } else if (isNaN(reclamation.value)) {
            displayErrorMessage("La valeur de votre reclamation numero 1 doit contenir uniquement des chiffres.", Errormsg);
            return false;
        } else if (Number(reclamation.value) > 35000) {
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", Errormsg);
            return false;
        }
        clearErrorMessage(Errormsg);
        return true;
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
    function getNbrReclamation(reclamationNumbers){
        if(reclamationNumbers.value === "vide-reclamation"){
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
        myValuedCar = voitureInput.value;
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
    


    //******************************************
    //**       FUNCTION OF EXECUTIONS         **
    //******************************************



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
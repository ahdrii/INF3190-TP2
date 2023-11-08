
    // function validateForm() {
    //     clearErrorMessages(); // Clear any previous error messages

    //     const genreSelect = document.getElementById("genre");
    //     const naissanceInput = document.getElementById("naissance");
    //     const emptyError = document.getElementById("error-empty");
    //     const naissanceError = document.getElementById("naissance-empty");

    //     // Check if the user selects the empty option
    //     if (genreSelect.value === "empty") {
    //         displayErrorMessage("Ce champs est vide.", emptyError);
    //         return false; // Prevent the form from submitting
    //     }
    //     //naissance! 
    //     if (!isValidDate(naissanceInput)) {
    //         displayErrorMessage("Veuillez selectionner une date de naissance ex. 1970-01-06.", naissanceError);
    //         return false; // Prevent the form from submitting
    //     }
    //     // You can add more validation logic for other form fields here
    //     return true; // Allow form submission if all validations pass
    // }

    // function isValidDate(dateInput) {
    //     const dateValue = dateInput.valueAsDate;
    //     if (dateValue===null){
    //         return false;
    //     }
    //     return true;
    //     // Check if the date string matches the expected format and does not contain "-"
    // }


    // function displayErrorMessage(message, errorElement) {
    //     errorElement.textContent = message;
    //     errorElement.style.color = "red";
    // }

    // function clearErrorMessages() {
    //     const errorElements = document.querySelectorAll(".error");
    //     for (const errorElement of errorElements) {
    //         errorElement.textContent = "";
    //     }
    // }


    function validateForm() {
        clearErrorMessages(); // Clear any previous error messages

        const genreSelect = document.getElementById("genre");
        const naissanceInput = document.getElementById("naissance");
        const voitureInput = document.getElementById("voiture");
        const anneeInput = document.getElementById("annee");
        const kiloInput = document.getElementById("kilometre");
        const cameraSelect = document.getElementById("camera");
        const  reclamationSelect= document.getElementById("reclamation");


        const genreError = document.getElementById("genre-error");
        const naissanceError = document.getElementById("naissance-error");
        const voitureError = document.getElementById("voiture-error");
        const anneeError = document.getElementById("annee-error");
        const kiloError = document.getElementById("kilo-error");
        const cameraError = document.getElementById("camera-error");




        const voitureValue = voitureInput.value;
        const isNumeric = /^\d+$/.test(voitureValue);
        

        // Check genre select
        if (genreSelect.value === "empty-genre") {
            displayErrorMessage("Ce champs est vide.", genreError);
        }


        //check naissance if unselected
        if (!isValidDate(naissanceInput)) {
            displayErrorMessage("Veuillez selectionner une date de naissance ex. 1970-01-06.", naissanceError);
        }
        else if(naissanceInput){

        }
        //validation value
        if (voitureInput.value.trim() === "") {
            displayErrorMessage("Veuillez ecrire votre valeur de voiture", voitureError);
        }
        else if (!isNumeric) {
            displayErrorMessage("La valeur de votre voiture doit contenir uniquement des chiffres.", voitureError);
        }
        else if(voitureInput.value > 100000){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", voitureError);
        }

        //annnee voiture
        if (anneeInput.value.trim() === "") {
            displayErrorMessage("Veuillez ecrire l'annee de la voiture", anneeError);
        }
        else if (anneeInput.value.length !== 4 || isNaN(anneeInput.value)) {
            displayErrorMessage("La valeur de l'année de la voiture doit contenir exactement 4 chiffres.", anneeError);
        }
        else if(anneeInput.value<1998 || anneeInput.value>2023){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", anneeError);
        }

        //kilometre
        if (kiloInput.value.trim() === "") {
            displayErrorMessage("Veuillez ecrire le kilometrage de la voiture", kiloError);
        }
        else if (isNaN(kiloInput.value)) {
            displayErrorMessage("Veuillez ecrire le kilometrage en chiffres seulement.", kiloError);
        }
        else if(kiloInput.value>50000){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", kiloError);
        }


        //camera recul
        if (cameraSelect.value === "empty-camera") {
            displayErrorMessage("Ce champs est vide.", cameraError);
        }
        else if (cameraSelect.value ==="non-camera"){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client",cameraError)
        }


        //reclamation valid

        if(reclamationInput.value === "oui-reclamation"){
            show
        }

        return false

        // You can add more validation logic for other form fields here

    }




    //validate naissance if unselected
    function isValidDate(dateInput) {
        const dateValue = dateInput.valueAsDate;
        if (dateValue===null){
            return false;
        }
        return true;
        // Check if the date string matches the expected format and does not contain "-"
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



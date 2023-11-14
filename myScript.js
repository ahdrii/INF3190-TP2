
    
    window.addEventListener("load", defaultDiv);
    function validateForm() {
        clearErrorMessages(); // Clear any previous error messages
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




        const genreError = document.getElementById("genre-error");
        const naissanceError = document.getElementById("naissance-error");
        const voitureError = document.getElementById("voiture-error");
        const anneeError = document.getElementById("annee-error");
        const kiloError = document.getElementById("kilo-error");
        const cameraError = document.getElementById("camera-error");
        const reclamationError = document.getElementById("reclamation-error");
        const numberReclamationError = document.getElementById("number-reclamation-error");





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
        else if ((genreSelect.value ==="femme"&&isAge(naissanceInput)<16)  || ((genreSelect.value ==="homme"||genreSelect.value==="non-binaire")&&isAge(naissanceInput)<18) || isAge(naissanceInput)>=100){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", naissanceError);
        }
        
        
        //validation value of voiture
        if (voitureValue === "") {
            displayErrorMessage("Veuillez ecrire votre valeur de voiture", voitureError);
        }
        else if (!isNumeric) {
            displayErrorMessage("La valeur de votre voiture doit contenir uniquement des chiffres.", voitureError);
        }
        else if(voitureValue > 100000){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", voitureError);
        }

        //valider annnee voiture
        if (anneeInput.value.trim() === "") {
            displayErrorMessage("Veuillez ecrire l'annee de la voiture", anneeError);
        }
        else if (anneeInput.value.length !== 4 || isNaN(anneeInput.value)) {
            displayErrorMessage("La valeur de l'année de la voiture doit contenir exactement 4 chiffres.", anneeError);
        }
        else if(calcAgeCar(anneeInput)>25 || calcAgeCar(anneeInput)<0){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", anneeError);
        }

        //check kilometre
        if (kiloInput.value.trim() === "") {
            displayErrorMessage("Veuillez ecrire le kilometrage de la voiture", kiloError);
        }
        else if (isNaN(kiloInput.value)) {
            displayErrorMessage("Veuillez ecrire le kilometrage en chiffres seulement.", kiloError);
        }
        else if(kiloInput.value>50000){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client", kiloError);
        }


        //check camera recul
        if (cameraSelect.value === "empty-camera") {
            displayErrorMessage("Ce champs est vide.", cameraError);
        }
        else if (cameraSelect.value ==="non-camera"){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client",cameraError);
        }


        //reclamation valid

        if(reclamationSelect.value === "empty-reclamation"){
            displayErrorMessage("Ce champs est vide.", reclamationError);
            // window.addEventListener("load", function (){defaultDiv()});
        }
        else if(reclamationSelect.value === "oui-reclamation"){
            showDiv();
        }
        else if (reclamationSelect.value === "non-reclamation"){
            // window.addEventListener("load", function (){defaultDiv()});
        }


        //number reclamation
        if(reclamationNumbers.value === "vide-reclamation"){
            displayErrorMessage("Ce champs est vide.", numberReclamationError);
        }
        else if(reclamationNumbers.value === "une-reclamaition"){
            showDiv1();
        }
        else if(reclamationNumbers.value === "deux-reclamation"){
            showDiv1();
            showDiv2();
        }
        else if(reclamationNumbers.value === "trois-reclamation"){
            showDiv1();
            showDiv2();
            showDiv3();
        }
        else if(reclamationNumbers.value === "quattre-reclamation"){
            showDiv1();
            showDiv2();
            showDiv3();
            showDiv4();
        }
        else if(reclamationNumbers.value === "cinq-reclamation"){
            displayErrorMessage("Désolé, nous n'avons aucun produit à offrir pour ce profil de client",numberReclamationError);
            //TODO : HIDE ALL SHOWDIVS1,2,3,4
        }

        return false

        // You can add more validation logic for other form fields here
    }
    function showDiv1(){
        const myDiv1 = document.getElementById("question-one");
        myDiv1.style.display = "block";
    }
    function showDiv2(){
        const myDiv2 = document.getElementById("question-two");
        myDiv2.style.display = "block";
    }
    function showDiv3(){
        const myDiv3 = document.getElementById("question-three");
        myDiv3.style.display = "block";
    }
    function showDiv4(){
        const myDiv4 = document.getElementById("question-four");
        myDiv4.style.display = "block";
    }

    //show div
    function showDiv(){
        const myDiv = document.getElementById("reclamationDetails");
        myDiv.style.display = "block";
    }

    function defaultDiv(){
        const myDiv = document.getElementById("reclamationDetails");
        const myDiv1 = document.getElementById("question-one");
        const myDiv2 = document.getElementById("question-two");
        const myDiv3 = document.getElementById("question-three");
        const myDiv4 = document.getElementById("question-four");
        myDiv.style.display = "none";
        myDiv1.style.display = "none";
        myDiv2.style.display = "none";
        myDiv3.style.display = "none";
        myDiv4.style.display = "none";
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


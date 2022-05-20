
// This is the code to collect details of the traveller and store in the local storage

// getting the informations from the traveller
let surName = document.getElementById('surname').value;
let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let Plocation = document.getElementById('Plocation').value;
let destination = document.getElementById('destination').value;
let date = document.getElementById('date').value;
let id = document.getElementById('id').value;
let sitNumber = document.getElementById('sitNumber').value;

let btn_submit = document.getElementById('btn-submit');
btn_submit.addEventListener('click', (e)=>{
    e.preventDefault();
    // array to store the details
let details = [];

let traveller ={
    surName,
    firstName,
    lastName,
    Plocation,
    destination,
    date,
    id,
    sitNumber
}

let detailForm = (surName,firstName,lastName,Plocation,destination,date,id,sitNumber) =>{
        details.push(traveller)

        // pushing to local Storage
    localStorage.setItem('details', JSON.stringify(details));

    return{surName,firstName,lastName,Plocation,destination,date,id,sitNumber}
}

})



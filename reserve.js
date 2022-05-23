
let btn = document.getElementById('btn-submit');

let travelDetails = [];
  const addDetails = (e)=>{
      e.preventDefault();

// getting the informations from the traveller
      let surName = document.getElementById('surname').value;
      let firstName = document.getElementById('firstName').value;
      let lastName = document.getElementById('lastName').value;
      let Plocation = document.getElementById('Plocation').value;
      let destination = document.getElementById('destination').value;
      let date = document.getElementById('date').value;
      let id = document.getElementById('id').value;
      let sitNumber = document.getElementById('sitNumber').value;

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
      travelDetails.push(traveller);
      document.forms[0].reset()

      console.log(travelDetails)
  }
document.addEventListener("DOMContentLoaded", ()=>{
    btn.addEventListener('click',addDetails);
})


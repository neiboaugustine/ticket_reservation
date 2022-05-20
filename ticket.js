//  This is the code to generate unique id for booking
let btn_id =document.getElementById('btn-id');
let ticket_id = document.getElementById('ticket-id');

btn_id.addEventListener('click',(e)=>{
    e.preventDefault()
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }
     ticket_id.innerHTML=s4()+s4();
})




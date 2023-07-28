const content = document.querySelector('.content');
let price = 500;
let tickets = document.getElementById('tickets');
let cost = document.getElementById('cost');
let selectedSeatIds = [];
let selectedSeats;
let summary = document.getElementById('summary');


content.addEventListener("click", e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('booked')){
        e.target.classList.toggle('selected');
    }
})

function calculateBill(selectedSeats){
    selectedSeats = document.querySelectorAll('.selected');
    
    let xArr = Array.from(selectedSeats);
    xArr.forEach((el)=>{
        selectedSeatIds.push(el.id);
    })
    if(selectedSeatIds.length == 0){
        alert("Please select your seats!");
    }else{
        summary.style.display = "block";
        tickets.innerText = selectedSeatIds;
        // cost.innerText = price * selectedSeatIds.length;
    }

    selectedSeatIds.forEach((el)=>{
        let y = document.getElementById(el).style.backgroundColor = "red";
        if(el[0]=="A" || el[0]=="B"){
            cost.innerText = Number(cost.innerText) + 200;
        }else if(el[0]=="C" || el[0]=="D"){
            cost.innerText = Number(cost.innerText) + 300;
        }else{
            cost.innerText = Number(cost.innerText) + 500;
        }
    })
}





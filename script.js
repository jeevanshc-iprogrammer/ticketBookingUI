const content = document.querySelector('.content');
let price = 500;
let tickets = document.getElementById('tickets');
let cost = document.getElementById('cost');
let selectedSeatIds = [];
let selectedSeats;
let summary = document.getElementById('summary');
let naSeats = document.querySelectorAll('.row .seat:not(.booked)');
console.log(naSeats[16].id);


content.addEventListener("click", e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('booked')){
        e.target.classList.toggle('selected');
    }
    updateTickets();
})

function updateTickets(){
    summary.style.display = "block";
    selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log(selectedSeats);
    const bookedSeats = [...selectedSeats].map((item)=>
        [...naSeats].indexOf(item)
    );
    tickets.innerText = "";
    cost.innerText = "";
    bookedSeats.forEach((el)=>{
        summary.style.display = "block";
        const item = naSeats[el].id;
        tickets.innerText = tickets.innerText + " " + item ;
        if(item[0]=="A" || item[0]=="B"){
            cost.innerText = Number(cost.innerText) + 200;
        }else if(item[0]=="C" || item[0]=="D"){
            cost.innerText = Number(cost.innerText) + 300;
        }else{
            cost.innerText = Number(cost.innerText) + 500;
        }
    });


    // console.log(selectedSeats);
    // let xArr = Array.from(selectedSeats);
    // xArr.forEach((el)=>{
    //     console.log(el.id);
    //     if(xArr.includes(el.id)){
    //         console.log("1");
            
    //     }else{
    //         selectedSeatIds.push(el.id);
    //     }  
    // })
    // console.log(selectedSeatIds);
    // let xArr = Array.from(selectedSeats);
    // console.log(selectedSeats);
}






//----------------------------------------------------------------
// function calculateBill(selectedSeats){
//     selectedSeats = document.querySelectorAll('.selected');
    
//     let xArr = Array.from(selectedSeats);
//     xArr.forEach((el)=>{
//         selectedSeatIds.push(el.id);
//     })
//     if(selectedSeatIds.length == 0){
//         alert("Please select your seats!");
//     }else{
//         summary.style.display = "block";
//         tickets.innerText = selectedSeatIds;
//         // cost.innerText = price * selectedSeatIds.length;
//     }

//     selectedSeatIds.forEach((el)=>{
//         let y = document.getElementById(el).style.backgroundColor = "red";
//         if(el[0]=="A" || el[0]=="B"){
//             cost.innerText = Number(cost.innerText) + 200;
//         }else if(el[0]=="C" || el[0]=="D"){
//             cost.innerText = Number(cost.innerText) + 300;
//         }else{
//             cost.innerText = Number(cost.innerText) + 500;
//         }
//     })
// }





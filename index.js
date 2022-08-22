const  playerArray=[ ];
function forDisplay(playerList){
     let totalPrice=0;

const slectedFive= document.getElementById("selected-five");

slectedFive.innerHTML=" ";

for(let i=0;i<playerList.length;i++){
     const name=playerArray[i].playerName;
 const ul=document.createElement("ul"); 
//  li ytr koprbo
ul.innerHTML=`
<li class='list-group-item'>${i+1}. ${ name}</li>
`;
slectedFive.appendChild(ul);

}
// const tr=document.createElement("tr");
// tr.innerHTML=`
// <th></th>
// <td>name</td>`;
// slectedFive.appendChild(tr);


// function DisableNextButton(btnId) {
//      document.getElementById(btnId).disabled = 'true';
//  }

}


function btnPlayers(element){
     if(playerArray.length>4){
          alert("limit 5 reached");
     
     }
     else{
          const playerName=element.parentNode.parentNode.children[0].innerText;
console.log(playerName);
const playerObj={
     playerName:playerName
} 
playerArray.push(playerObj);

document.getElementById("total-selected-player").innerText=playerArray.length;
element.disabled = 'true';
     }
     forDisplay(playerArray);

    

         
      
     
}
document.getElementById("calculate-btn-player-expense").addEventListener('click',function(){
  const perPlayerFieldCalculate=document.getElementById("per-player-field");
   const newPlayerFieldString=perPlayerFieldCalculate.value;
   const newPlayerField=parseInt(newPlayerFieldString);
     perPlayerFieldCalculate.value=' ';

     const totalPlayersExpense=document.getElementById("total-player-expense");
     totalPlayersExpense.innerText=newPlayerField*playerArray.length;

     


})

document.getElementById("calculate-all-things-total").addEventListener("click", function(){
     const managerField=document.getElementById("manager-field");
     const newManagerFieldString=managerField.value;
     const newManagerField=parseInt(newManagerFieldString);
     managerField.value=' ';


     const coachField=document.getElementById("coach-field");
     const newCoachFieldString=coachField.value;
     const newCoachField=parseInt(newCoachFieldString);
     coachField.value=' ';

     const totalPlayersExpense=document.getElementById("total-player-expense");

     const playerExpenseNew=parseInt(totalPlayersExpense.innerText);


     const totalCost=document.getElementById("total-all-expense");
     totalCost.innerText=playerExpenseNew +newManagerField+newCoachField;



})


document.getElementById('messi-button').addEventListener('click', function() {


     const selectedFive=document.getElementById("selected-five");
     const getSelected=selectedFive.innerText;
     selectedFive.innerText = getSelected;
})

document.getElementById('neymar-button').addEventListener('click', function() {


     const selectedFive=document.getElementById("selected-five");
     
     const getSelected=selectedFive.innerText;
    selectedFive.innerText = getSelected;
    selectedFive.innerText =" ";
})

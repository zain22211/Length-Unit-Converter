let fromvalue =document.getElementById("fromvalue");
let tovalue =document.getElementById("tovalue");
let enteredvalue =document.getElementById("enteredvalue");
let outputvalue =document.getElementById("outputvalue");


fromvalue.addEventListener("change", (event)=>{
    fromvalue = event.target.value;
    
});

tovalue.addEventListener("change", (event)=>{
    tovalue = event.target.value;
    
});

enteredvalue.addEventListener("input", (event)=>{
    enteredvalue = event.target.value;
    
   
});

if(fromvalue=="kilometer"&& tovalue=="mile"){
  let newvalue= enteredvalue/1.60934;
  console.log(newvalue);
}
console.log(fromvalue);
console.log(tovalue);
console.log(enteredvalue);

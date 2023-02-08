// const Input_area=document.querySelector('#LABEL')
// Input_area.addEventListener('mouseenter', function(){
//  const k= document.getElementById('Inputf').style.animation="border 1s 1 forwards"
// } )
const calculate=()=>{
    const input=document.getElementById("Inputf").value;
     const type=document.getElementById('typeofInput').value;
     const Output= document.getElementById('output');
    
     let result=0;
    if(type=='cal'){
        result=parseInt(input)+273.15;
        
    }
    else{
        result=(parseInt(input)+459.67)*(5/9);
    }
   Output.innerHTML=`${parseInt(result)} Kelvin`;
}


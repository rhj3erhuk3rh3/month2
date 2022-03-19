  let button = document.querySelectorAll("#label");

 let counter =0;
 function increment(){
     counter++
     label.innerHTML=counter;

 }
  function decrement() {
     counter--;
     if (counter<1){
         counter=0;
     }
     label.innerHTML=counter
  }
  function  reset (){
     counter =0;
     if ( counter<1){
         counter=0;
     }
     label.innerHTML=counter
  }







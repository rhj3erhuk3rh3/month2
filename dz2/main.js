let i ='*'
while (i.length<=7){
    console.log(i)
    i+='*';
}


 for (var num=1; num<101;num++) {
     if(num%5===0&& num%3===0) {
         console.log(num,'FizzBizz')
     }else if(num%5===0) {
         console.log(num,'Bizz');
     }else if(num%3===0) {
         console.log(num,'Fizz')
     }else{
         console.log(num,);
     }
 }
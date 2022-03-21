 const list =[
     {
         id:1,
         text:"Learn JS"
     }
 ];

 const addButton = document.getElementById('button');
 const input = document.getElementById('input');

 function  change(id) {
     const item = list.findIndex(t=>t.===id)
     const  text =prompt("change");
     list[item].text =text
     rander();

 }
 function deleteObj




 function render () {
     const mainDiv= document.createElement('div');
     mainDiv.setAttribute('class','list');
     for (let i=0;i<list.length;i++){
         const div =document.createElement('div');
         div.setAttribute('class','todoBlock');
         const p = document.createElement('p');
         p.innerText=list[i].text;
         div.append(p)

     const button = document.createElement('div')
     button.setAttribute('class','actions');
     const changeButton = document.createElement('button');
     changeButton.setAttribute('class','change');
     const deleteButton =document.createElement('button');
     deleteButton.setAttribute('class','delete');
     button.append(changeButton,deleteButton);
     div.append(button);
     mainDiv.append(div);
     break;


     }
     const form =document.querySelector('form');



     form.append(mainDiv);





 }
 addButton.onclick =function () {
     const obj = {
         id: list.length+1,
         text:input.value
     }
     console.log(list)
 }
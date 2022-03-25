// ES5 vsEs6
// es6
//const a =10;

//
// let b =5;
// // es5
// var c=20;
// c ="hello";
//
//
// console.log(c);
//
// const  first_name ='jack';
// const  last_name ='barbaro';
//
// console.log(first_name+""last_name)//es5
//
//
 //console.log(`${first_name} ${last_name}`);

//const getfullName =(user) => {
   // return `"First Name:" +{user.first_name +"\n"+ "Last Name:"`+user.last_name;
   // return`First Name:${user.last_name}\nlast Name:{user.last_Name}`

//}
 // const  user ={
 //    first_name='jack',
 //     last_name ='barabaro'
 //
 // }
 // getfullName();

// const  mass =[1,2,3,4,5]
// const  mass2 = [...mass]
//  for (let i=0;i<mass.length;i++){
//      mass2.push(mass[i])
//  }
// console.log(mass2)
//
//  const obj ={
//      username: 'Jack',
//      age:19,
//      last_name: "barbaro",
//      full_name:'jack barbaro',
//  }
//
//   const  obj2 = {
//      ...obj,
//       key:'value' ,
//       key2:'value'
//   }
// console.log(obj2)


// деструктиризация

 const  props ={
    onsubmit: ()=> {
        console.log("submit")
    },
     data: [
         {
             key: 'value'
         },
         {
             key: 'value'
         },
         {
             key: 'value'
         }
     ]
 }
  const {data,onsubmit} = props;

 console.log(data)
 onsubmit();
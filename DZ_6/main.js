 const a = ' a';
const b = ' b';
const c = ' c';
const d = ' d';
const e = ' e';
const all = a.concat(b, c, d, e)
console.log(all);

 const obj = {
    key:  "6",
    key2: "7",
    key3: "8",
    key4: "9",
    key5: "10"
}
 const obj2 = {
    ...obj,
    key6: "4",
    key7: "5",
    key8: "6"
}
 console.log(obj2);

btn.onclick =function () {
    let v = document.getElementById('input'). value;
    document.getElementById('dz').innerHTML='Салам Родной!!! '+ v +':))';
}
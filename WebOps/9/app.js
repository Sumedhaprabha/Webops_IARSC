fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
    return data.json();
}).then((completedata)=>{
let data1="";
completedata.map((values)=>{
    data1 = completedata[2].title;
    /*+='<div class="container"> <h1> $(values.title)</h1> <p>$(values.body)</p></div>'*/
});

document.getElementById("box").innerHTML = data1;
}).catch((err)=>{
    console.log(err);
})
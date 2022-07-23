function deleteRow(r)
{
var i=r.parentNode.parentNode.rowIndex;
document.getElementById('myTable').deleteRow(i);
}


function insRow()
{
var x=document.getElementById('myTable').insertRow(document.getElementById('myTable').rows.length);
var y= x.insertCell(0);
var z= x.insertCell(1);
var a= x.insertCell(2);
var d= x.insertCell(3);
var e= x.insertCell(4);
var b= x.insertCell(5);
var c= x.insertCell(6);
var p= x.insertCell(7);
y.innerHTML=document.getElementById("name").value;
z.innerHTML=document.getElementById("author").value;
a.innerHTML=document.getElementById("publications").value;
d.innerHTML=document.getElementById("desc").value;
e.innerHTML='<input type="button" value="Show" onclick="Det(this)"/>';
b.innerHTML='Unread';
c.innerHTML='<input type="button" value="Mark as read" onclick="Mark(this)"/>';
p.innerHTML='<input type="button" value="Delete" onclick="deleteRow(this)"/>';


}

function Mark(r){
var m = r.parentNode.parentNode.rowIndex;

if((document.getElementById("myTable").rows[m].cells.item(5).innerHTML)=="Unread"){
    document.getElementById("myTable").rows[m].cells.item(5).innerHTML = "Read"
    document.getElementById("myTable").rows[m].cells.item(6).innerHTML = '<input type="button" value="Mark as Unread" onclick="Mark(this)"/>'
}

else{
    document.getElementById("myTable").rows[m].cells.item(5).innerHTML = "Unread"
    document.getElementById("myTable").rows[m].cells.item(6).innerHTML = '<input type="button" value="Mark as read" onclick="Mark(this)"/>'
};
}


function Det (r) {
    var i = r.parentNode.parentNode.rowIndex;
    element = document.getElementById("myTable").rows[i].cells.item(3).innerHTML;
    alert(element);
  };



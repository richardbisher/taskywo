

var inputbookmarkurl=document.getElementById ("input_bookmarkurl")
var edurl = document.getElementById ("ed_url")
var addone = document.getElementById("add_url")
var secondurl = document.querySelector(".second_url")

addone.addEventListener("click",function()
{
    console.log("god")
    
   var div = document.createElement("div")

    div.setAttribute("class","second_url")
    div.innerHTML=`<h3>${inputbookmarkurl.value}</h3><button id="edit_url">Edit</button ><button id="delete_url">Delete</button> `
    secondurl.append(div)


    
})
// var clearurl= document.getElementById("Clear_url")
function clearurl(event){
    console.log("dej")
    event.remove()
}
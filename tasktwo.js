

var inputbookmarkurl=document.getElementById ("input_bookmarkurl")
var edurl = document.getElementById ("ed_url")
var addone = document.getElementById("add_url")
var secondurl = document.querySelector(".second_url")
var outputcontainer = document.querySelector(".output_container")

addone.addEventListener("click",function()
{
    console.log("god")
    
   var div = document.createElement("div")

    div.setAttribute("class","second_url")
    div.innerHTML=`<h3>${inputbookmarkurl.value}</h3><div><button id="edit_url" onclick="editurl()">Edit</button ><button id="delete_url">Delete</button></div> `
    outputcontainer.append(div)


    
})
var clearurl= document.getElementById("Clear_url")
function deleteitem(){
    console.log("dej")
   outputcontainer.remove()

    
}
var background = document.querySelector(".backpage")
var editurltextbox = document.querySelector(".editurl_textbox")

function editurl()
{
    console.log("edit")
    alert(`edit you url hear:`)

    background.style.display="block"
    editurltextbox.style.display="block"
    inputbookmarkurl.value.textContent=edittextbox
    console.log(inputbookmarkurl.value)
    // inputbookmarkurl.textContent=a
    // console.log(a)
    edittextbox.setAttribute("class","editurl_textbox")
    edittextbox.innerHTML='<input type="url" placeholder="Enter URL" type="${inputbookmarkurl.value}"'
    edittextbox.append()

}

var submitbutton  = document.getElementById("submit_button")
var edittextbox = document.getElementById("edittext")
function submit_button()
{
    console.log("submit")

    console.log(edittextbox.value)
   var div = document.createElement("div")
   div.setAttribute("class","second_url")
    div.innerHTML=`<h3>${edittextbox.value}</h3><div><button id="edit_url" onclick="editurl()">Edit</button ><button id="delete_url">Delete</button></div> `
    outputcontainer.append(div)
    

    

}
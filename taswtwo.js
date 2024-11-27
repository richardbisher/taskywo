// select input_bookmarkurl

var inputbookmarkurl = document.getElementById="input_bookmarkurl"
var edurl = document.getElementById="ed_url"

inputbookmarkurl.addEventListener("click",function(event){
    event.preventDefault()
    
    var div = document.createElement("div")
    div.setAttribute("class","second_url")
    div.innerHTML=`$h2{inputbookmarkurl.value}`

    
})

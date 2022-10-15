var firstname = document.getElementById('infirstname')
var lastname=document.getElementById('inlastname')
var email=document.getElementById('inemail')
//html css form data sending script
$("#submit-form").submit((e) => {
    e.preventDefault()
    $("#pageloader").fadeIn();
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwOjct7t0e99oyQpyiabBe4zGAx5lNoXhyfOkZuCUE0nx7piUr9qVJyBu6VM4E7xSqe/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

//html css and bootstrap form data sending script
$("#submit-bt-form").submit((e)=>{
    e.preventDefault()
    $("#pageloader").fadeIn();
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwOjct7t0e99oyQpyiabBe4zGAx5lNoXhyfOkZuCUE0nx7piUr9qVJyBu6VM4E7xSqe/exec",
        data:$("#submit-bt-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
//checkbox button function to swap forms
function triggerfunc() {
    var btcheckbox = document.getElementById('bt-checkbox')
    if (btcheckbox.checked) {
        $('#normal-form').hide() 
        $('#bt-form').show()
    } else if (!btcheckbox.checked) {
        $('#bt-form').hide()
        $('#normal-form').show() 
    }
}
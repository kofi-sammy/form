$(function(){
    $("#myform").validate({
        rules:{
            email:{
               required:true,
               email: true,
            },
            password:{
                required:true,
                maxlength: 8
            }
        }
    })
})
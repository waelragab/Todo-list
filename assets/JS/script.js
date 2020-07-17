$("ul").on("click","li", function(){
    $(this).toggleClass("completed")
})

$("ul").on("click","span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
})
$("input[type = 'text']").on("keypress",function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        $("ul").append("<li> <span><i class = 'fas fa-trash'></i></span>" + todoText +"</li>");
        $("input").val("");
    }
})
$(".fa-plus").on("click", function(){
    $("input[type = 'text']").fadeToggle(200);
})
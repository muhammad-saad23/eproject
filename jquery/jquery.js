
$(document).ready(function(){
    // $('.dropdown').mouseenter(function(){
    //     $('.dropdown-menu').slideDown()
    //     $('.dropdown-menu').slideUp()
    // })
    
$('.dropdown').on({
    mouseenter : function(){
        $('.dropdown-menu').slideDown()
    },
    mouseleave : function(){
        $('.dropdown-menu').slideUp()
    }
})

})
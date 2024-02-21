console.log($)
$(document).ready(() => {
    console.log($('#demo').length)
    $('#demo').click(function () {
        $(this).hide(500)
    })
})
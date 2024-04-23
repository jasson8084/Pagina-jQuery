$(() => {acciones})
$(document).ready(() => {acciones})
 
$(() => {
    $('#ocultarbtn').click(() => {
        $('li').fadeOut();
    });

    $('#mostrarbtn').click(() => {
        $('li').fadeIn();
    });

    $('#miButton').click(() => {
        alert("Mi boton");
    })

    $('#ocultarbtn1').click(() => {
        $('#hola').fadeOut();
    })

    $('#mostrarbtn1').click(() => {
        $('#hola').fadeIn();
    })

    $('.productos2').hide();

    $('#vermas').click(() => {
        $('.productos2').fadeIn();
    })

    $('#vermas').dblclick(() => {
        $('.productos2').fadeOut();
    })
})

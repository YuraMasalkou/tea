$(document).ready(function () {
//
//
//
//
    $( function() {
        $( "#accordion" ).accordion({
            heightStyle: "content"

        })
    } );
//
// // $( "#dialog" ).dialog();
//     $('.single-item').slick();

    $('.single-item').slick({
        arrows:true

});

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.card-img').magnificPopup({
        type: 'image',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    document.getElementById('btn-finaly').addEventListener('click', func1);
    function func1() {

        let nameInput = document.getElementById('inputName');
        let secondName = document.getElementById('inputSName');
        let phoneInput = document.getElementById('inputPhone');
        let countryInput = document.getElementById('inputCountry');
        let indexInput = document.getElementById('inputIndex');
        let adressInput = document.getElementById('inputAddress');


        if (!nameInput.value) {
            alert('Введите Ваше Имя');
            return;
        }
        if (!secondName.value) {
            alert('Введите Вашу Фамилию');
            return;
        }
        if (!phoneInput.value) {
            alert('Введите Ваш телефон');
            return;
        }
        if (!countryInput.value) {
            alert('Введите Вашу страну');
            return;
        }

        if (!indexInput.value) {
            alert('Введите Ваш индекс');
            return;
        }


        if (indexInput.value.length !== 6) {
            alert(' Поле Индекс должно содержать  6 символов');
            return;
        }

        if (!adressInput.value) {
            alert('Введите Ваш адрес');
            return;
        }

        function LoginUp() {



            document.getElementsByClassName('modal')[0].style.display = "block";
            document.getElementById('forms-input').style.display = "none"
        }
        LoginUp()


        // let myModal = document.getElementById('myModal')
        // let myInput = document.getElementById('myInput')
        //
        // myModal.addEventListener('shown.bs.modal', function () {
        //     myInput.focus()
        // })
        // let modal = document.getElementById("modal_window");





    }

new WOW ({

    animateClass: 'animate__animated',

}).init();



})


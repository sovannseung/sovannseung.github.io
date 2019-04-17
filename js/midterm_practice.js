$(function () {
    $('#form-submit').submit(function(event) {
        event.preventDefault();
        $('#error').empty();
        let submit = true;

        if($('#txtName').val() ===''){
            $('#error').append('Please input name. <br/>');
        }
        if($('#txtStreet').val() ===''){
            $('#error').append('Please input street. <br/>');
        }
        if($('#txtZipCode').val() ===''){
            $('#error').append('Please input zip code. <br/>');
        }

        if($('#txtSeats').val() <=0 || $('txtSeats').val() > 200){
            $('#error').append('Please input seats between 0 to 200');
        }
    });
})




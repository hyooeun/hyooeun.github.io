$(function () {
    $('.md-close').on('click', function() {
        console.log('close');
        $('.md-modal').removeClass('md-show');
    });


}); 

$('#new-schedule').click( function () {

    var scheduleData = {
        institution : $('#schedule-institution').val(),
            email : $('#schedule-email').val(),
            phone : $('#schedule-phone').val(),
            startTime : $('#datetimepicker1').val(),
            endTime : $('#datetimepicker2').val()
    }
    
    $.ajax({
        type : "post",
        url : "https://us-central1-alpine-inkwell-228607.cloudfunctions.net/addEventToCalendar",
        data : scheduleData,
        dataType : 'JSON',
        success : function(result){
            console.log(result);
            $('#schedule-modal').html(
                `<div class='schedule-complete'> 
                    <h1>Your new schedule has been received. I'll be in touch soon.</h1>
                </div>`
            );
        },
        error : function(result){
            console.log(result);
            alert('invaild inputs');
        }
    });
});
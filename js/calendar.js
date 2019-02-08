$(function(){

    var calDate =document.getElementById('start-date');
    if( calDate ){
        var textDate = calDate.innerText;
        var date = $.fullCalendar.moment(textDate);
        console.log(textDate);
        console.dir(date);

        $('#calendar').fullCalendar({
            // put your options and callbacks here
            defaultView: 'agendaWeek',
            allDaySlot: false,
            weekends: true, // will hide Saturdays and Sundays
            header: {
                left : 'title',
                right : ''
            },
            footer: {
              left: 'agendaWeek,agendaDay',
              right: 'addEvent'
            },
            customButtons: {
              addEvent: {
                text: 'New Appointment',
                click: function() {
                    $('.md-modal').addClass('md-show');
                }
              }
            },
            contentHeight: 500,
            eventLimit: true, // for all non-agenda views
            eventColor: '#00d800',
            views: {
              agenda: {
                eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
              }
            },
            googleCalendarApiKey: 'AIzaSyASzw8Bs0XIWLuFIq5pTVYXu6OMtWNdnds',
            eventSources: [
                {
                  googleCalendarId: 'ugmun@deepbio.co.kr',
                },
            ]
        });
        $('#calendar').fullCalendar( 'gotoDate', date);
    }
});
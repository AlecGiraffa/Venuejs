/**
 * Created by AlecNing on 3/15/16.
 */
app.controller('bookController', ['$scope', function($scope) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    //$scope.changeView('agendaWeek');
    $scope.events = [];


    $scope.events = [
        {title: 'All Day Event',start: new Date(y, m, 1)},
        {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
    ];











    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image:
                '../../style/images/venue1/venue1pic1.jpg'
        },
        {
            image:
                '../../style/images/venue2/venue2pic1.jpg'
        },
        {
            image:
                '../../style/images/venue3/venue3pic1.jpg'
        }
    ];

    //------new modified march 17 ---//
    $scope.uiConfig = {
        calendar:{
            height: 450,
            editable: true,
            header:{
                left: 'month basicWeek basicDay agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }
    };






}]);

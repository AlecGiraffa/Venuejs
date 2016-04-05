/**
 * Created by AlecNing on 3/15/16.
 */
app.controller('bookController', ['$scope', 'userService', 'venueInfo', 'bookService', 'bookInfo', function($scope, userService, venueInfo, bookService, bookInfo) {



    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var day =date.getDay();
    $scope.id = bookService.venueId;

    $scope.uiConfig = {
        calendar:{
            defaultView: 'agendaWeek',
            firstDay : day,
            height: 450,
            events: $scope.events,
            editable: true,
            header: {
                left: '',
                center: 'title',
                right: 'today prev,next'
            },

            eventDurationEditable: false,
            eventOverlap: false,
            dragScroll: false,
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }

    };



    $scope.events = [
        {
            title: 'training',
            start: new Date(y, m, d, 8),
            end: new Date(y, m, d, 10)
        }
    ];


    //---------------carousel-----------------//
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

    $scope.eventSources = [$scope.events];
    //---------------time picker----------//
    //$scope.mytime1 = new Date();
    //$scope.mytime2 = new Date();

    $scope.hstep = 1;
    $scope.mstep = 1;



    $scope.ismeridian = false;

    $scope.clear = function() {
        $scope.mytime1 = new Date();
        $scope.mytime2 = new Date();
    }

    $scope.storeEvent = function() {
        bookInfo.bookList.push({
            id: bookInfo.lastId + 1,
            bookName: "Ziyi Wang",
            venueId: $scope.id,
            startDate: $scope.mytime1,
            endDate: $scope.mytime2

        });
        $scope.events.push({
            title: 'training',
            start: $scope.mytime1,
            end: $scope.mytime2
        });
        console.log(bookInfo.bookList);
        console.log("mytime1: " + $scope.mytime1);
        console.log("mytime2: " + $scope.mytime2);

    }
}]);

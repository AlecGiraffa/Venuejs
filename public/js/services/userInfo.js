/**
 * Created by Ziyi on 2016/3/16.
 */
app.service('userService',function() {
    var orderList =[{orderNum:1234567890,sport:'Basketball',schedule:'03-15-2016',information:'GYM',amount:30,code:'S16HE637A',status:'Unpaid',pay:true,cancel:true},
        {orderNum:32124141515,sport:'Golf',schedule:'04-15-2016',information:'Golf Court',amount:45,code:'SHT62HSS',status:'Paid',pay:false,cancel:true},
        {orderNum:32131242142,sport:'Swimming',schedule:'03-22-2016',information:'GYM',amount:30,code:'AAD4123D2',status:'Unpaid',pay:true,cancel:true}

    ];

    var voucheerList=[{type:1234567890,discription:'Basketball',price:50,validVenue:'GYM',validThru:"04-31-2016",status:'Used'},
        {type:1234567890,discription:'Basketball',price:60,validVenue:'Golf Court',validThru:"05-12-2016",status:'Unused'}

    ];

    var user={name:'Ziyi Wang',gender:'Female',age:25,location:'Santa Clara',sports:'Basketball',contact:'3155606865',email:'crazywings1991@gmail.com'};

    this.getOrder=function($scope){
        $scope.orders=orderList

    };

    this.getVoucheer=function($scope){
        $scope.voucheers=voucheerList;
    };

    this.getUser=function($scope){
        $scope.user=user;
    }

});
(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject= ['$scope'];
    
    function LunchCheckController($scope){

        $scope.items = "";
        $scope.feedback = "";

        $scope.checkIt = function () {
            if($scope.items.length ===0) 
                {
                    $scope.feedback = "Please enter data first.";
                    $scope.feedbackStyle = "warning";
                    return;
                }
            var itemLenths = $scope.items.split(",").length;
            $scope.feedbackStyle = "feedback";
            if(itemLenths < 4)
                {
                    $scope.feedback = "Enjoy!";
                    return;
                }
            $scope.feedback = "Too much!"   
    };
};
})();
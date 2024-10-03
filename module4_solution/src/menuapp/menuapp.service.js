(function () {
    'use strict';
    
    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http'];
    //MenuDataService.$inject = ['$q', '$timeout']
    function MenuDataService($http) {
      var service = this;
    
      service.getAllCategories = function (){

        console.log("try get menu category from server")

       console.log("menu data service: get tagegories");

       var response = $http({
           method: "GET",
           url: ("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
       });
       return response;
    };
  }
    
    })();
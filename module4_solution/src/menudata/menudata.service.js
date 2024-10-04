(function () {
    'use strict';
    
    angular.module('MenuData')
    .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http'];
    
    function MenuDataService($http) {
      var service = this;
    
      service.getAllCategories = function (){
        console.log("menu data service: get categories");
        var response = $http({
          method: "GET",
          url: ("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
        });
        return response;
      };

      service.getItemsForCategory = function(categoryShortName){
        console.log("menu data service: get items of the category: ", categoryShortName);
        var response = $http({
          method: "GET",
          url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName+".json")
        });
        return response;
      }

    }
  })();
(function (){
    'use strict';

    angular
        .module('MenuData')
        .service('MenuDataService', MenuDataService)

    MenuDataService.$inject = ['$http', 'MenuApiPath'];

   function MenuDataService($http, MenuApiPath){

       var service = this;

       service.getAllCategories = function (){

            console.log("try get menu category from server")

           console.log("menu data service: get tagegories");

           var response = $http({
               method: "GET",
               url: (MenuApiPath + "/categories.json")
           });
           return response.promise;
       };

       service.getItemsForCategory = function(categoryShortName){
        console.log("menu data service: get tagegories");

           var response = $http({
               method: "GET",
               url: (MenuApiPath + "{" + categoryShortName +"}")
           });
           return response.promise;
       };
   }
})
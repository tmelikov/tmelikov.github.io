(function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('MenuApiPath', "https://coursera-jhu-default-rtdb.firebaseio.com")
    .directive('foundItems', FoundItems);

    function FoundItems(){
        var ddo ={
            templateUrl: 'foundItems.html',
            scope: {
                list: '<',
                onRemove: '&'
            }
        };
        return ddo;
    };
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    
    function NarrowItDownController(MenuSearchService){

        var menu = this;

        menu.searchTerm ="Test";

        menu.found = [];
        menu.getItems = function(){

            console.log("get menu items!");

            var promise = MenuSearchService.getMatchedMenuItems();

            promise
            .then(function(response){
                console.log("got data.");
                var completeList = response.data;
                menu.found = completeList;

            })
            .catch(function(error){
                console.log(error)
            })


            //menu.found = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

            console.log("menu: ",menu.found);
        }

        menu.removeItem = function(itemIndex){
            console.log("remove item: ", itemIndex);
        };

    };


   MenuSearchService.$inject = ['$http', 'MenuApiPath'];

   function MenuSearchService($http, MenuApiPath){

       var service = this;

       service.foundItems = [];

       service.getMatchedMenuItems = function (){

           console.log("search items");

           var response = $http({
               method: "GET",
               url: (MenuApiPath + "/menu_items.json")
           });

           

           return response;;
       }
   }
})();
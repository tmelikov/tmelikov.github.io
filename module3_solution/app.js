(function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('MenuApiPath', "https://coursera-jhu-default-rtdb.firebaseio.com")
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective(){
        var ddo ={
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
          controller: FoundItemsDirectiveController,
          controllerAs: 'list',
          bindToController: true
        };
        return ddo;
    };
    
    function FoundItemsDirectiveController(){
      var list = this;
    }
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    
    function NarrowItDownController(MenuSearchService){

        var menu = this;

        menu.searchTerm ="chicken";
        menu.actualAction = "some action";

        menu.found = [];
        menu.getItems = function(){

            console.log("get menu items!");

            var promise = MenuSearchService.getMatchedMenuItems();

            promise
            .then(function(response){
                console.log("got data.");
                var completeList = response.data;
                
                menu.found = completeList;
                menu.actualAction = "results found: " + menu.found;

            })
            .catch(function(error){
                console.log(error)
            })

            console.log("menu: ", menu.found);
        }

        menu.removeItem = function(itemIndex){
            menu.actualAction = "remove item: " + itemIndex;
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
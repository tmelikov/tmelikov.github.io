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
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownListController,
            controllerAs: 'list',
            bindToController:true
        };
        return ddo;
    };
    
    function NarrowItDownListController(){
        var list = this;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    
    function NarrowItDownController(MenuSearchService){

        var menu = this;

        menu.searchTerm ="chicken";

        var found = [];

        menu.getItems = function(){

            console.log("get menu items!");

            if(found.length !== 0)
            {
                found.length = 0;
            }

            var promise = MenuSearchService.getMatchedMenuItems();

            promise
            .then(function(response){
                console.log("got data.");
                var completeList = [];
                completeList = response.data;

                console.log(completeList);
                angular.forEach(completeList, function(element){

                    console.log(element);


                    angular.forEach(element.menu_items, function(item){
                        console.log(item);
                        if(item.description.indexOf(menu.searchTerm) !==-1)
                            {
                                found.push(item);
                            };
                    });

                    
                });

                console.log("founs items in the menu:", found);

            })
            .catch(function(error){
                console.log(error)
            })

            console.log("menu: ", found);
        }

        menu.removeItem = function(itemIndex){
            console.log("remove item: ", itemIndex);
            menu.found.splice(itemIndex, 1)
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
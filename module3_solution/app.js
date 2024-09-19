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
                foundItems: '<',
                onRemove: '&'
            }
        };
        return ddo;
    }
    
    NarrowItDownController.$inject= ['MenuSearchService'];
    
    function NarrowItDownController(MenuSearchService){

        var narrowCtr = this;

        narrowCtr.searchTerm ="";

        narrowCtr.found = MenuSearchService.getMatchedMenuItems(narrowCtr.searchTerm);

        narrowCtr.removeItem = function(itemIndex){
            console.log("remove item: ", itemIndex);
        };

    };


    MenuSearchService.$inject['$http', 'MenuApiPath']
    function MenuSearchService($http, MenuApiPath){

        var service = this;

        service.foundItems = [];

        this.getMatchedMenuItems = function (searchTerm){

            $http({
                method: "GET",
                url: (MenuApiPath + "/menu_items.json")
            })
            .then(function(response){
                console.log("got data.");
                service.foundItems = response.data;

            })
            .catch(function(error){
                console.log(error)
            });

            

            return service.foundItems;;
        }
    }
})();
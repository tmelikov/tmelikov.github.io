(function(){
    'use strict';

    angular.module('ShoppingListCheckOff')
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService){
      toBuy = this;
      
      toBuy.items = ShoppingListCheckOffService.getAvailableItems();
      
      toBuy.moveInBusket = function(itemIndex){
        ShoppingListCheckOffService.moveInBoughtList(itemIndex);
      }
    };
    
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService){
      alreadyBought = this;
      
      alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
      
      alreadyBought.moveItemBack = function(itemIndex){
        ShoppingListCheckOffService.removeFromBuscket(itemIndex);
      }
    };

    function ShoppingListCheckOffService(){
      var service = this;

      var toBuyItems = ["Cookie","Cheaps","Sugar-Drinks"];

      var toBoughtItems =[];
      
      service.moveInBoughtList = function(itemIndex)
      {
        var item = toBuyItems[itemIndex];

        toBoughtItems.push(item);

        toBuyItems.splice(itemIndex,1);
      }

      service.removeFromBuscket = function(itemIndex){
        var item =toBoughtItems[itemIndex]

        toBuyItems.push(item);

        toBoughtItems.splice(itemIndex, 1);
      }
    }

})();
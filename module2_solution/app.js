(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService){
      var toBuy = this;
      
      toBuy.items = ShoppingListCheckOffService.getAvailableItems();
      
      toBuy.moveInBusket = function(itemIndex){
        console.log("move in busket.");
        ShoppingListCheckOffService.moveInBoughtList(itemIndex);
      }
    };
    
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService){
      var alreadyBought = this;
      
      alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    };

    function ShoppingListCheckOffService(){
      var service = this;

      var toBuyItems = ["Cookie","Cheaps","Pizza", "Beer", "Fizzy drinks", "Chocolate"];

      var toBoughtItems =[];

      service.getAvailableItems = function(){
        console.log(toBuyItems);
        return toBuyItems;
      }
      


      service.moveInBoughtList = function(itemIndex)
      {

        var item = toBuyItems[itemIndex];

        toBoughtItems.push(item);

        toBuyItems.splice(itemIndex,1);

      }

      service.getBoughtItems = function(){
        return toBoughtItems;
      }
    }

})();
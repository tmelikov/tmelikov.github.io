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
      
      toBuy.moveInBusket = ShoppingListCheckOffService.moveInBoughtList;
    };
    
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService){
      alreadyBought = this;
      
      alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems;
      
      alreadyBought.moveItemBack = ShoppingListCheckOffService.removeFromBuscket;
    };

})();
(function (){
    'use strict';

    angular.module('MenuApp')
    .controller('ItemListController', ItemListController);

    ItemListController.$inject = ['MenuDataService', 'promise'];

    function ItemListController(MenuDataService, promise){
      console.log("display items:", promise);

      var itemList = this;

      itemList.category = promise.data.category.short_name;

      itemList.items = promise.data.menu_items;
    }
      
      })();
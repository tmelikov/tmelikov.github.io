(function (){
    'use strict';

    angular.module('MenuApp')
    .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['MenuDataService', 'promise'];

    function CategoryController(MenuDataService, promise){

        console.log("categories: ", promise);

        var categoryList = this;

        categoryList.items = promise.data;
    } 
      
})();
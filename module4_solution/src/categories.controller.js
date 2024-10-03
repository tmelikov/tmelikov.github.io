(function (){
    'use strict';

    angular.module('MenuApp')
    .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['items'];

    function CategoryController(items){

        console.log("categories: ", items);

        categoryList = this;

        categoryList.items = items;
    } 
      
})();
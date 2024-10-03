(function (){
    'use strict';

    angular.module('MenuApp')
    .component('categoryList', {
        templateUrl: 'src/templates/categoryList.template.html',
        bindings: {
          items: '<'
        }
      }); 
      
})();
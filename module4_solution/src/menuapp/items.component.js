(function (){
    'use strict';

    angular.module('MenuApp')
    .component('itemList', {
        templateUrl: 'src/templates/itemList.template.html',
        bindings: {
          items: '<'
        }
      });
      
      })();
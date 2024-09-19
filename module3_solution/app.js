(function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);
    
    NarrowItDownController.$inject= ['MenuSearchService'];
    
    function NarrowItDownController(MenuSearchService){

        var narroCtr = this;
    };

    function MenuSearchService(){

        service = this;

        this.getMatchedMenuItems = function (seatchTerm){
            return [];
        }
    }


})();
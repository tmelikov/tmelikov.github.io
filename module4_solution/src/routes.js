(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })

      // Category list page
      .state('categoryList', {
        url: '/category-list',
        templateUrl: 'src/menuapp/templates/categoryList.template.html',
        controller: 'CategoryController as categoryList',
        resolve: {
          promise: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      
      .state('categoryList.itemList', {
        url: '/item-list',
        templateUrl: 'src/menuapp/templates/itemList.template.html',
        controller: 'ItemListController as itemList',
        params: {
          categoryShotname: null
        },
        resolve:{
          promise: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            var categoryShotname = $stateParams.categoryShotname;
            return MenuDataService.getItemsForCategory(categoryShotname);
          }]
        }
      });
    
    }
    
    })();
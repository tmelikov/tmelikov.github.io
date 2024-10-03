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
        templateUrl: 'src/templates/home.template.html'
      })

      .state('categoryList', {
        url: '/category-list',
        templateUrl: 'src/templates/categoryList.template.html',
        controller: 'CategoryController as categoryList',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            console.log("start get categories.");
            return MenuDataService.getAllCategories();
          }]
        }
      })
    
    }
    
    })();
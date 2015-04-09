var app = angular.module('escalasApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/escalas',
            {
                controller: 'EscalasController',
                templateUrl: '/app/views/panelEscalas.html'
            })
        .when('/servicos',
            {
                controller: 'EscalasController',
                templateUrl: '/app/views/panelEscalas.html'
            })
        .when('/pessoas',
            {
                controller: 'PessoasController',
                templateUrl: '/app/views/panelPessoas.html'
            })
        .when('/pessoas/edit/:pessoaID',
            {
                controller: 'PessoasControllerEdit',
                templateUrl: '/app/views/panelPessoasEdit.html'
            })
        .when('/pessoas/new/',
            {
                controller: 'PessoasControllerNew',
                templateUrl: '/app/views/panelPessoasNew.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        //.when('/customerorders/:customerID',
        //    {
        //        controller: 'CustomerOrdersController',
        //        templateUrl: '/app/partials/customerOrders.html'
        //    })
        //Define a route that has a route parameter in it (:customerID)
        .otherwise({ redirectTo: '/pessoas' });
});



var app = angular.module("formApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "Modules/FormList/FormList.html",
    })
    .when("/form/:nameParam", {
      templateUrl: "Modules/Form/Form.html",
    });
});

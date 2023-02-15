app.controller("formController", function ($scope, $routeParams) {
  const convertToSlug = function (text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  };
  $scope.formName = $routeParams.nameParam;
  $scope.formList = JSON.parse(localStorage.getItem("formList"));
  $scope.selectedForm = $scope.formList.filter((item) => {
    return convertToSlug(item.name) == $scope.formName;
  })[0];

  $scope.getInputType = function (dataType) {
    return dataType == "STRING" ? "text" : "number";
  };

  $scope.getInputRequired = function (required) {
    return required;
  };
});

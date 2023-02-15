app
  .controller("formListController", function ($scope) {
    $scope.header = "Form Listesi";
    $scope.formList = JSON.parse(localStorage.getItem("formList")) || [];
    $scope.emptyField = { required: false, name: null, dataType: null };
    $scope.fields = [{ required: false, name: null, dataType: null }];
    let now = new Date();
    let createdAt =
      now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
    $scope.submitForm = function () {
      let newForm = {
        name: $scope.formName,
        description: $scope.description,
        createdAt: createdAt,
        fields: $scope.fields,
      };
      $scope.formList.push(newForm);
      localStorage.setItem("formList", JSON.stringify($scope.formList));
      let newField = JSON.parse(JSON.stringify($scope.emptyField));
      $scope.fields = [newField];
      $scope.formName = null;
      $scope.description = null;
      $scope.formList = JSON.parse(localStorage.getItem("formList"));
      $("#formModal").modal("hide");
    };
    $scope.addField = function () {
      let newField = JSON.parse(JSON.stringify($scope.emptyField));
      $scope.fields.push(newField);
    };
    $scope.convertToSlug = function (text) {
      return text
        .toLowerCase()
        .trim()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    };
  })
  .directive("formModal", function () {
    return {
      templateUrl: "Modules/FormList/FormModal.html",
    };
  });

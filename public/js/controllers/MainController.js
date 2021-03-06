
(function(){
  angular.module('ngtodos') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService'];

  function MainController($scope, TodoService){
    $scope.message = 'Hey now! What is that sound?';
    $scope.messages = 'some more stuff';
    var msg = 'a non scoped messaged';

    var todos;
    TodoService.readAll()
              .then(function(){
                todos = TodoService.todos;
                console.log(todos);
              });
    TodoService.create();
    TodoService.delete();
    TodoService.update();

  }
})();

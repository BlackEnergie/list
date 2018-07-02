var txt = "";
function renameList(){
    var name = prompt("Enter a name for your list:", txt);
    if(name == null || name === ""){
        if(txt === "")
            txt = "MyList";
    } else {
        txt = name;
    }
    title = angular.element(document.querySelector('.title'));
    title.html(txt);
}



var deleted = null;
var app = angular.module('todoApp', []);
var btnSave = angular.element(document.querySelector('.save-list'));
var btnCancelRemove = angular.element(document.querySelector('.cancel-remove'));

app.controller('todoList', function($scope) {
    $scope.todos = [ {text:'Learn AngularJS', done:true},
        {text:'build an AngularJS app', done:false}];

    $scope.addTodo = function(item) {
        if($scope.todoText !== '') {
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        } else {
            $scope.todos.push(item)
        }
    };

    $scope.cancelRemove = function () {
      $scope.addTodo(deleted);
    };
    
    $scope.removeTodo = function (idx) {
        deleted = $scope.todos[idx];
        $scope.todos.splice(idx, 1);
    }
});
var txt = "";

function renameList() {
    var name = prompt("Enter a name for your list:", txt);
    if (name == null || name === "") {
        if (txt === "")
            txt = "MyList";
    } else {
        txt = name;
    }
    title = angular.element(document.querySelector('.title'));
    title.html(txt);
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            console.log("left");
        } else {
            console.log("right");
        }
    }
}

/* reset values */
xDown = null;


var deleted = null;
var app = angular.module('todoApp', []);
var btnSave = angular.element(document.querySelector('.save-list'));
var btnCancelRemove = angular.element(document.querySelector('.cancel-remove'));

app.controller('todoList', function ($scope) {
    $scope.todos = [{text: 'Learn AngularJS', done: true},
        {text: 'build an AngularJS app', done: false}];

    $scope.addTodo = function (item) {
        if ($scope.todoText !== '') {
            $scope.todos.push({text: $scope.todoText, done: false});
            $scope.todoText = '';
        } else {
            $scope.todos.push(item)
        }
    };

    $scope.cancelRemove = function () {
        console.log(deleted);
        $scope.addTodo(deleted);
    };

    $scope.removeTodo = function (idx) {
        deleted = $scope.todos[idx];
        $scope.todos.splice(idx, 1);
    }
});
let myapp= angular.module("myApp",[]); 

let mycontroller1= function($scope)
{
    $scope.message ="Hello World";
} 

myapp.controller("MyController",mycontroller1);

let JSONController = function($scope){
    let Student={
        FirstName : "sharadruthi",
        LastName : "Beerkuri"
    }
    $scope.Student=Student;
}

myapp.controller("Student",JSONController);
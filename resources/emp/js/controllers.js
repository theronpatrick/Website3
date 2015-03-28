function employeeController($scope, $http) {
    $http.get('employees.json')
        .then(function (res) {
        $scope.employees = res.data;
    });

    $scope.addEmployee = function () {
        $scope.employees.push({
            "firstName": $scope.newEmployee.firstName,
                "lastName": $scope.newEmployee.lastName,
                "email": $scope.newEmployee.email,
                "phoneNumber": $scope.newEmployee.phoneNumber,
                "address": $scope.newEmployee.address
        });

        //reset add fields

        $scope.newEmployeeFirstName = "";
        $scope.newEmployeeLastName = "";
        $scope.newEmployeeEmail = "";
        $scope.newEmployeePhoneNumber = "";
        $scope.newEmployeeAddress = "";

    };

    $scope.removeItem = function (index) {
        $scope.employees.splice(index, 1);

        //reset update fields
        $scope.updatedEmployeeIndex = -1;

        $scope.updatedEmployeeFirstName = "";
        $scope.updatedEmployeeLastName = "";
        $scope.updatedEmployeeEmail = "";
        $scope.updatedEmployeePhoneNumber = "";
        $scope.updatedEmployeeAddress = "";
    };

    $scope.updateItem = function (index, employee) {
        //$scope.employees.splice(index,1);
        //alert(employee.firstName);
        alert(employee.firstName);
    };

    $scope.selectRow = function (index, employee) {

        $scope.updatedEmployeeIndex = index;

        $scope.updatedEmployee= employee;
        
        console.log(this);
        
       
      

    };

    $scope.updateEmployee = function (index) {
        console.log($scope.employees[index]);

        var employeeRow = $scope.employees[index];

        employeeRow.firstName = $scope.updatedEmployee.firstName;
        

    };

    $scope.saveData = function () {
    	//not working right now
        $.ajax({
            type: 'POST',
            url: 'saveOutput.php', //url of receiver file on server
            data: {
                "foo": "bar"
            }, //your data
            contentType: 'application/json'

        });

    };



}


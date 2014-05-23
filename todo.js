function Todo($scope) {

	$scope.createTask = function(task) {
		if (task == '')
			return null;
		var newToDoTask = {
			task: task,
			status: false,
			expanded: false,
			subTasks: []
		};

		return newToDoTask;
	}

	$scope.addTask = function() {
		var task = $scope.createTask($scope.newTask);
		if(task!=null){
			$scope.addNewTaskToList(task);
		}
	}
 
  	$scope.addNewTaskToList = function(task) {
    	$scope.toDoList.push(task);
		$scope.clearInputFields();
  	}

  	$scope.addSubTask = function(indexKey) {
  		var subTask = $scope.createTask($scope.newSubTask);
  		if(task!=null){
  			$scope.addNewSubTaskInTask(subTask, indexKey);
  		}
  	}

  	$scope.addNewSubTaskInTask = function(subTask, indexKey) {
  		$scope.toDoList[indexKey].subTasks.push(subTask);
  		$scope.clearInputFields();
  	}

  	$scope.clearInputFields = function(){
  		$scope.newTask = '';
  	}

  	$scope.init = function() {
  		$scope.toDoList = [];
  	}

  	$scope.init();
}

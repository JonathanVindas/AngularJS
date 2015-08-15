angular.module('jsoop.controllers', [])

.controller('HomeController', ['$scope', function($scope) {
	var hello = function(message){
		console.log(message);
	};

	$scope.model = {
		// tipos de datos string, int, booleans
		name: 'Cris',
		phone: '22358945',
		active: 'true',
		print: function(){
			console.log('hola mundo');
		},
		say: hello
	};
}])

.controller('AboutController', ['$scope', function($scope) {

}]);
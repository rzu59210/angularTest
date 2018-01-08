clientModule.controller('clientController' ,['$scope' , '$http' , function($scope , $http){


	var url = {
		'listerClientUrl' : "https://prodv2.id-ingenierie.com/api/companies",
		'listerCategorieUrl' : "https://prodv2.id-ingenierie.com/api/categories/list",
		'createClientUrl' : "https://prodv2.id-ingenierie.com/api/companies"
	};
	
	$scope.clients;
	$scope.categories;
	$scope.error = {};


	$http({
	    url: url.listerClientUrl,
	    dataType: 'json',
	    method: 'GET',
	    headers: {
	        "Content-Type": "application/json"
	    }
	}).then(function onSuccess(response){
	    $scope.clients = JSON.stringify(response.data);
	    console.log($scope.clients);
	}).catch(function onError(error){
	    $scope.error['client'] = error;
	});

	$scope.listerCategorie = function(){
		$http({
	    url: url.listerCategorieUrl,
	    dataType: 'json',
	    method: 'GET',
	    headers: {
	        "Content-Type": "application/json"
	    }
		}).then(function onSuccess(response){
		    $scope.categories = JSON.stringify(response);
		}).catch(function onError(error){
		    $scope.error['categories'] = error;
		});
	}


}]);
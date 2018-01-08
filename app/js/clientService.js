clientModule.factory('clientFactory' , ['$http' , function($http){
	var info;

	return {
		saveClient : function(url , client){
			$http({
			    url: url,
			    dataType: 'json',
			    method: 'POST',
			    headers: {
			        "Content-Type": "application/json"
			    },
			    data : {
			    	'client' : client
			    }
			}).then(function onSuccess(response){
				info = "Le client a bien été enregistré";
			}).catch(function onError(error){
			    info = "Impossible d'enregistré le client";
			});
			return info;
		}
	}
}])
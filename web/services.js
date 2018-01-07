myApp.service('fileUploadService', function ($http, $q) {
        this.uploadFileToUrl = function (file, uploadUrl) {
            var fileFormData = new FormData();
            fileFormData.append('file',file);
            var deffered = $q.defer();
            $http.post(uploadUrl, fileFormData, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
 
            }).success(function (response) {
                deffered.resolve(response);
 
            }).error(function (response) {
                deffered.reject(response);
            });
 
            return deffered.promise;
        };

        this.getFile = function(url) {
            return $http({
                url: url,
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        };

        this.removeFile = function(url) {
            return $http({
                url: url,
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        };
});
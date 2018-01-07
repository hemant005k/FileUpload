var myApp = angular.module('app')
            .controller('FileUploadController', function ($scope, fileUploadService) {
                $scope.uploadFile = function () {
                    var file = $scope.myFile;
                    console.log('file====',file);
                    fileUploadService.uploadFileToUrl(file, "doc/uploadFile")
                    .then(function (response){                        
                        $scope.serverResponse = response.message;
                        $scope.displayFile();
                    }, function () {
                        $scope.serverResponse = 'An error has occurred';
                    })
                }

                $scope.displayFile = function(){
                    fileUploadService.getFile("doc/getAllFiles")
                    .then(function(response){
                        console.log(response);
                        $scope.getList=response.data.docs;
                    },function(){
                        console.log(err);
                    })
                }
                $scope.displayFile();

                $scope.deleteFile = function(file){
                    fileUploadService.removeFile('doc/deleteFile/'+file._id)
                        .then(function(response){
                            console.log(response);
                            $scope.displayFile();
                    },function(){
                        console.log(err);
                    })
                }
            });
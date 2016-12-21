/* 
* @Author: Marte
* @Date:   2016-12-04 16:45:26
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-05 10:04:17
*/
var ctrl=angular.module("ctrl",[]);
ctrl.controller("index",function($scope,$http){
    $http({
        method:"get",
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/latest",
        responseType:"json"
    }).then(function(res){
        $scope.list=res.data.stories;
    })
})

ctrl.controller("show",function($scope,$http,$routeParams){
    $http({
        method:"get",
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/"+$routeParams.id,
        responseType:"json"
    }).then(function(res){
        $scope.list=res.data;
    })
})

ctrl.controller("theme",function($scope,$http){
    $http({
        method:"get",
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/themes",
        responseType:"json"
    }).then(function(res){
        $scope.list=res.data.others;
    })
})


ctrl.controller("themelist",function($scope,$http,$routeParams){
    $http({
        method:"get",
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/theme/"+$routeParams.id,
        responseType:"json"
    }).then(function(res){
        $scope.list=res.data.stories;
    })
})
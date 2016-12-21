/* 
* @Author: Marte
* @Date:   2016-12-04 16:46:56
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-04 18:42:27
*/
var app=angular.module("app",["ctrl","ngRoute","ngSanitize"]);
app.config(["$routeProvider",function($r){
    $r.when("/",{
        templateUrl:"tpls/index-list.html",
        controller:"index"
    }).when("/show/:id",{
        templateUrl:"tpls/show.html",
        controller:"show"
    }).when("/theme/:id",{
        templateUrl:"tpls/theme-list.html",
        controller:"themelist"
    })
}])
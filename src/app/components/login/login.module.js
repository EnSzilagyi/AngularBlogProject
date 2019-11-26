import angular from 'angular';
import loginDirective from "./login.directive";
import uiRouter from "@uirouter/angularjs";
import studentApiService from "../../services/student/student.api.module";

const loginModule = angular
    .module('appLogin', [uiRouter,studentApiService])
    .directive('appLogin', loginDirective)
    .config(($stateProvider) =>{
        $stateProvider.state('login',{
            url: '/login',
            template: '<app-login>'
        })
    })
    .name;

export default loginModule;

// import angular from 'angular';
// import editBlogDirective from "./editblog.directive";
// import uiRouter from "@uirouter/angularjs"
// import studentApiService from "../../services/student/student.api.module";
//
//
// const editBlogModule = angular
//     .module('appEditBlog', [uiRouter,studentApiService])
//     .directive('appEditBlog', editBlogDirective)
//     .config(($stateProvider) =>{
//         $stateProvider.state('editblog',{
//             url: '/editblog/:id',
//             template: '<app-edit-blog>'
//         })
//     })
//     .name;
//
// export default editBlogModule;

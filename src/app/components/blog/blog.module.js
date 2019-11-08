import angular from 'angular';
import blogDirective from "./blog.directive";
import uiRouter from "@uirouter/angularjs"
import studentApiService from "../../services/student/student.api.module";

const blogModule = angular
    .module('appBlog', [uiRouter,studentApiService])
    .directive('appBlog', blogDirective)
    .config(($stateProvider) =>{
        $stateProvider.state('blog',{
            url: '/blog/:id',
            template: '<app-blog>'
        })
    })
    .name;

export default blogModule;
//
// const newStudentModule = angular
//     .module('appNewStudent', [StudentApiService,uiRouter])
//     .directive('appNewStudent', newStudentDirective)
//     .config(($stateProvider) => {
//         $stateProvider.state('newStudent', {
//             url: '/newstudent',
//             template: "<app-new-student>"
//         })
//     })
//     .name;
//
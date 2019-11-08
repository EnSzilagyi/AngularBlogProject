import angular from 'angular';
import editBlogDirective from "./editblog.directive";
import uiRouter from "@uirouter/angularjs"
import studentApiService from "../../services/student/student.api.module";


const editBlogModule = angular
    .module('appEditBlog', [uiRouter,studentApiService])
    .directive('appEditBlog', editBlogDirective)
    .config(($stateProvider) =>{
        $stateProvider.state('editblog',{
            url: '/editblog/:id',
            template: '<app-edit-blog>'
        })
    })
    .name;

export default editBlogModule;
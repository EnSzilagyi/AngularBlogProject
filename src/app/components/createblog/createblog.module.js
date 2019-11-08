import angular from 'angular';
import StudentApiService from '../../services/student/student.api.module';
import createBlogDirective from './createblog.directive.js'
import uiRouter from '@uirouter/angularjs';


const createBlogModule = angular
    .module('appCreateBlog', [StudentApiService,uiRouter])
    .directive('appCreateBlog', createBlogDirective)
    .config(($stateProvider) => {
        $stateProvider.state('createBlog',{
            url: '/createblog',
            template: '<app-create-blog>'
        })

    })
    .name;

export default createBlogModule;

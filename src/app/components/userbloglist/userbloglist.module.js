import angular from 'angular';
import userBlogListDirective from './userbloglist.directive';
import StudentApiService from '../../services/student/student.api.module';
import uiRouter from '@uirouter/angularjs';

const userBlogListModule = angular
    .module('userBlogList', [StudentApiService,uiRouter])
    .component('userBlogList', userBlogListDirective)
    .config(($stateProvider) =>{
        $stateProvider.state('userbloglist',{
            url: '/userbloglist',
            template: '<user-blog-list>'
        })
    })
    .name;

export default userBlogListModule;

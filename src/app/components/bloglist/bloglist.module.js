import angular from 'angular';
import blogListComponent from './bloglist.component';
import StudentApiService from '../../services/student/student.api.module';
import uiRouter from '@uirouter/angularjs';

const blogListModule = angular
    .module('blogList', [StudentApiService,uiRouter])
    .component('blogList', blogListComponent)
    .name;

export default blogListModule;

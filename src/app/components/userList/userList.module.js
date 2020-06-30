import angular from 'angular';
import userArticleListDirective from './userList.directive';
import uiRouter from '@uirouter/angularjs';
import articleApiService from "../../services/article/article.api.module";

const userListModule = angular
    .module('userList', [articleApiService, uiRouter])
    .component('userList', userArticleListDirective)
    .config(($stateProvider) => {
        $stateProvider.state('userList', {
            url: '/userlist',
            template: '<user-list>'
        })
    })
    .name;

export default userListModule;

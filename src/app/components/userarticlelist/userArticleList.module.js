import angular from 'angular';
import userArticleListDirective from './userArticleList.directive';
import uiRouter from '@uirouter/angularjs';
import articleApiService from "../../services/article/article.api.module";

const userArticleListModule = angular
    .module('userArticleList', [articleApiService, uiRouter])
    .component('userArticleList', userArticleListDirective)
    .config(($stateProvider) => {
        $stateProvider.state('userArticleList', {
            url: '/userarticlelist',
            template: '<user-article-list>'
        })
    })
    .name;

export default userArticleListModule;

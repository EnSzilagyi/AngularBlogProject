import angular from 'angular';
import createArticleDirective from './createArticle.directive.js'
import uiRouter from '@uirouter/angularjs';
import articleApiService from "../../services/article/article.api.module";


const createArticleModule = angular
    .module('appCreateArticle', [articleApiService, uiRouter])
    .directive('appCreateArticle', createArticleDirective)
    .config(($stateProvider) => {
        $stateProvider.state('createArticle', {
            url: '/createarticle',
            template: '<app-create-article>'
        })

    })
    .name;

export default createArticleModule;

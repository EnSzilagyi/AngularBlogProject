import angular from 'angular';
import articleDirective from "./article.directive";
import uiRouter from "@uirouter/angularjs"
import articleApiService from "../../services/article/article.api.module";

const articleModule = angular
    .module('appArticle', [uiRouter, articleApiService])
    .directive('appArticle', articleDirective)
    .config(($stateProvider) => {
        $stateProvider.state('article', {
            url: '/article/:id',
            template: '<app-article>'
        })
    })
    .name;
export default articleModule;

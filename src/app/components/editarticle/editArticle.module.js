import angular from 'angular';
import editArticleDirective from "./editArticle.directive";
import uiRouter from "@uirouter/angularjs"
import articleApiService from "../../services/article/article.api.module";


const editArticleModule = angular
    .module('appEditArticle', [uiRouter,articleApiService])
    .directive('appEditArticle', editArticleDirective)
    .config(($stateProvider) => {
        $stateProvider.state('editArticle', {
            url: '/editarticle/:id',
            template: '<app-edit-article>'
        })
    })
    .name;

export default editArticleModule;

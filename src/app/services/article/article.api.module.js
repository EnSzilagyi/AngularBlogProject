import angular from 'angular';
import restangular from 'restangular';
import ArticleApiService from './article.api.service';

const articleApiService = angular
    .module('articleApiService', [restangular])
    .service('articleApiService', ArticleApiService)
    .name;

export default articleApiService;

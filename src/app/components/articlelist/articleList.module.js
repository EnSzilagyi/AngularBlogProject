import angular from 'angular';
import articleListComponent from './articleList.component';
import ArticleApiService from '../../services/article/article.api.module';
import uiRouter from '@uirouter/angularjs';

const articleListModule = angular
    .module('articleList', [ArticleApiService, uiRouter])
    .component('articleList', articleListComponent)
    .name;

export default articleListModule;

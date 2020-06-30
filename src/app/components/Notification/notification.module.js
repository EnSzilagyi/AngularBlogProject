import angular from 'angular';
import userArticleListDirective from './notification.directive';
import uiRouter from '@uirouter/angularjs';
import articleApiService from "../../services/article/article.api.module";

const notificationModule = angular
    .module('notifcation', [articleApiService, uiRouter])
    .component('notifcation', userArticleListDirective)
    .config(($stateProvider) => {
        $stateProvider.state('notifcation', {
            url: '/notifcation',
            template: '<notifcation>'
        })
    })
    .name;

export default notificationModule;

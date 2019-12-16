import angular from 'angular';
import loginDirective from "./login.directive";
import uiRouter from "@uirouter/angularjs";
import articleApiService from "../../services/article/article.api.module";

const loginModule = angular
    .module('appLogin', [uiRouter, articleApiService])
    .directive('appLogin', loginDirective)
    .config(($stateProvider) => {
        $stateProvider.state('login', {
            url: '/login',
            template: '<app-login>'
        })
    })
    .name;

export default loginModule;

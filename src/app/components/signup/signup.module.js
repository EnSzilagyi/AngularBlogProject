import angular from 'angular';
import signUpDirective from "./signup.directive";
import uiRouter from "@uirouter/angularjs";
import articleApiService from "../../services/article/article.api.module";

const signUpModule = angular
    .module('appSignUp', [uiRouter,articleApiService])
    .directive('appSignUp', signUpDirective)
    .config(($stateProvider) =>{
        $stateProvider.state('signup',{
            url: '/signup',
            template: '<app-sign-up>'
        })
    })
    .name;

export default signUpModule;

import angular from 'angular';
import signUpDirective from "./signup.directive";
import uiRouter from "@uirouter/angularjs";
import studentApiService from "../../services/student/student.api.module";

const signUpModule = angular
    .module('appSignUp', [uiRouter,studentApiService])
    .directive('appSignUp', signUpDirective)
    .config(($stateProvider) =>{
        $stateProvider.state('signup',{
            url: '/signup',
            template: '<app-sign-up>'
        })
    })
    .name;

export default signUpModule;

// import angular from 'angular';

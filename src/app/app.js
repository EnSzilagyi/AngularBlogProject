import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularLoadingBar from 'angular-loading-bar';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';

import 'angular-material/angular-material.css';

angular
    .module('app', [
        uiRouter,
        angularLoadingBar,
        ngMaterial,
        ngAnimate,
        ngAria,
        Components,
        Services
    ])
    .value('EventEmitter', payload => ({$event: payload}))
    .config(($locationProvider, $urlRouterProvider) => {

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/app');
    })
    .config(($mdThemingProvider) => {
        $mdThemingProvider.theme("blue")
            .primaryPalette("blue")
            .accentPalette("red");

        $mdThemingProvider.theme("green")
            .primaryPalette("teal")
            .accentPalette("red");
        $mdThemingProvider.alwaysWatchTheme(true);
    })
    .config((RestangularProvider) => {
        RestangularProvider.setBaseUrl('http://localhost:8080/api/');
        RestangularProvider.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
            if (localStorage.getItem('token')) {
                headers.Authorization = 'Bearer ' + localStorage.getItem('token');
            }
            return {
                element: element,
                params: params,
                headers: headers,
                httpConfig: httpConfig
            };
        });
    })
    .run(($transitions, cfpLoadingBar) => {
        $transitions.onStart({}, cfpLoadingBar.start);
        $transitions.onSuccess({}, cfpLoadingBar.complete);
    })
    .component('app', AppComponent)
    .name;

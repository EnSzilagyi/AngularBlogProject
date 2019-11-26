import template from './signup.html';
import controller from './signup.controller';
import './signup.scss'

const signUpDirective = function () {
    return {
        restrict: 'EA',
        scope: {
            data: '=data'
        },
        link: function (scope, elem, attr) {
        },
        bindings:{},
        template,
        controller,
        controllerAs: 'ctrl'
    }
};

export default signUpDirective;

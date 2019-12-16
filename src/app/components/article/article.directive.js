import template from './article.html';
import controller from './article.controller';

const articleDirective = function () {
    return {
        restrict: 'EA',
        scope: {
            data: '=data'
        },
        link: function (scope, elem, attr) {
        },
        template,
        controller,
        controllerAs: 'ctrl'
    }
};

export default articleDirective;

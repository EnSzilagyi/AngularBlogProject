import template from './createArticle.html';
import controller from './createArticle.controller';

const createArticleDirective = function () {
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

export default createArticleDirective;

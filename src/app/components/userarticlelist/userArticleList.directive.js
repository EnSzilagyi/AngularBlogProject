import template from './userArticleList.html';
import controller from './userArticleList.controller';

const userArticleListDirective = function () {
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

export default userArticleListDirective();

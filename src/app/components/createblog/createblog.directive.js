import template from './createblog.html';
import controller from './createblog.controller';

const createBlogDirective = function () {
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

export default createBlogDirective;

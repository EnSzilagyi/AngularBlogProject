import template from './blog.html';
import controller from './blog.controller';
// import './blog.scss';

const blogDirective = function () {
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

export default blogDirective;

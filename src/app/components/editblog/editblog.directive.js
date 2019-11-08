import template from './editblog.html';
import controller from './editblog.controller';


const editBlogDirective = function () {
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

export default editBlogDirective;

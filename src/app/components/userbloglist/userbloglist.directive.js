import template from './userbloglist.html';
import controller from './userbloglist.controller';
// import './blog.scss';

const userBlogListDirective = function () {
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

export default userBlogListDirective();

import template from './editArticle.html';
import controller from './editArticle.controller';


const editArticleDirective = function () {
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

export default editArticleDirective;

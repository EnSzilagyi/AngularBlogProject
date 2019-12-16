class ArticleListController {
    constructor(articleApiService, $state) {
        'ngInject';
        this.$state = $state;
        this.articleApiService = articleApiService;
        this.articles = [];
        this.name = 'articlelist';
    }

    $onInit() {
        this.articleApiService.getAllArticles().then((articles) => {
            angular.copy(articles, this.articles);
        });
    }

    goto(page, id) {
        this.$state.go(page, {id: id});
    }
}

export default ArticleListController;

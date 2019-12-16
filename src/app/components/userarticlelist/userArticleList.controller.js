class userArticleListController {
    constructor(articleApiService, $state) {
        'ngInject';
        this.$state = $state;
        this.articleApiService = articleApiService;
        this.articles = [];
        this.name = 'articlelist';
    }

    $onInit() {
        this.articleApiService.getUsersArticles().then((articles) => {
            angular.copy(articles.content, this.articles);
        });
    }

    goto(page, id) {
        this.$state.go(page, {id: id});
    }
}

export default userArticleListController;

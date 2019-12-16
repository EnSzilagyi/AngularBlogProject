class ArticleController {
    constructor($scope, articleApiService, $stateParams, $state) {
        'ngInject';
        this.articleId = $stateParams.id ? $stateParams.id : 0;
        this.state = $state;
        this.articleApiService = articleApiService;
        this.id = "";
        this.story = "";
        this.author = "";
        this.title = "";
        this.name = 'Entryblog';
        this.correctUser = false;
    }

    $onInit() {
        this.articleApiService.getArticle(this.articleId).then((article) => {
            this.id = article.id;
            this.title = article.title;
            this.story = article.story;
            this.author = article.authors[0].name;
        });
        this.articleApiService.isUsersBlog(this.articleId).then((res) => {
            this.correctUser = res;
        })
    }

    removeStory() {
        this.articleApiService.removeArticle(this.articleId)
            .then(function () {
                window.location.reload()
            })
            .catch(function (e) {
                console.log(e);
            });

        this.state.go("home");
    }

    goto(page, id) {
        this.state.go(page, {id: id});
    }
}
export default ArticleController;

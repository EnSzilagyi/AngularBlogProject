class CreateArticleController {
    constructor(articleApiService, $scope, $state) {
        'ngInject';
        this.state = $state;
        this.scope = $scope;
        this.articleApiService = articleApiService;
        this.name = 'createBlog';
        this.addNewArticle = {
            title: this.scope.title,
            story: this.scope.story,
            tags: this.scope.tags,
        };

    }

    onSubmit() {
        let id = this.articleApiService.addArticle(this.addNewArticle)
            .then((id) => {
                this.goto('article', id.id);
            })
            .catch(function (error) {
                console.error(error);
            });
        console.log(id);
    }

    goto(page, id) {
        this.state.go(page, {id: id});
    }

}

export default CreateArticleController;

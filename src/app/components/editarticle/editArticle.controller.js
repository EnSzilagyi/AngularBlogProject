
class editArticleController {
    constructor($scope, articleApiService, $stateParams, $state) {
        'ngInject';

        this.blogEntryId = $stateParams.id ? $stateParams.id : 0;
        this.state = $state;
        this.articleApiService = articleApiService;
        this.editBlogEntry = {};
        this.name = 'editBlog';

    }

    $onInit() {
        this.articleApiService.getArticle(this.blogEntryId).then((editBlogEntry) => {
            this.editBlogEntry = editBlogEntry;
        });
    }

    applyEdit() {
        this.articleApiService.addArticle(this.editBlogEntry).then(this.goto("article", this.editBlogEntry.id),function(){window.location.reload()})
            .catch(function (e) {
                console.log(e);
            });

    }
    cancelEdit(){
        this.goto('article',this.editBlogEntry.id)
    }

    goto(page, id) {
        this.state.go(page, {id: id});
    }
}

export default editArticleController;

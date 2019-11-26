class   editBlogController {
    constructor($scope,studentApiService,$stateParams,$state) {
        'ngInject';


        this.blogEntryId = $stateParams.id ? $stateParams.id : 0;
        this.state = $state;
        this.studentApiService = studentApiService;
        this.editBlogEntry = {};
        this.name = 'editBlog';
        //console.log(this.blogEntryId)
    }


    $onInit() {
        this.studentApiService.getBlog(this.blogEntryId).then((editBlogEntry) => {
            this.editBlogEntry=editBlogEntry;
           // console.log(editBlogEntry);
            //console.log(this.editBlogEntry);
        });
    }


    applyEdit(){
        //console.log(this.editBlogEntry);
        this.studentApiService.updateBlog(this.editBlogEntry).then(this.goto("blog", this.editBlogEntry.id))

            .catch(function (e) {
                console.log(e);
            });

    }
    goto(page, id) {
        this.state.go(page, {id: id});
    }


}

export default editBlogController;

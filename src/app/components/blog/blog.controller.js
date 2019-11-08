class   BlogController {
    constructor($scope,studentApiService,$stateParams,$state) {
        'ngInject';


        this.blogEntryId = $stateParams.id ? $stateParams.id : 0;
        this.state = $state;
        this.studentApiService = studentApiService;
        this.blog = {};
        this.name = 'Entryblog';
        console.log(this.blogEntryId);
    }


    $onInit() {
        this.studentApiService.getBlog(this.blogEntryId).then((blog) => {
            this.blog= blog;
        });
    }

    removeStory(){
       // console.log("here");
       this.studentApiService.removeBlog(this.blogEntryId)
           .then(function () {

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

export default BlogController;

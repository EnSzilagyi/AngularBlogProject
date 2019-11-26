class   BlogController {
    constructor($scope,studentApiService,$stateParams,$state) {
        'ngInject';


        this.blogEntryId = $stateParams.id ? $stateParams.id : 0;
        this.state = $state;
        this.studentApiService = studentApiService;
        this.blog = {};
        this.name = 'Entryblog';
       // console.log(this.blogEntryId);
        this.correctUser = false;
    }


    $onInit() {
        this.studentApiService.getBlog(this.blogEntryId).then((blog) => {
            this.blog= blog;
        });
        this.studentApiService.isUsersBlog(this.blogEntryId).then((res) =>{
            this.correctUser = res;
        })
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

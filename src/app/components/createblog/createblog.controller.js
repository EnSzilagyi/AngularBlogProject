class CreateBlogController {
    constructor(studentApiService, $scope,$state) {
        'ngInject';
        this.state = $state;
        this.scope = $scope;
        this.studentApiService = studentApiService;
        this.name = 'createBlog';
        this.addNewBlog = {
            id: this .scope.id,
            title: this.scope.title,
            story: this.scope.story,
           // writer: this.scope.writer
        };

    }
    onSubmit() {
        //console.log(this.addNewBlog);
        // debugger;
       let id = this.studentApiService.addBlog(this.addNewBlog)
            .then((id) =>{
                //debugger;
                this.state.go("home");
            })
            .catch(function (error) {
                  console.error(error);
            });
       console.log(id);
        //console.log(this.addNewBlog);
    }

    goto(page, id) {
        this.state.go(page, {id: id});
    }

}

export default CreateBlogController;

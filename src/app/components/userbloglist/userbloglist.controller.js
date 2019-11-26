class userBlogListController {
    constructor(studentApiService,$state) {
        'ngInject';
        this.$state= $state;
        this.studentApiService = studentApiService;
        this.blogs = [];
        this.name = 'bloglist';
    }

    $onInit() {
        this.studentApiService.getUsersBlogs().then((blogs) => {
            // console.log(students);
            angular.copy(blogs, this.blogs);

        });
    }
    goto(page, id) {
        this.$state.go(page, {id: id});
    }
}

export default userBlogListController;

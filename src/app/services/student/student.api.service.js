const StudentApiService = (Restangular) => {
    'ngInject';

    const logEntryRestApi = Restangular.all('blog');
   // Restangular.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
    const getAllBlogs = () => {
        return logEntryRestApi.one('/all').getList();
        //return  Restangular.one('student/:id', id).get({id:1});
        //return Restangular.one("student","1").getList();
    };
    const getBlog = (id) => {
       // return logEntryRestApi.one(id).get();
         return Restangular.one("blog",id).get();
    };
    const addBlog = (blog) => {
        debugger;
         return logEntryRestApi.post(blog, (error,id) =>{
             debugger;
         });
    };
    const removeBlog = (id) => {
       return logEntryRestApi.one(id).remove();
    };
    const updateBlog = function(blogEntry) {
        let remoteItem = Restangular.copy(blogEntry);
        return remoteItem.save();
    };

    return {
        name: 'studentService',
        getAllBlogs,
        getBlog,
        addBlog,
        removeBlog,
        updateBlog
    }
};



export default StudentApiService;

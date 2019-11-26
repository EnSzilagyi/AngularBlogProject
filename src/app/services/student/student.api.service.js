const StudentApiService = (Restangular) => {
    'ngInject';

    const logEntryRestApi = Restangular.all('blog');
    //logEntryRestApi.setDefaultHeaders({"Bearer" : Headers.Bearer});
   // Restangular.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
    const getAllBlogs = () => {
        return logEntryRestApi.all('/all').getList();
    };
    const getUsersBlogs= () => {
      return logEntryRestApi.all("/usersblogs").getList();
    };
    const getBlog = (id) => {
       // return logEntryRestApi.one(id).get();
        //console.log(Restangular.one("blog",id).get());
         return Restangular.one("blog",id).get();
    };
    const addBlog = (blog) => {
        //debugger;
         return logEntryRestApi.all("addblog").post(blog, (error,id) =>{

         });
    };
    const removeBlog = (id) => {
       return logEntryRestApi.one(id).remove();
    };
    const updateBlog = function(blogEntry) {
        let remoteItem = Restangular.copy(blogEntry);
        return remoteItem.save();
    };

    //const intercept = Restangular.setDefaultHeaders({ authentication: 'bearer ' + localStorage.getItem('token') });
    const userLogin = (username, password) => {
         return Restangular.one("user").all('login').post({username: username, password: password},(error,res) =>{

         });
    };

    const userSignUp = (username,password) =>{
        return Restangular.one("user").all('signup').post({username: username, password: password},(error,res) =>{

        });
    };

    const isUsersBlog = (id) => {
      return logEntryRestApi.one("isusersblog",id).get();
    };


    return {
        name: 'studentService',
        getAllBlogs,
        getBlog,
        addBlog,
        removeBlog,
        updateBlog,
        userLogin,
        userSignUp,
        getUsersBlogs,
        isUsersBlog
    }
};



export default StudentApiService;

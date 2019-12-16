const ArticleApiService = (Restangular) => {
    'ngInject';

    const articleRestApi = Restangular.one('article');

    const getAllArticles = () => {
        return articleRestApi.one("all").get();
    };

    const getUsersArticles = () => {
        return articleRestApi.one("author").get();
    };

    const getArticle = (id) => {
        return articleRestApi.one(id).get();
    };

    const addArticle = (blog) => {
        return articleRestApi.all("create").post(blog, (error, id) => {
        });
    };

    const removeArticle = (id) => {
        return articleRestApi.one("remove", id).remove();
    };

    const userLogin = (username, password) => {
        return Restangular.all('login').post({username: username, password: password}, (error, res) => {
        });
    };

    const userSignUp = (username, password) => {
        return Restangular.all('signup').post({username: username, password: password}, (error, res) => {
        });
    };

    const isUsersBlog = (id) => {
        return articleRestApi.one("check", id).get();
    };

    return {
        name: 'articleService',
        getAllArticles,
        getArticle,
        addArticle,
        removeArticle,
        userLogin,
        userSignUp,
        getUsersArticles,
        isUsersBlog
    }
};


export default ArticleApiService;

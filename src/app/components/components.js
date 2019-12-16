import angular from 'angular';
import Home from './home/home.module';
import About from './about/about.module';
import NavBar from './navbar/navbar.module';
import CreateBlog from './createarticle/createArticle.module'
import Blog from './article/article.module'
import BlogList from './articlelist/articleList.module'
import EditBlog from './editarticle/editArticle.module'
import loginModule from "./login/login.module";
import signUpModule from "./signup/signup.module";
import userArticleListModule from "./userarticlelist/userArticleList.module";

const componentsModule = angular.module('components', [
    Home,
    About,
    NavBar,
    CreateBlog,
    Blog,
    BlogList,
    EditBlog,
    loginModule,
    signUpModule,
    userArticleListModule
]).name;

export default componentsModule;

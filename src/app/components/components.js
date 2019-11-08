import angular from 'angular';
import Home from './home/home.module';
import About from './about/about.module';
import NavBar from './navbar/navbar.module';
import CreateBlog from './createblog/createblog.module'
import Blog from './blog/blog.module'
import BlogList from './bloglist/bloglist.module'
import EditBlog from './editblog/editblog.module'

const componentsModule = angular.module('components', [
    Home,
    About,
    NavBar,
    CreateBlog,
    Blog,
    BlogList,
    EditBlog
]).name;

export default componentsModule;

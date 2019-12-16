import angular from "angular";
import ArticleApiService from "./article/article.api.module";

const servicesModule = angular.module('services', [
    ArticleApiService,
]).name;

export default servicesModule;

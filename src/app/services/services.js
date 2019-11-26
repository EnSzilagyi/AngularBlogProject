import angular from "angular";
import StudentApiService from "./student/student.api.module";
import jwtInterceptorService from "./interceptor/jwt.interceptor.module";

const servicesModule = angular.module('services', [
    StudentApiService,
    jwtInterceptorService
]).name;

export default servicesModule;

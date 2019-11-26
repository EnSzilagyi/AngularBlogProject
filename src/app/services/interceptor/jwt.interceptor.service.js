// const JwtInterceptorService = (Restangular) => {
//     'ngInject';
//
//     const intercept = Restangular.setDefaultHeaders({ authentication: 'bearer ' + token });
//     const loginService = (username,password) => {
//         intercept.all("user").post(username,password);
//     };
//
//     return{
//         loginService
//     }
// };
// export default JwtInterceptorService

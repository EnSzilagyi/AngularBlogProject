

class  loginController {
    constructor($scope,$stateParams,$state,$http,studentApiService) {
        'ngInject';
        this.studentApiService = studentApiService;
        $scope.pattern= /^[a-zA-Z]\w{3,14}$/;
        this.scope = $scope;
        this.state = $state;
        this.name = 'login';
        this.username = this.scope.username;
        this.password = this.scope.password;
        this.repeatPassword = this.scope.repeatPassword;
    }


   signUp(){
        // this.studentApiService.loginService(this.username,this.password);
       console.log(this.username,this.repeatPassword,this.password);
       if(this.password === this.repeatPassword) {
           this.studentApiService.userSignUp(this.username, this.password)
               .then(function (res) {
                   //localStorage.setItem('token', JSON.stringify(res.token));
               })
               .catch(function (error) {
                   console.log(error);
               })
        //   console.log(this.username,this.repeatPassword,this.password);
       }
       else{
           window.alert("Password doesn't match");
       }
    }

    goto(page, id) {
        this.state.go(page, {id: id});
    }


}

export default loginController;

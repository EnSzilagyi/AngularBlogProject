

class  loginController {
    constructor($scope,$stateParams,$state,$http,studentApiService) {
        'ngInject';
        this.studentApiService = studentApiService;
        this.scope = $scope;
        this.state = $state;
        this.name = 'login';
        this.username = this.scope.username;
        this.password = this.scope.password;

    }


    login(){
        // this.studentApiService.loginService(this.username,this.password);
        this.studentApiService.userLogin(this.username,this.password)
            .then(function (res) {
               // const expiresAt = moment().add(res.expiresIn,'second');
                localStorage.setItem('token',res.token);
               // console.log(res.token);
                //localStorage.setItem("expires_at", JSON.stringify(expires));
                window.alert('logged in')
            })
            .catch(function (error) {
                console.log(error);
            });
        //this.goto('home');
    }

    goto(page, id) {
        this.state.go(page, {id: id});
    }


}

export default loginController;

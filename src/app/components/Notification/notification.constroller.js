class  notificationController {
    constructor($scope,$stateParams,$state,$http,articleApiService) {
        'ngInject';
        this.articleApiService = articleApiService;
        $scope.pattern= /^[a-zA-Z]\w{3,14}$/;
        this.scope = $scope;
        this.state = $state;
        this.name = 'login';
        this.username = this.scope.username;
        this.password = this.scope.password;
        this.repeatPassword = this.scope.repeatPassword;
    }


    signUp(){
        if(this.password === this.repeatPassword) {
            this.articleApiService.userSignUp(this.username, this.password)
                .then(this.state.go('home')

                )
                .catch(function (error) {
                    console.log(error);
                })
        }
        else{
            window.alert("Password doesn't match");
        }
    }

    goto(page, id) {
        this.state.go(page, {id: id});
    }


}

export default notificationController;

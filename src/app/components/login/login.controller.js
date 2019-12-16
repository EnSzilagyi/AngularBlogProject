class loginController {
    constructor($scope, $state, articleApiService) {
        'ngInject';
        this.articleApiService = articleApiService;
        this.scope = $scope;
        this.state = $state;
        this.name = 'login';
        this.username = this.scope.username;
        this.password = this.scope.password;
    }

    login() {
        this.articleApiService.userLogin(this.username, this.password)
            .then(function (res) {
                localStorage.setItem('token', res.token);
                window.alert('logged in');
                window.location.reload()
            },this.state.go('home'))
            .catch(function (error) {
                console.log(error);
            });

    }

    goto(page, id) {
        this.state.go(page, {id: id});
    }


}

export default loginController;

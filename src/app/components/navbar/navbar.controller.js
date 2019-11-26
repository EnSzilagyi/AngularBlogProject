'use strict';

class NavbarController {
    constructor($state) {
        'ngInject';

        this.$state = $state;
        this.name = 'navbar';
        this.currentNavItem = 'home';
        this.disableInkBar = false;
    }

    goto(page) {
        this.$state.go(page);
    }
    logout(){
        localStorage.removeItem('token');
        this.goto(this.currentNavItem);
    }

    isLoggedIn(){
        return !!localStorage.getItem('token');
    }
}

export default NavbarController;

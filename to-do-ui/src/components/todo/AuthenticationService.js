class AuthenticationService {
    registerSuccessfullLogin(username, password) {
        //console.log('auth user');
        sessionStorage.setItem('authenticationedUser', username);
    }
    logout() {
        //console.log('logout user');
        sessionStorage.removeItem('authenticationedUser');

    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticationedUser');
        if (user === null) return false;

        return true;
    }

}

export default new AuthenticationService()
class Auth {
    constructor() {
        this.authenticaed = false;
    }
    login(cb) {
        this.authenticaed = true;
        cb();
    }
    logout(cb) {
        this.authenticaed = false;
    }

    isAuthenticated() {
        return this.authenticaed;
    }
}

export default new Auth();

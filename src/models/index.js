import AV, { Query, User } from 'leancloud-storage';
import resolve from 'resolve';

AV.init({
    appId: "5x1KiJe7UK9TBYI63km5vujt-gzGzoHsz",
    appKey: "sL8MCPtwV9jZtLuabtt3AdSo",
    serverURL: "https://5x1kije7.lc-cn-n1-shared.com"
});
console.log('starting......');

const Auth = {
    register(username, password) {
        let user = new User();
        user.setUsername(username);
        user.setPassword(password);
        return new Promise((resolve, reject) => {
            user.signUp()
                .then(
                    loginedUser => resolve(loginedUser),
                    error => reject(error));
        });
    },
    login(username, password) {
        return new Promise((resolve, reject) => {
            User.login(username, password).then(loginedUser => resolve(loginedUser), error => reject(error));
        }
        );
    },
    logout() {
        User.logOut();
    },
    getCurrentUser() {
        return User.current();
    }
};



export default {};
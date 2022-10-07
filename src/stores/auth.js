import { observable, action } from 'mobx';
import { Auth } from '../models';
//维护登录信息，用户名和密码
class AuthStore {
  //状态
  @observable values = {
    username: '',
    password: ''
  };
  //行为
  @action setUsername(username) {
    this.values.username = username;
  }
  @action setPassword(password) {
    this.values.password = password;
  }
  @action register() {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password).then(user => {
        console.log('注册成功');
        resolve(user);
      }).catch(err => {
        console.log('注册失败');
        reject(err);
      });
    });
  }

  @action login() {
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password).then(user => {
        console.log('登录成功');
        resolve(user);
      }).catch(err => {
        console.log('登陆失败');
        reject(err);
      });
    });
  }


  @action logout() {
    Auth.logout();

  }
}

export { AuthStore };

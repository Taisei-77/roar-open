import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase/index";

class Auth extends React.Component {
  state = {
    signedIn: false, //ログインしてるか
  };

  _isMounted = false; //unmountを判断（エラー防止用）

  componentDidMount = () => {
    //mountされてる
    this._isMounted = true;

    //ログインしてるかどうかチェック
    auth.onAuthStateChanged((user) => {
      if (user) {
        //してる
        if (this._isMounted) {
          this.setState({
            signedIn: true,
          });
        }
      } else {
        //してない
        if (this._isMounted) {
          this.setState({
            signedIn: false,
          });
        }
      }
    });
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render() {
    //チェックが終わりかつ
    if (this.state.signedIn) {
      //サインインしてるとき（そのまま表示）
      return this.props.children;
    } else {
      //してないとき（ログイン画面にリダイレクト）
      return <Redirect to="/" />;
    }
  }
}

export default Auth;

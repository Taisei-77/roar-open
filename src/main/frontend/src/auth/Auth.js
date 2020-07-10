import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase/index";
class Auth extends React.Component {
  state = {
    signinCheck: false, //ログインチェックが完了してるか
    signedIn: false, //ログインしてるか
  };

  componentDidMount = () => {
    //ログインしてるかどうかチェック
    auth.onAuthStateChanged((user) => {
      if (user) {
        //してる
        this.setState({
          signinCheck: true,
          signedIn: true,
        });
      } else {
        //してない
        this.setState({
          signinCheck: true,
          signedIn: false,
        });
      }
    });
  };

  render() {
    //チェック中(ローディング)
    if (!this.state.signinCheck) {
      return <></>;
    }
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

import React from "react";
import "../style/Top.css";

class Top extends React.Component {
  render() {
    return (
      <div>
        <main>
          {/* <!-- ログインと新規会員登録のブロック--> */}
          <div id="signUpContents" className="text-right">
            {/* <!-- ログイン Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#loginModal"
            >
              ログイン
            </button>

            {/* <!-- ログイン Modal --> */}
            <div
              className="modal fade"
              id="loginModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="registerModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content p-3">
                  <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">
                      ログイン
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group mb-4">
                        <label htmlFor="email">メールアドレス</label>
                        <input
                          type="email"
                          className="form-control"
                          id="loginInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="メールアドレス"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password">
                          パスワード
                          <small className="text-muted">何文字以内</small>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="loginInputPassword"
                          placeholder="パスワード"
                        />
                      </div>
                      <button type="submit" className="btn btn-dark mb-4">
                        ログイン
                      </button>
                    </form>
                    <div className="modal-footer">
                      <p>
                        アカウントをお持ちでない場合、
                        <a href="#" className="text-decoration-none">
                          新規会員登録
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- 新規会員登録 Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#registerModal"
            >
              新規会員登録
            </button>

            {/* <!-- 新規会員登録 Modal --> */}
            <div
              className="modal fade"
              id="registerModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="registerModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content p-3">
                  <div className="modal-header">
                    <h5 className="modal-title" id="registerModalLabel">
                      新規会員登録
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group mb-4">
                        <input
                          type="password"
                          className="form-control"
                          id="userName"
                          placeholder="ユーザーID"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="email"
                          className="form-control"
                          id="registerInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="メールアドレス"
                        />
                        <small
                          id="registerHelp"
                          className="form-text text-muted"
                        >
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="password"
                          className="form-control"
                          id="registerInputPassword"
                          placeholder="パスワード"
                        />
                      </div>
                      <button type="submit" className="btn btn-dark mb-4">
                        登録
                      </button>
                    </form>
                    <div className="modal-footer">
                      <p>
                        すでにアカウントをお持ちの場合、
                        <a href="#" className="text-decoration-none">
                          ログイン
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 真ん中のメッセージブロック --> */}
          <div id="labelContents" className="text-center">
            <h1 id="labelTitle">roar</h1>
            <div id="labelExplanation">
              <p>スポーツ専門のチャットツールでチームの輪を広げよう</p>
              <p>簡単にチームのメンバーを募れる</p>
              <p>スポーツコミュニティユーザー数世界１位</p>
              <p>さあ、今すぐroarで新しい体験を...</p>
            </div>
            {/* <!--  ページ下部の登録ボタンのブロック--> */}
          </div>
          <div id="startUpContent" className="text-center">
            <button id="startUp">今すぐはじめる</button>
          </div>
        </main>
      </div>
    );
  }
}

export default Top;

// 追加する要素を作成(チームを作る)
const teamCreate = document.createElement("li"); // li要素の作成
const newContent = document.createTextNode("チームを作る"); //テキストノード
teamCreate.appendChild(newContent); //li要素にテキストノードを追加
teamCreate.setAttribute("id", "teamCreate"); //li要素にidを追加

// 追加する要素を作成（チームを探す）
const teamSearch = document.createElement("li"); // li要素の作成
const newContent2 = document.createTextNode("チームを探す"); //テキストノード
teamSearch.appendChild(newContent2); //li要素にテキストノードを追加
teamSearch.setAttribute("id", "teamSearch"); //li要素にidを追加

// 基準となる要素の取得
const teams = document.getElementById("teams");

// gnav要素の取得
const gnav = document.getElementById("gnav");

// チームを作ると探すが表示されているかどうかを判別する変数。
let clickCheck = false; //true=クリックされている false＝クリックされていない
// teams要素に対して、マウスオーバーイベントを設定
teams.addEventListener("click", function () {
  if (clickCheck == false) {
    // チームを作る、探すが表示されてなかった場合の処理
    gnav.insertBefore(teamCreate, teams.nextSibling);
    gnav.insertBefore(teamSearch, teamCreate.nextSibling);
    clickCheck = true;
  } else if (clickCheck == true) {
    //   チームを作る、探すが表示されている場合の処理
    teamCreate.remove();
    teamSearch.remove();
    clickCheck = false;
  }
});

import React from 'react';

//変更予定のないものは定数にする
const items = [
    { num: 0, link: "/", itemname: "トップ"},
    { num: 1, link: "/question", itemname: "Q&A"},
    { num: 2, link: "/ideology", itemname: "Redux"},
    { num: 3, link: "/company", itemname: "未実装"},
    { num: 4, link: "/infomation", itemname: "未実装"},
  ]
const sitename = "kajitasoのポートフォリオサイト";

type Item = {
    num: number
    link: string
    itemname: string
}

const NavBar: React.FC = () => {
    let user: HTMLInputElement = (document.querySelector('#user-info') as HTMLInputElement);
    const userName: string = user.name;
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
            <a href="/" className="navbae-brand nav-link">{ sitename }</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#responsiveMenu" aria-controls="responsiveMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="responsiveMenu">
                <ul className="navbar-nav">
                    {
                        items.map( (item:Item ) => (
                            <li key={item.num} className="nav-item ml-3"><a className="nav-link" href={item.link}>{ item.itemname }</a></li>
                        ))
                    }
                    { userName === "guest" &&
                        <li key={items.length + 1} className="nav-item ml-3"><a  className="nav-link" href="/login">ログインする</a></li>
                    }
                    { userName !== "guest" &&
                        <li key={items.length + 1} className="nav-item ml-3"><a  className="nav-link" href="/logout">ログアウトする</a></li>
                    }
                </ul>
            </div>
        </nav>
    )
  }

export default NavBar

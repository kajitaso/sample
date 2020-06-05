import React from 'react';

//変更予定のないものは定数にする
const items = [
    { num: 1, link: "/", itemname: "ニュース"},
  ]
const sitename = "フロント練習部屋";

type Item = {
    num: number
    link: string
    itemname: string
}

const NavBar: React.FC = () => {
    let user: HTMLInputElement = (document.querySelector('#user-info') as HTMLInputElement);
    const userName: string = user.name;
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-header">
                <a href="/" className="navbae-brand nav-link">{ sitename }</a>
            </div>
            <ul className="navbar-nav flex-row">
                {
                    items.map( (item:Item ) => (
                        <li key={item.num} className="nav-item ml-3"><a href={item.link}>{ item.itemname }</a></li>
                    ))
                }
                { userName === "guest" &&
                    <li key={items.length + 1} className="nav-item ml-3"><a href="/login">ログインする</a></li>
                }
                { userName !== "guest" &&
                    <li key={items.length + 1} className="nav-item ml-3"><a href="/logout">ログアウトする</a></li>
                }
            </ul>

        </nav>
    )
  }

export default NavBar

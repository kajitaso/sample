import React, { Component } from 'react'
import { IPageLinkProps } from '../commons/interfaces'

export default class PageLink extends Component<IPageLinkProps, {}> {

    render() {
        //アクティブなら
        if (this.props.active) {
            return <li style={{padding: '0px 10px', width: '70px', backgroundColor: '#f5e6b9', textAlign: 'center', border: '1px solid #0d46e8'}}>{this.props.page}</li>
        }
        //そうでないならリンク付きで表示
        return (
            <li style={{padding: '0px 10px', width: '70px', backgroundColor: '#cbf9f5', textAlign: 'center', border: '1px solid #0d46e8', cursor: 'pointer', color: 'blue'}}
                onClick={e => {
                e.preventDefault()
                this.props.onClick()
                }}
            >
                {this.props.page}
            </li>
        );
    }
}
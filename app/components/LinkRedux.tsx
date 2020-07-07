import React, { Component } from 'react'
import { ILinkProps } from '../commons/interfaces'

export default class Link extends Component<ILinkProps, {}> {

    render() {
        //アクティブなら
        if (this.props.active) {
            return <span>{this.props.children}</span>
        }
        //そうでないならリンク付きで表示
        return (
            <a
                href=""
                onClick={e => {
                    e.preventDefault()
                    this.props.onClick()
                }}
            >
                {this.props.children}
            </a>
        );
    }
}
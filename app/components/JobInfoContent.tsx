import React, { Component } from 'react'
import CSS from 'csstype';
import { JobInfoStatus } from '../actions'

class jobInfoContent extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }
    private containerCSS: CSS.Properties = {backgroundColor: "rgb(191 232 236)", borderRadius: "0 1.5rem 1.5rem 1.5rem"}
    public render() {

        return (
            <div className="container" style={this.containerCSS}>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
                <p>ふああああああああああああああああああああ</p>
            </div>
        );
    }
}

export default jobInfoContent
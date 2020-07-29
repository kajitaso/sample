import React, { Component } from 'react'
import CSS from 'csstype';
import { JobInfoStatus } from '../actions'
import JobInfoContent from './JobInfoContent'

class JobInfoContainer extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }
    private containerCSS: CSS.Properties = {backgroundColor: "rgb(221, 221, 221)"}
    public render() {
        const tagActive: CSS.Properties = {backgroundColor: "rgb(122, 213, 222)", color:"white", padding: "0.5rem", cursor: "default", userSelect: "none", borderRadius: "0.5rem 0.5rem 0 0"}
        const tagDisactive: CSS.Properties = {backgroundColor: "white", color:"rgb(122, 213, 222)", padding: "0.5rem", cursor: "pointer", userSelect: "none", borderRadius: "0.5rem 0.5rem 0 0"}

        return (
            <div className="container mb-3 pb-3" style={this.containerCSS}>
                <h2 className="mt-3 pt-3 text-center">職務経歴</h2>
                <p className="text-right">エンジニア歴: {this.props.year}年 　{this.props.month}ヶ月</p>
                <ul style={{ paddingLeft: '0', marginBottom: '0', listStyle: 'none', display: 'flex', justifyContent: 'left', alignItems: 'center', fontSize: '1rem'}}>
                    <li style={this.props.status === "MATTER" ? tagActive : tagDisactive }
                        className="mr-1"
                        onClick={e => {
                            e.preventDefault()
                            this.props.setJobStatus(JobInfoStatus.MATTER)
                        }}
                    >
                        案件概要
                    </li>
                    <li style={this.props.status === "SKILLS" ? tagActive : tagDisactive }
                        onClick={e => {
                            e.preventDefault()
                            this.props.setJobStatus(JobInfoStatus.SKILLS)
                        }}
                    >
                        業務概要
                    </li>
                </ul>
                <JobInfoContent status={this.props.status} jobInfo={this.props.jobInfo} page={this.props.page}/>
            </div>
        );
    }
}

export default JobInfoContainer
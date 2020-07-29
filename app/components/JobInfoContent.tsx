import React, { Component } from 'react'
import CSS from 'csstype';
import { JobInfoStatus } from '../actions'

class jobInfoContent extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }
    private containerCSS: CSS.Properties = { backgroundColor: "rgb(191 232 236)", borderRadius: "0 1.5rem 1.5rem 1.5rem" }
    public render() {

        return (
            <div className="container" style={this.containerCSS}>
                {this.props.status === "MATTER" &&
                    <div>
                        <h3 className="pt-3 pb-3 text-center">{this.props.jobInfo[this.props.page - 1].jobName}</h3>
                        <table className="m-auto">
                            <tbody>
                                <tr>
                                    <td className="font-weight-bold p-3">period(month)</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].period}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold p-3">frontend</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].frontEnd}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold p-3">backend</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].backEnd}</td>
                                </tr>

                                <tr>
                                    <td className="font-weight-bold p-3">database</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].database}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold p-3">chat tool</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].chatTool}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold p-3">task tool</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].taskTool}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold p-3">editor</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].editor}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold p-3">OS</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].os}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold p-3">source</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].sorce}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold p-3">development</td>
                                    <td>{this.props.jobInfo[this.props.page - 1].development}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
                {this.props.status === "SKILLS" &&
                    <div className="pt-3 pb-3">
                        <h3 style={{ color: "blue", backgroundColor: "rgb(255,255,255,0.5)" }} className="pt-3 pb-3 text-center">{this.props.jobInfo[this.props.page - 1].jobName}</h3>
                        <div style={{ backgroundColor: "rgb(255,255,255,0.5)" }}>
                            <h4 className="pt-3 pb-3 text-center">ー業務内容詳細ー</h4>
                            <p className="pt-3 pb-3 pl-3">{this.props.jobInfo[this.props.page - 1].detail1}</p>
                            <p className="pt-3 pb-3 pl-3">{this.props.jobInfo[this.props.page - 1].detail2}</p>
                            <p className="pt-3 pb-3 pl-3">{this.props.jobInfo[this.props.page - 1].detail3}</p>
                        </div>
                        <div style={{ backgroundColor: "rgb(255,255,255,0.5)" }}>
                            <h4 className="pt-5 pb-3 text-center">ー習得技術詳細ー</h4>
                            <p className="pt-3 pb-3 pl-3">{this.props.jobInfo[this.props.page - 1].skill1}</p>
                            <p className="pt-3 pb-3 pl-3">{this.props.jobInfo[this.props.page - 1].skill2}</p>
                            <p className="pt-3 pb-3 pl-3">{this.props.jobInfo[this.props.page - 1].skill3}</p>
                        </div>

                    </div>
                }

            </div>
        );
    }
}

export default jobInfoContent
import React, { Component } from 'react'
import PageLinks from '../containers/pageLinks'
import CSS from 'csstype';

class pageContainer extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }
    private lastPage = this.props.jobInfo.length;

    private styleActive: CSS.Properties = {padding: '0px 10px', width: '70px', backgroundColor: '#f5e6b9', textAlign: 'center', border: '1px solid #0d46e8', lineHeight: "initial"}
    private styleDisActive: CSS.Properties= {padding: '0px 10px', width: '70px', backgroundColor: '#cbf9f5', textAlign: 'center', border: '1px solid #0d46e8', cursor: 'pointer', color: 'blue', lineHeight: "initial"}

    private firstAllowStyle = this.props.pages === 1 ? this.styleDisActive : this.styleActive
    //現在のページから前後2件を表示
    public render() {
        return (
            <div className="container">
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', padding: "0"}}>
                    <li style={this.firstAllowStyle}
                        onClick={e => {
                        e.preventDefault()
                        this.props.setFirstPage(1)
                    }}>＜</li>
                    { 
                        this.props.jobInfo.map((job, index) => (
                            job.id >= this.props.startPage &&
                            job.id <= this.props.endPage &&
                            <PageLinks key={index} page={job.id} ></PageLinks>
                        ))
                    }
                    <li style={this.firstAllowStyle}
                        onClick={e => {
                        e.preventDefault()
                        this.props.setLastPage(this.lastPage)
                    }}>＞</li>
                </ul>
            </div>
        );
    }
}

export default pageContainer
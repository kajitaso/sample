import React, { Component } from 'react'
import PageLinks from '../containers/pageLinks'

class pageContainer extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }
    //現在のページから前後2件を表示
    public render() {
        return (
            <div className="container">
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem'}}>
                { 
                    this.props.jobInfo.map((job, index) => (
                        job.id >= this.props.startPage &&
                        job.id <= this.props.endPage &&
                        <PageLinks key={index} page={job.id} ></PageLinks>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default pageContainer
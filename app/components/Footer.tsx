import React from 'react';

type Props = {
    text: string
}

const Footer: React.FC<Props> = ({ text }) => {

    return (
    <footer className="footer" style={{ backgroundColor: "#ced4da"}}>
        <div className="container">
            <p className="text-muted text-right pt-2 pb-5 mb-0">
                { text }
            </p>
        </div>
    </footer>
    )
  }

export default Footer
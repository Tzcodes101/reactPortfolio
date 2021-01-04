import React from "react";

function Wrapper(props) {
    return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
                {props.children}
            </div>
        </div>
    </div>
    )
}

export default Wrapper;
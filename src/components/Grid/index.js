import React from "react";

export function Wrapper(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export function Row(props) {
    return (
        <div className="row">{props.children}</div>
    );
}

export function Col(props) {
    return (
        <div className="col">
            {props.children}  
        </div>
    );
}

export function Section(props) {
    return (
        <section className="card-body">{props.children}</section>
    );
}
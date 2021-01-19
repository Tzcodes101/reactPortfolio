import React from "react";
import "../pages.css";
import "./style.css";


function Contact () {
    return (
        
    // <!--Activate grid system-->
    <div className="container">
        <div className="row justify-content-md-center">
            {/* <!--Set responsive layout--> */}
            <div className="col-lg-5 col-md-9 col-xs-12">

                {/* <!--Card edited from bootstrap--> */}
                <section className="card card-contact">

                    {/* <!--Card heading--> */}
                    <h4 className="card-header">Contact</h4>

                    {/* <!--Card-body--> */}
                    <form className="card-body">

                        {/* <!--Input name--> */}
                        <div className="form-row">
                            <div className="col">
                                <label>Name</label>
                                <input type="text" className="form-control"></input>
                            </div>
                        </div> <br></br>

                        {/* <!--Input email--> */}
                        <div className="form-group">
                            <label for="exampleFormControlInput1">
                                Email address
                            </label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                            </input>
                        </div>

                        {/* <!--Input message--> */}
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                                Message
                            </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">
                            </textarea>
                        </div>

                        {/* <!--Submit button--> */}
                        <button type="button" className="btn btn-dark">
                            Submit
                        </button>

                    </form>
                </section>

            </div>
        </div>
    </div>
    )
}

export default Contact;
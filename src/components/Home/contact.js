import React from "react"
import Title from "../Globals/Title";

const Contact = () => {
return (
    <section className="contact py-5">
    <Title title ="contact us"/>
    <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form action="https;//formspree.io/simonmaher8307@gmail.com" method="POST">
                <div className="form-group">
                <label htmlFor="name">Name

                </label>
                <input type="text" className="form-control" name="name" id="name" placeholder="Simon Maher"/>

                </div>
                <div className="form-group">
                <label htmlFor="email">Email

                </label>
                <input type="text" className="form-control" name="email" id="email" placeholder="Simon@gmail.com"/>

                </div>

                <div className=" form-group">
                    <label htmlFor="description">Message</label>
                    <textarea name="description" id="description" className="form-control" rows="5" placeholder="Your message here.."/>
                </div>

                <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>


            </form>
        </div>
    </div>

    </section>
)
}

export default Contact
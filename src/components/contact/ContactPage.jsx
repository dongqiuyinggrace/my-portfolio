import React from 'react';
import './ContactPage.css'

const ContactPage = () => {
    return (
        <div id="contact">
            <h3 className="title">Contact me</h3>
            <form className="contact-form">
                <div className="form-group row">
                    <label className="col col-2">Name*</label>
                    <input className="col col-8 form-control" type="text" name="name" />
                </div>
                <div className="form-group row">
                    <label className="col col-2">Email*</label>
                    <input className="col col-8 form-control" type="text" name="email" />
                </div>
                <div className="form-group row">
                    <label className="col col-2">Subject</label>
                    <input className="col col-8 form-control" type="text" name="subject" />
                </div>
                <div className="form-group row">
                    <label className="col col-2">Message*</label>
                    <textarea rows={5} className="col col-8 form-control" name="message" />
                </div>
                <div className="form-group row">
                    <label className="col col-2"></label>
                    <input type="submit" value="Send" className="col col-8 submit form-control"/>
                </div>
            </form>
        </div>
    )
}

export default ContactPage

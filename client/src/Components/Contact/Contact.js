import React, { Component, Fragment } from "react";
import ContactForm from "../ContactForm/ContactForm";
import axios from "axios";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            location: "",
            project: "",
            comment: "",
            sent: false
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    clearInputs = () => {
        this.setState({
            name1: "",
            email: "",
            location: "",
            project: "",
            comment: ""
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const data = {
            name1: this.state.name1,
            email: this.state.email,
            location: this.state.location,
            project: this.state.project,
            comment: this.state.comment
        };
        await axios
            .post("/api/form", data)
            .then(
                this.setState( prevState => ({
                    sent: !prevState.sent
                }))
            )
            .then(this.clearInputs(), console.log("Message successfully sent!"))
            .catch(() => console.log("Message not sent"));
    };

    render() {
        return (
            <div className="form-wrapper">
                <ContactForm
                    handleChange={this.handleChange}
                    name1={this.state.name1}
                    email={this.state.email}
                    location={this.state.location}
                    project={this.state.project}
                    comment={this.state.comment}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default Contact;

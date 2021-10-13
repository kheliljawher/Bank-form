import React from "react";

const name=/^[A-Z]*$/;
const cin=/^[0-9]{8}$/;
const rib=/^[0-9]{14}$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class FormContainer extends React.Components {
  constructor() {
    super();
    this.state = {
      name: "",
      cin: "",
      rib:"",
      password: "",
      NameError: "",
      ribError:"",
      passwordError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validatecin = this.validatecin.bind(this);
    this.validatecp = this.validaterib.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "name",
      "cin",
      "rib",
      "password",
      
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "name") isValid = this.validateName();
    else if (name === "cin") isValid = this.validatecin();
    else if (name === "rib") isValid = this.validaterib();
    else if (name === "password") isValid = this.validatePassword();
   
    return isValid;
  }

  validateName() {
    let NameError = "";
    const value = this.state.neme;
    if (value.trim() === "") NameError = "name is required";
    else if (!name.test(value))
    NameError = "name is not valid";
    this.setState({
      NameError
    });
    return NameError === "";
  }

  validatecin() {
    let cinError = "";
    const value = this.state.cin;
    if (value.trim() === "") cinError = "Cin is required";
    else if (!cin.test(value))
    cinError = "Cin is not valid";
    this.setState({
      cinError
    });
    return cinError === "";
  }
  validatecp() {
    let cpError = "";
    const value = this.state.cp;
    if (value.trim() === "") cpError = "Cin is required";
    else if (!rib.test(value))
    ribError = "Cp is not valid";
    this.setState({
      ribError
    });
    return ribError === "";
  }



  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }



  render() {
    return (
      <div className="main" >
        <h3>Contact Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for contact, find your details below:</h3>
            <div>First Name: {this.state.name}</div>
            <div>CIN: {this.state.cin}</div>
            <div>RIB : {this.state.rib}</div>
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
          <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.NameError && (
              <div className="errorMsg">{this.state.NameError}</div>
            )}
            <input
              type="text"
              placeholder="Cin"
              name="cin"
              value={this.state.cin}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.cinError && (
              <div className="errorMsg">{this.state.cinError}</div>
            )}
            <input
              type="text"
              placeholder="Compte Banque"
              name="rib"
              value={this.state.rib}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.cpError && (
              <div className="errorMsg">{this.state.ribError}</div>
            )}
            
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}
            <button>Envoyer</button>
          </form>
          </div>
        )}
      </div>
    );
  }
}
export default FormContainer;

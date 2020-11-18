import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../auth/helper/index'
// import Base from '../core/Base'
import '../../styles.css';



function Signup() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };


    const onSubmit = (event) => {
        event.preventDefault();
        setValues({
            ...values,
            error: false
        })
        signup({ name, email, password })
            .then(data => {
                console.log("DATA", data)
                if (data.email === email) {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    })
                } else {
                    setValues({
                        ...values,
                        error: true,
                        success: false
                    })
                }
            })
            .catch(err => console.log(err))
    }

    const successMessage = () => {
        return (
            <div className="row">
                <div className="success container">
                    <div className="alert alert-success" style={{ display: success ? "" : "none" }}>
                        New Account Created Successfully. Please <Link to="/signin">LogIn</Link> Now!
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="error container">
                    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                        Check All Fields Again!
                    </div>
                </div>
            </div>
        )
    }

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="form container">
                    <form>
                        <div className="name box">
                            <label className="text-light">Name</label>
                            <input
                                className="form-control"
                                value={name}
                                onChange={handleChange("name")}
                                type="text" />
                        </div>
                        <div className="email box">
                            <label className="text-light">Email</label>
                            <input
                                className="form-control"
                                value={email}
                                onChange={handleChange("email")}
                                type="email" />
                        </div>
                        <div className="password box">
                            <label className="text-light">Password</label>
                            <input
                                className="form-control"
                                value={password}
                                onChange={handleChange("password")}
                                type="password" />
                        </div>

                        <button className="btn" onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        // <Base title="SignUp Page" description="Hey! signup for lco user">
        <div>
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </div>

        // </Base>
    )
}

export default Signup

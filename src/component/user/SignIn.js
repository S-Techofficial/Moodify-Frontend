import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuthenticated, signin } from '../auth/helper';
import '../../styles.css'; 
// import Base from '../core/Base'


function Signin() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false
    })

    const { email, password, error, success, loading, didRedirect } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({
            ...values,
            error: false,
            loading: true
        })
        signin({ email, password })
            .then(data => {
                console.log(data);
                if (data.token) {
                    // let sessionToken = data.token;
                    authenticate(data, () => {
                        console.log("TOKEN ADDED")
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                } else {
                    setValues({
                        ...values,
                        loading: false
                    })
                }
            })
            .catch(err => console.log(err))
    }

    const performRedirect = () => {
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    };

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
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

    const signInForm = () => {
        return (
            <div className="row">
                <div className="form container">
                    <form>
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
        // <Base title="SignIn Page" description="A tshirt store">
        <div>
            {loadingMessage()}
            {signInForm()}
            <p className="text-center">{JSON.stringify(values)}</p>
            {performRedirect()}
        </div>

        // </Base>
    )
}

export default Signin

import React, { useRef, useState } from "react";
import { LoginContainer, FormAnimation } from "./Form.Style";

type RotateProps = {
    animation: string;
    borderColor: string;
    background?: string;
};

const LoginForm = () => {
    const email = useRef<string | null>(null);
    const password = useRef<string | null>(null);

    const [rotate, setRotate] = useState<RotateProps>({
        animation: "",
        borderColor: "",
        background: "",
    });

    const formStyle = {
        width: 350,
        marginTop: "15vh",
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email.current && password.current) {
            setRotate({
                animation: "animate",
                borderColor: "#0d6efd",
                background: "#0d6efd",
            });
        } else {
            setRotate({
                animation: "", 
                borderColor: "red"
            });
        }
    };

    return (
        <LoginContainer className={rotate.animation}>
            <FormAnimation
                background={rotate.background}
                borderColor={rotate.borderColor}
                className={rotate.animation}>
            </FormAnimation>
            <div className="Auth-form-container">
                <form   style={formStyle} 
                        className="Auth-form"  
                        onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                onChange={(e) => email.current = e.target.value}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) => password.current = e.target.value}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        </LoginContainer>
    );
};

export default LoginForm;
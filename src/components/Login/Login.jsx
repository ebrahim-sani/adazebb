import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/accountApi";
// import { setLogin } from "../../app/features/userSlice";
// import { useDispatch } from "react-redux";
import "./Login.scss";

const LoginView = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pinVisible, setPinVisible] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [login, { isSuccess, isLoading, isError, error }] =
        useLoginMutation();
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await login({ email, password }).unwrap();

            const user = userData?.responseObject;
            setIsAdmin(user.isAdmin);
            console.log(user);
            console.log(isAdmin);
            const token = user.token;
            localStorage.setItem("auth", token);

            if (isAdmin === false) {
                navigate("/products");
            } else if (isAdmin === true) {
                navigate("dashboard/client");
            }
        } catch (err) {
            if (isError) {
                error;
            }
        }
    };

    return (
        <div className="app__loginView">
            <div className="app__loginViewComponent">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h4>Login</h4>
                    <p>
                        Please provide your registered details to login to your
                        dashboard.
                    </p>
                    <div className="login__form-element">
                        <input
                            className={email ? "active" : ""}
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="username">Email</label>
                        <p>{!email && "This field is required"}</p>
                    </div>

                    <div className="login__form-element">
                        <input
                            className={password ? "active" : ""}
                            type={pinVisible ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="username">Password</label>
                        <p>{!password && "This field is required"}</p>
                        <p className="forgot__pin">forgot Password?</p>
                        {pinVisible ? (
                            <AiOutlineEye
                                className="form__icon active"
                                onClick={() =>
                                    setPinVisible((pinVisible) => !pinVisible)
                                }
                            />
                        ) : (
                            <AiOutlineEyeInvisible
                                className="form__icon"
                                onClick={() =>
                                    setPinVisible((pinVisible) => !pinVisible)
                                }
                            />
                        )}
                    </div>

                    <div className="login__form-element buttons">
                        <button disabled={false} type="submit">
                            {isLoading ? "Login In..." : "Login"}
                        </button>
                    </div>
                    <p className="app__signup-link">
                        Don't have account? <span>Sign Up</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginView;

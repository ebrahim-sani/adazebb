import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useCreateAccountMutation } from "../services/accountApi";

import "./Custome.scss";

const AddStaff = ({ setToggleNewStaff }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [marchant, setMarchant] = useState(false);
    const [customer, setCustomer] = useState(false);
    const [staff, setStaff] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pinVisible, setPinVisible] = useState(false);

    const [createAccount, { isSuccess, isError, error }] =
        useCreateAccountMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newUserCredential = {
            email,
            password,
            fullName,
            marchant,
            customer,
            staff,
        };
        try {
            await createAccount(newUserCredential).unwrap();
        } catch (err) {
            console.log(error);
        }
        isSuccess &&
            (setEmail(""),
            setFullName(""),
            setId(""),
            setPassword(""),
            setPhoneNumber(""));
    };

    return (
        <div className="app__addStCus">
            <div className="addStCus_Component">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="loginViewHead">
                        <h4>Add Staff</h4>
                        <MdOutlineCancel
                            onClick={() => setToggleNewStaff(false)}
                        />
                    </div>

                    <div className="login__form-element">
                        <input
                            className={fullName ? "active" : ""}
                            type="text"
                            value={fullName}
                            // onFocus={() => setErrorUsername(false)}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <label htmlFor="fullName">Full Name</label>
                        <p>{!fullName && "This field is required"}</p>
                    </div>

                    <div className="login__form-element">
                        <input
                            className={email ? "active" : ""}
                            type="text"
                            value={email}
                            // onFocus={() => setErrorUsername(false)}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="fullName">Email</label>
                        <p>{!email && "This field is required"}</p>
                    </div>

                    <div className="login__form-element">
                        <input
                            className={phoneNumber ? "active" : ""}
                            type="decimal"
                            value={phoneNumber}
                            // onFocus={() => setErrorUsername(false)}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <label htmlFor="fullName">Phone Number</label>
                        <p>{!phoneNumber && "This field is required"}</p>
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
                        <button
                            disabled={false}
                            type="submit"
                            // onClick={() => setLogin(true)}
                        >
                            Add Staff
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStaff;

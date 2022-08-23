import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useCreateAccountMutation } from "../services/accountApi";

import "./Custome.scss";

const AddCustomer = ({ setToggleNewCustomer }) => {
  const [email, setEmail] = useState("ibrahim@mail.com");
  const [password, setPassword] = useState("1122");
  const [fullName, setFullName] = useState("Ibrahim Sani");
  const [marchant, setMarchant] = useState(false);
  const [customer, setCustomer] = useState(true);
  const [staff, setStaff] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("23344567788");
  const [pinVisible, setPinVisible] = useState(false);

  /* Make sure to remove -> id <- when working with real API */
  //   const [id, setId] = useState("");

  const [createAccount, { isSuccess, isError, error }] =
    useCreateAccountMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUserCredential = {
      //   id,
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
    <div className="app__loginView">
      <div className="app__loginViewComponent">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="loginViewHead">
            <h4>Add Customers</h4>
            <MdOutlineCancel onClick={() => setToggleNewCustomer(false)} />
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
                onClick={() => setPinVisible((pinVisible) => !pinVisible)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="form__icon"
                onClick={() => setPinVisible((pinVisible) => !pinVisible)}
              />
            )}
          </div>

          <div className="login__form-element buttons">
            <button
              disabled={false}
              type="submit"
              // onClick={() => setLogin(true)}
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;

import React, { useState } from "react";
import { BiDoorOpen } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

const Card = () => {
    const [showCard, setShowCard] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem("auth");
        navigate("/");
    };

    return (
        <div className="userCard">
            {showCard ? (
                <div className="userCard__component">
                    <div className="userCardFirst">
                        <div>
                            <FaPencilAlt />
                            <p>Profile</p>
                        </div>
                        <div onClick={handleClick}>
                            <BiDoorOpen />
                            <p>Log Out</p>
                        </div>
                    </div>
                    <hr />
                    <div className="userCardSecond">
                        <div>
                            <strong>Ibrahim Sani</strong>
                            <p>Admistrator</p>
                        </div>
                        <span onClick={() => setShowCard(false)}>
                            <BsPerson />
                        </span>
                    </div>
                </div>
            ) : (
                <div onClick={() => setShowCard(true)} className="personIcon">
                    <BsPerson />
                </div>
            )}
        </div>
    );
};

export default Card;

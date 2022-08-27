import React from "react";
import { Route, useNavigate } from "react-router-dom";

const RequireAuth = ({ auth, component: Component, ...rest }) => {
    const navigate = useNavigate();
    return (
        <Route
            {...rest}
            render={(props) => {
                if (auth) return <Component {...props} />;
                if (!auth)
                    return (
                        <navigate
                            to={{ path: "/", state: { from: props.location } }}
                        />
                    );
            }}
        />
    );
};

export default RequireAuth;

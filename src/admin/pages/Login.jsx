import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

import { login } from "../api/authApi";

function Login() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        localStorage.removeItem("token");

    }, []);

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const response = await login(
                username,
                password
            );

            localStorage.setItem(
                "token",
                response.token
            );

            navigate(
                "/admin/dashboard",
                { replace: true }
            );

        } catch {

            localStorage.removeItem("token");

            setError(
                "Invalid username or password"
            );

        }

    };

    return (

        <div className="login-page">

            <form
                className="login-card"
                onSubmit={handleLogin}
            >

                <h1>Admin Login</h1>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                {error && (

                    <p className="error">

                        {error}

                    </p>

                )}

                <button type="submit">

                    Login

                </button>

            </form>

        </div>

    );

}

export default Login;
import { Link, useNavigate } from "react-router-dom";
import {
    FolderKanban,
    Cpu,
    Award,
    User,
    Mail,
    LogOut
} from "lucide-react";

import "../styles/Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/admin/login");

    };

    const cards = [
        {
            title: "Projects",
            icon: <FolderKanban size={30} />,
            path: "/admin/projects",
        },
        {
            title: "Skills",
            icon: <Cpu size={30} />,
            path: "/admin/skills",
        },
        {
            title: "Certifications",
            icon: <Award size={30} />,
            path: "/admin/certifications",
        },
        {
            title: "About",
            icon: <User size={30} />,
            path: "/admin/about",
        },
        {
            title: "Contact",
            icon: <Mail size={30} />,
            path: "/admin/contact",
        }
    ];

    return (

        <div className="dashboard">

            <aside className="sidebar">

                <h2>Portfolio Admin</h2>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    <LogOut size={18} />
                    Logout
                </button>

            </aside>

            <main className="dashboard-content">

                <h1>Dashboard</h1>

                <p>
                    Manage your portfolio content.
                </p>

                <div className="dashboard-grid">

                    {cards.map((card) => (

                        <Link
                            key={card.title}
                            to={card.path}
                            className="dashboard-card"
                        >

                            {card.icon}

                            <h3>{card.title}</h3>

                        </Link>

                    ))}

                </div>

            </main>

        </div>

    );

}

export default Dashboard;
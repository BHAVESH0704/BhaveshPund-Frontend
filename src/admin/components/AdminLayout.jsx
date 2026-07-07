import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/AdminLayout.css";

function AdminLayout({ children }) {

    const location = useLocation();

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/admin/login");

    };

    const menus = [

        {
            name: "Dashboard",
            path: "/admin/dashboard",
        },

        {
            name: "Projects",
            path: "/admin/projects",
        },

        {
            name: "Skills",
            path: "/admin/skills",
        },

        {
            name: "Experience",
            path: "/admin/experience",
        },

        {
            name: "Education",
            path: "/admin/education",
        },

        {
            name: "Certifications",
            path: "/admin/certifications",
        },

        {
            name: "Evolution",
            path: "/admin/evolution",
        },

        {
            name: "About",
            path: "/admin/about",
        },

        {
            name: "Contact",
            path: "/admin/contact",
        }

    ];

    return (

        <div className="admin-layout">

            <aside className="admin-sidebar">

                <h2>Portfolio Admin</h2>

                <nav>

                    {

                        menus.map((menu) => (

                            <Link
                                key={menu.path}
                                to={menu.path}
                                className={
                                    location.pathname === menu.path
                                        ? "active"
                                        : ""
                                }
                            >

                                {menu.name}

                            </Link>

                        ))

                    }

                </nav>

                <button
                    onClick={logout}
                    className="logout-btn"
                >

                    Logout

                </button>

            </aside>

            <main className="admin-main">

                {children}

            </main>

        </div>

    );

}

export default AdminLayout;
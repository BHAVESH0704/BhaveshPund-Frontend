import { useEffect, useState } from "react";

import AdminLayout from "../components/AdminLayout";
import "../styles/About.css";

import {
    getAbout,
    updateAbout,
} from "../api/aboutAdminApi";

const initialState = {
    name: "",
    role: "",
    college: "",
    degree: "",
    location: "",
    email: "",
};

function About() {

    const [form, setForm] = useState(initialState);

    useEffect(() => {

        loadAbout();

    }, []);

    const loadAbout = async () => {

        try {

            const data = await getAbout();

            setForm(data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateAbout(form);

            alert("About information updated successfully.");

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <AdminLayout>

            <div className="admin-page">

                <h1>Edit About</h1>

                <form
                    className="about-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="role"
                        placeholder="Role"
                        value={form.role}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="college"
                        placeholder="College"
                        value={form.college}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="degree"
                        placeholder="Degree"
                        value={form.degree}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="location"
                        placeholder="Location"
                        value={form.location}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">

                        Save Changes

                    </button>

                </form>

            </div>

        </AdminLayout>

    );

}

export default About;
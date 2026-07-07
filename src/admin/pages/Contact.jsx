import { useEffect, useState } from "react";

import AdminLayout from "../components/AdminLayout";
import "../styles/Contact.css";

import {
    getContact,
    updateContact,
} from "../api/contactAdminApi";

const initialState = {
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    location: "",
};

function Contact() {

    const [form, setForm] = useState(initialState);

    useEffect(() => {

        loadContact();

    }, []);

    const loadContact = async () => {

        try {

            const data = await getContact();

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

            await updateContact(form);

            alert("Contact information updated successfully.");

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <AdminLayout>

            <div className="admin-page">

                <h1>Edit Contact</h1>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="linkedin"
                        placeholder="LinkedIn URL"
                        value={form.linkedin}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="github"
                        placeholder="GitHub URL"
                        value={form.github}
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

                    <button type="submit">

                        Save Changes

                    </button>

                </form>

            </div>

        </AdminLayout>

    );

}

export default Contact;
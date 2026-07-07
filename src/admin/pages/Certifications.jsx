import { useEffect, useState } from "react";

import AdminLayout from "../components/AdminLayout";
import "../styles/Certifications.css";

import {
    getCertifications,
    createCertification,
    updateCertification,
    deleteCertification,
} from "../api/certificationAdminApi";

const initialState = {
    title: "",
    organization: "",
    year: "",
    credentialUrl: "",
};

function Certifications() {

    const [certifications, setCertifications] = useState([]);

    const [form, setForm] = useState(initialState);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        loadCertifications();

    }, []);

    const loadCertifications = async () => {

        try {

            const data = await getCertifications();

            setCertifications(data);

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

            if (editingId) {

                await updateCertification(editingId, form);

            } else {

                await createCertification(form);

            }

            setForm(initialState);

            setEditingId(null);

            loadCertifications();

        } catch (error) {

            console.error(error);

        }

    };

    const handleEdit = (certification) => {

        setEditingId(certification.id);

        setForm(certification);

        window.scrollTo({

            top: 0,

            behavior: "smooth",

        });

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this certification?")) {

            return;

        }

        try {

            await deleteCertification(id);

            loadCertifications();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <AdminLayout>

            <div className="admin-page">

                <h1>

                    {editingId
                        ? "Edit Certification"
                        : "Create Certification"}

                </h1>

                <form
                    className="certification-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        name="title"
                        placeholder="Certification Title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="organization"
                        placeholder="Organization"
                        value={form.organization}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="year"
                        placeholder="2026"
                        value={form.year}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="credentialUrl"
                        placeholder="Credential URL"
                        value={form.credentialUrl}
                        onChange={handleChange}
                    />

                    <button type="submit">

                        {editingId
                            ? "Update Certification"
                            : "Create Certification"}

                    </button>

                </form>

                <div className="certification-list">

                    {certifications.map((certification) => (

                        <div
                            className="certification-item"
                            key={certification.id}
                        >

                            <h3>{certification.title}</h3>

                            <h4>{certification.organization}</h4>

                            <strong>{certification.year}</strong>

                            <p>{certification.credentialUrl}</p>

                            <div className="project-actions">

                                <button
                                    className="edit-btn"
                                    onClick={() =>
                                        handleEdit(certification)
                                    }
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        handleDelete(certification.id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </AdminLayout>

    );

}

export default Certifications;
import { useEffect, useState } from "react";

import AdminLayout from "../components/AdminLayout";
import "../styles/Education.css";

import {
    getEducation,
    createEducation,
    updateEducation,
    deleteEducation,
} from "../api/educationAdminApi";

const initialState = {
    degree: "",
    institute: "",
    year: "",
    grade: "",
};

function Education() {

    const [educationList, setEducationList] = useState([]);

    const [form, setForm] = useState(initialState);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        loadEducation();

    }, []);

    const loadEducation = async () => {

        try {

            const data = await getEducation();

            setEducationList(data);

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

                await updateEducation(editingId, form);

            } else {

                await createEducation(form);

            }

            setForm(initialState);

            setEditingId(null);

            loadEducation();

        } catch (error) {

            console.error(error);

        }

    };

    const handleEdit = (education) => {

        setEditingId(education.id);

        setForm(education);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this education record?")) {

            return;

        }

        try {

            await deleteEducation(id);

            loadEducation();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <AdminLayout>

            <div className="admin-page">

                <h1>

                    {editingId
                        ? "Edit Education"
                        : "Create Education"}

                </h1>

                <form
                    className="education-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        name="degree"
                        placeholder="Degree"
                        value={form.degree}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="institute"
                        placeholder="Institute"
                        value={form.institute}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="year"
                        placeholder="2022 - 2026"
                        value={form.year}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="grade"
                        placeholder="CGPA / Percentage"
                        value={form.grade}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">

                        {editingId
                            ? "Update Education"
                            : "Create Education"}

                    </button>

                </form>

                <div className="education-list">

                    {educationList.map((education) => (

                        <div
                            className="education-item"
                            key={education.id}
                        >

                            <h3>{education.degree}</h3>

                            <h4>{education.institute}</h4>

                            <strong>{education.year}</strong>

                            <p>{education.grade}</p>

                            <div className="project-actions">

                                <button
                                    className="edit-btn"
                                    onClick={() =>
                                        handleEdit(education)
                                    }
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        handleDelete(education.id)
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

export default Education;
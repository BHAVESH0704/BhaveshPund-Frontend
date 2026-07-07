import { useEffect, useState } from "react";

import AdminLayout from "../components/AdminLayout";
import "../styles/Experience.css";

import {
    getExperience,
    createExperience,
    updateExperience,
    deleteExperience,
} from "../api/experienceAdminApi";

const initialState = {
    company: "",
    role: "",
    duration: "",
    description: "",
};

function Experience() {

    const [experiences, setExperiences] = useState([]);

    const [form, setForm] = useState(initialState);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        loadExperience();

    }, []);

    const loadExperience = async () => {

        try {

            const data = await getExperience();

            setExperiences(data);

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

                await updateExperience(editingId, form);

            } else {

                await createExperience(form);

            }

            setForm(initialState);

            setEditingId(null);

            loadExperience();

        } catch (error) {

            console.error(error);

        }

    };

    const handleEdit = (experience) => {

        setEditingId(experience.id);

        setForm(experience);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this experience?")) {

            return;

        }

        try {

            await deleteExperience(id);

            loadExperience();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <AdminLayout>

            <div className="admin-page">

                <h1>

                    {editingId
                        ? "Edit Experience"
                        : "Create Experience"}

                </h1>

                <form
                    className="experience-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        name="company"
                        placeholder="Company"
                        value={form.company}
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
                        name="duration"
                        placeholder="Jan 2025 - Present"
                        value={form.duration}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        rows="5"
                        required
                    />

                    <button type="submit">

                        {editingId
                            ? "Update Experience"
                            : "Create Experience"}

                    </button>

                </form>

                <div className="experience-list">

                    {experiences.map((experience) => (

                        <div
                            className="experience-item"
                            key={experience.id}
                        >

                            <h3>{experience.company}</h3>

                            <h4>{experience.role}</h4>

                            <strong>{experience.duration}</strong>

                            <p>{experience.description}</p>

                            <div className="project-actions">

                                <button
                                    className="edit-btn"
                                    onClick={() =>
                                        handleEdit(experience)
                                    }
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        handleDelete(experience.id)
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

export default Experience;
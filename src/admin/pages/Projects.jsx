import { useEffect, useState } from "react";

import "../styles/Projects.css";

import AdminLayout from "../components/AdminLayout";

import {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
} from "../api/projectAdminApi";

const initialState = {
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
    imageUrl: "",
    year: "",
};

function Projects() {

    const [projects, setProjects] = useState([]);

    const [form, setForm] = useState(initialState);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        loadProjects();

    }, []);

    const loadProjects = async () => {

        try {

            const data = await getProjects();

            setProjects(data);

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

                await updateProject(editingId, form);

            } else {

                await createProject(form);

            }

            setForm(initialState);

            setEditingId(null);

            loadProjects();

        } catch (error) {

            console.error(error);

        }

    };

    const handleEdit = (project) => {

        setEditingId(project.id);

        setForm(project);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this project?")) {
            return;
        }

        try {

            await deleteProject(id);

            loadProjects();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <AdminLayout>

            <div className="admin-page">

                <h1>

                    {editingId
                        ? "Edit Project"
                        : "Create Project"}

                </h1>

                <form
                    className="project-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="technologies"
                        placeholder="Java, React, Spring Boot"
                        value={form.technologies}
                        onChange={handleChange}
                    />

                    <input
                        name="githubLink"
                        placeholder="GitHub URL"
                        value={form.githubLink}
                        onChange={handleChange}
                    />

                    <input
                        name="liveLink"
                        placeholder="Live URL"
                        value={form.liveLink}
                        onChange={handleChange}
                    />

                    <input
                        name="imageUrl"
                        placeholder="/images/project.png"
                        value={form.imageUrl}
                        onChange={handleChange}
                    />

                    <input
                        name="year"
                        placeholder="2026"
                        value={form.year}
                        onChange={handleChange}
                    />

                    <button type="submit">

                        {editingId
                            ? "Update Project"
                            : "Create Project"}

                    </button>

                </form>

                <div className="project-list">

                    {projects.map((project) => (

                        <div
                            className="project-item"
                            key={project.id}
                        >

                            <h2>{project.title}</h2>

                            <p>{project.description}</p>

                            <strong>{project.year}</strong>

                            <div className="project-actions">

                                <button
                                    className="edit-btn"
                                    onClick={() =>
                                        handleEdit(project)
                                    }
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        handleDelete(project.id)
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

export default Projects;
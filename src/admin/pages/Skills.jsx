import { useEffect, useState } from "react";

import AdminLayout from "../components/AdminLayout";
import "../styles/Skills.css";

import {
    getSkills,
    createSkill,
    updateSkill,
    deleteSkill,
} from "../api/skillAdminApi";

const initialState = {
    name: "",
    category: "",
};

function Skills() {

    const [skills, setSkills] = useState([]);

    const [form, setForm] = useState(initialState);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        loadSkills();

    }, []);

    const loadSkills = async () => {

        try {

            const data = await getSkills();

            setSkills(data);

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

                await updateSkill(editingId, form);

            } else {

                await createSkill(form);

            }

            setForm(initialState);

            setEditingId(null);

            loadSkills();

        } catch (error) {

            console.error(error);

        }

    };

    const handleEdit = (skill) => {

        setEditingId(skill.id);

        setForm(skill);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this skill?")) {

            return;

        }

        try {

            await deleteSkill(id);

            loadSkills();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <AdminLayout>

            <div className="admin-page">

                <h1>

                    {editingId
                        ? "Edit Skill"
                        : "Create Skill"}

                </h1>

                <form
                    className="skill-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        name="name"
                        placeholder="Skill Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="category"
                        placeholder="Category"
                        value={form.category}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">

                        {editingId
                            ? "Update Skill"
                            : "Create Skill"}

                    </button>

                </form>

                <div className="skill-list">

                    {skills.map((skill) => (

                        <div
                            className="skill-item"
                            key={skill.id}
                        >

                            <h3>{skill.name}</h3>

                            <p>{skill.category}</p>

                            <div className="project-actions">

                                <button
                                    className="edit-btn"
                                    onClick={() =>
                                        handleEdit(skill)
                                    }
                                >

                                    Edit

                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        handleDelete(skill.id)
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

export default Skills;
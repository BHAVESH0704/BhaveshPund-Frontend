import api from "../../api/api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getSkills = async () => {

    const response = await api.get(
        "/admin/skills",
        token()
    );

    return response.data;

};

export const createSkill = async (skill) => {

    const response = await api.post(
        "/admin/skills",
        skill,
        token()
    );

    return response.data;

};

export const updateSkill = async (id, skill) => {

    const response = await api.put(
        `/admin/skills/${id}`,
        skill,
        token()
    );

    return response.data;

};

export const deleteSkill = async (id) => {

    await api.delete(
        `/admin/skills/${id}`,
        token()
    );

};
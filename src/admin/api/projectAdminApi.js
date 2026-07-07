import api from "../../api/api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getProjects = async () => {

    const response = await api.get(
        "/admin/projects",
        token()
    );

    return response.data;

};

export const createProject = async (project) => {

    const response = await api.post(
        "/admin/projects",
        project,
        token()
    );

    return response.data;

};

export const updateProject = async (id, project) => {

    const response = await api.put(
        `/admin/projects/${id}`,
        project,
        token()
    );

    return response.data;

};

export const deleteProject = async (id) => {

    await api.delete(
        `/admin/projects/${id}`,
        token()
    );

};
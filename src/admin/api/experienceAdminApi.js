import api from "../../api/api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getExperience = async () => {

    const response = await api.get(
        "/admin/experience",
        token()
    );

    return response.data;

};

export const createExperience = async (experience) => {

    const response = await api.post(
        "/admin/experience",
        experience,
        token()
    );

    return response.data;

};

export const updateExperience = async (id, experience) => {

    const response = await api.put(
        `/admin/experience/${id}`,
        experience,
        token()
    );

    return response.data;

};

export const deleteExperience = async (id) => {

    await api.delete(
        `/admin/experience/${id}`,
        token()
    );

};
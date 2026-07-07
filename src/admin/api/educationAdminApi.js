import api from "../../api/api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getEducation = async () => {

    const response = await api.get(
        "/admin/education",
        token()
    );

    return response.data;

};

export const createEducation = async (education) => {

    const response = await api.post(
        "/admin/education",
        education,
        token()
    );

    return response.data;

};

export const updateEducation = async (id, education) => {

    const response = await api.put(
        `/admin/education/${id}`,
        education,
        token()
    );

    return response.data;

};

export const deleteEducation = async (id) => {

    await api.delete(
        `/admin/education/${id}`,
        token()
    );

};
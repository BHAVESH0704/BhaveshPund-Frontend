import api from "../../api/api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getAbout = async () => {

    const response = await api.get(
        "/admin/about",
        token()
    );

    return response.data;

};

export const updateAbout = async (about) => {

    const response = await api.put(
        "/admin/about",
        about,
        token()
    );

    return response.data;

};
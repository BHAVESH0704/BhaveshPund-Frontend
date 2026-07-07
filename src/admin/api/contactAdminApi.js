import api from "../../api/api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getContact = async () => {

    const response = await api.get(
        "/admin/contact",
        token()
    );

    return response.data;

};

export const updateContact = async (contact) => {

    const response = await api.put(
        "/admin/contact",
        contact,
        token()
    );

    return response.data;

};
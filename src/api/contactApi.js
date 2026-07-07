import api from "./api";

export const getContact = async () => {

    const response = await api.get("/contact");

    return response.data;

};
import api from "./api";

export const getAbout = async () => {

    const response = await api.get("/about");

    return response.data;

};
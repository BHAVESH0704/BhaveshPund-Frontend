import api from "../../api/api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getCertifications = async () => {

    const response = await api.get(
        "/admin/certifications",
        token()
    );

    return response.data;

};

export const createCertification = async (certification) => {

    const response = await api.post(
        "/admin/certifications",
        certification,
        token()
    );

    return response.data;

};

export const updateCertification = async (id, certification) => {

    const response = await api.put(
        `/admin/certifications/${id}`,
        certification,
        token()
    );

    return response.data;

};

export const deleteCertification = async (id) => {

    await api.delete(
        `/admin/certifications/${id}`,
        token()
    );

};
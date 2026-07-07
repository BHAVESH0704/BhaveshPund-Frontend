import api from "../../api/api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getDashboardStats = async () => {

    const response = await api.get(
        "/admin/dashboard",
        token()
    );

    return response.data;

};
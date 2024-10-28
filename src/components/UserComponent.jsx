import { useEffect, useState } from "react";
import dashboardService from "../services/dashboard/dashboardServices";

export const UserComponent = () => {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await dashboardService.getDashboard();
                setUsername(data.userLogin.username);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user:", error);
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-4">
            <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2eadaf]"></div>
                    </div>
                ) : error ? (
                    <p className="text-red-400 text-center">{error}</p>
                ) : (
                    <div className="text-center">
                        <p className="text-xl mb-4">
                            ¡Hola, <span className="font-bold text-[#2eadaf]">{username}</span>!
                        </p>
                        <p className="text-gray-400">Nos alegra verte aquí.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

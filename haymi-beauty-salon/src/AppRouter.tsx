import {
    Routes,
    Route,
    Navigate,
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { HomePage } from "./component/pages/HomePage";

export { Link, useNavigate, useLocation } from "react-router-dom";

export const routTo = (url: string, navigate: any, params?: any) => {
    navigate(url, { state: params });
};

export const toSearchParams = (args: { [name: string]: string }) => {
    const params = new URLSearchParams();
    for (const key in args) params.append(key, args[key]);
    return params.toString();
};

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/claimants/:claimantId" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

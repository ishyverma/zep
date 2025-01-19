import axios from "axios";
import { useEffect, useState } from "react";

interface InfoType {
    id: string;
    username: string;
    avatarId: null | string;
    type: "user" | "admin"
}

export function useInformation(token: string) {
    const [data, useData] = useState<InfoType | "">("")
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/me", {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(response => {
            useData(response.data.user)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return data;
}
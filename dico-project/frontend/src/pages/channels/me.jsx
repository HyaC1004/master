import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FriendsManage from "../../components/me/friendsManage";

import SideNav from "../../components/me/sideNav";
import AuthContext from "../../contexts/AuthContext";
import { io } from "socket.io-client";



function MePage() {
    const [mode, setMode] = useState(0);
    const [friends, setFriends] = useState([]);
    const ctx = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("소켓 연결 시도! ====");
        // 백엔드연결을 한후 만들어진 소켓을 활용
        const socket = io("http://localhost:8080", { query: { email: ctx.data.user.email } });

        socket.on("add-friend-req", (data) => {
            console.log("add-friend-req=====================")
            console.log(data);
            setFriends((curr) => [...curr, data]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        (async function () {
            const jwt = localStorage.getItem("jwt");
            const response = await fetch("http://localhost:8080/@me/relationship", {
                method: "GET",
                headers: {
                    "authorization": "Bearer " + jwt,
                    "Content-type": "application/json"
                }
            });
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                setFriends(data);
            }
        })();
    }, []);


    return (<>
        <SideNav />
        <FriendsManage friends={friends} />
    </>);
}

export default MePage;
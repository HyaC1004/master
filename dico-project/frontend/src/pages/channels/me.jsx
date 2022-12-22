import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FriendsManage from "../../components/me/friendsManage";

import SideNav from "../../components/me/sideNav";
import AuthContext from "../../contexts/AuthContext";
import { io } from "socket.io-client";
import DirectMessage from "../../components/me/messages/direct-message";



function MePage() {
    const [mySocket, setMySocket] = useState(null);
    const [mode, setMode] = useState(0);
    const [friends, setFriends] = useState([]);
    const ctx = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname.split("/"));
    const channleId = location.pathname.split("/")[3];

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

    useEffect(() => {
        console.log("소켓 연결 시도! ====");
        // 백엔드연결을 한후 만들어진 소켓을 활용
        const socket = io("http://localhost:8080", { query: { email: ctx.data.user.email } });

        socket.on("add-friend-req", (data) => {
            console.log("add-friend-req=====================")
            console.log(data);
            setFriends((curr) => [...curr, data]);
        });
        setMySocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);




    return (<>
        <SideNav />
        {channleId && <DirectMessage channelId={channleId} socket={mySocket} />}
        {!channleId && <FriendsManage friends={friends} socket={mySocket} />}

    </>);
}

export default MePage;
import { io } from "@src/http";

// type IPropsSocket = {}

io.on("connection", (socket: any) => {
    socket.on("disconnect", () => console.log);
});

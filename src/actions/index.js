export const connect = (username) => ({ type: "CONNECT", payload: username });
export const disconnect = () => ({ type: "DISCONNECT" });

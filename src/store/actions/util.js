export default function GetToken() {
    const token = localStorage.getItem("token");
    return token;
}

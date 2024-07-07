import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

export default function Dashboard() {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div className="w-full flex flex-row justify-between p-4">
      <div>Welcome, you are logged in</div>
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}

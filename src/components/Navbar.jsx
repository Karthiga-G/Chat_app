import { UserAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { currentUser, logout } = UserAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full z-10 bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <button className="btn btn-ghost text-xl">InstantChat</button>
        {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  );
};
export default Navbar;

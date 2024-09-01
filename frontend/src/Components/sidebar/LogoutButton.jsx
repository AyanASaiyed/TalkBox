import React from "react";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      <button
        type="submit"
        className="btn rounded bg-yellow-400 text-black"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;

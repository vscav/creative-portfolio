import * as React from "react";
import { useSelector } from "react-redux";

import About from "components/App/About";

const Profile = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <About
        fullName={profile.fullName}
        role={profile.role}
        mission={profile.mission}
      />
    </>
  );
};

export default Profile;

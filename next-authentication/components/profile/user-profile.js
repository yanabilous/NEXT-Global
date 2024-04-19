import ProfileForm from "./profile-form";
// import { getSession } from "next-auth/client";
import classes from "./user-profile.module.css";
// import {useEffect, useState} from "react";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);
  // // const [loadedSession, setLoadedSession] = useState();
  // //   const [session, loading] = useSession();
  //
  // useEffect(() => {
  //   getSession().then(session => {
  //
  //     if (!session) {
  //       window.location.href = "/auth";
  //     } else {
  //       setIsLoading(false);
  //     }
  //     // setLoadedSession(session);
  //
  //   });
  // }, []);
  //
  //
  // // Redirect away if NOT auth
  // if (isLoading) {
  //   return <p className={classes.profile}>Loading ... </p>;
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm/>
    </section>
  );
}

export default UserProfile;

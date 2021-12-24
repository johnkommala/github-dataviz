import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { mockUserData, mockRepoData } from "../mock";

// import { UserInfo, Charts, RateLimit } from "../components";

const User = (props) => {
  const username = props.query.id;
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  //   const [error, setError] = useState({ active: false, type: 200 });
  //   const [rateLimit, setRateLimit] = useState(null);

  //   const getUserData = () => {
  //     fetch(`https://api.github.com/users/${username}`)
  //       .then(response => {
  //         if (response.status === 404) {
  //           return setError({ active: true, type: 404 });
  //         }
  //         if (response.status === 403) {
  //           return setError({ active: true, type: 403 });
  //         }
  //         return response.json();
  //       })
  //       .then(json => setUserData(json))
  //       .catch(error => {
  //         setError({ active: true, type: 400 });
  //         console.error("Error:", error);
  //       });
  //   };

  //   const getLangData = () => {
  //     const me = new GhPolyglot(`${username}`);
  //     me.userStats((err, stats) => {
  //       if (err) {
  //         console.error("Error:", err);
  //         setError({ active: true, type: 400 });
  //       }
  //       setLangData(stats);
  //     });
  //   };

  //   const getRepoData = () => {
  //     fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
  //       .then(response => {
  //         if (response.status === 404) {
  //           return setError({ active: true, type: 404 });
  //         }
  //         if (response.status === 403) {
  //           return setError({ active: true, type: 403 });
  //         }
  //         return response.json();
  //       })
  //       .then(json => setRepoData(json))
  //       .catch(error => {
  //         setError({ active: true, type: 200 });
  //         console.error("Error:", error);
  //       });
  //   };

  useEffect(() => {
    // fetch(`https://api.github.com/rate_limit`)
    //   .then(response => response.json())
    //   .then(json => {
    //     setRateLimit(json.resources.core);
    //     if (json.resources.core.remaining < 1) {
    //       setError({ active: true, type: 403 });
    //     }
    //   });

    // // getUserData();
    // getUserData();
    // getLangData();
    // getRepoData();

    setUserData(mockUserData);
    setRepoData(mockRepoData);
  }, []);

  return (
    <main>
      {/* {rateLimit && <RateLimit rateLimit={rateLimit} />} */}

      {
        <>
          <h1>UserName - {username}</h1>
          {/* {userData && <UserInfo userData={userData} />}

          {repoData && <Charts repoData={repoData} />} */}
        </>
      }
    </main>
  );
};

User.propTypes = {
  query: PropTypes.object,
};

export default User;
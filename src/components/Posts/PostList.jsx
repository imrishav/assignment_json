import React, { useState, useEffect } from "react";
import { Posts } from "../";
import useGet from "../../hooks/useGet";
import Spinner from "../elements/Spinner";
import AutoComplete from "../elements/AutoComplete";

export const PostList = (props) => {
  const [mstData, setMstData] = useState([]);
  const [_, setQueryData] = useState();
  let { data: postData, loading, error } = useGet("posts");
  let {
    data: userData,
    loading: userLoading,
    error: userLoadingError,
  } = useGet("users");

  const getUserDetails = (val) => {
    setQueryData(val.id);
  };

  useEffect(() => {
    let allData = postData.map((posts) => ({
      ...posts,
      ...userData.find((user) => user.id === posts.userId),
    }));

    if (_) {
      let newData = allData.filter((user) => user.userId === _);
      setMstData(newData);
    } else {
      setMstData(allData);
    }
  }, [postData, userData, _]);

  if (error || userLoadingError) return "Something Went Wrong.";

  return (
    <div>
      <div className="container">
        <div style={{ margin: "30px" }}>
          <AutoComplete getUserDetails={getUserDetails} data={mstData} />
        </div>
        <div className="row">
          {/*
           * To retrive Post Data along with the user details map is used.
           * And then both user Details and Post are merged basically imitating the join in terms of db
           * and then the individual post are returned with overall data.
           */}
          {loading || userLoading ? (
            <Spinner spinning={loading || userLoading} />
          ) : (
            mstData.map((post, idx) => (
              <div key={idx} className="col-6">
                <Posts post={post} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

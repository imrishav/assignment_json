import React, { useState, useEffect } from "react";
import useGet from "../../hooks/useGet";
import Spinner from "../elements/Spinner";

export const Post = (props) => {
  let { location, match } = props;

  const [postData, setPostData] = useState();

  let { data, loading, error } = useGet(`posts/${match.params.id}/comments`);

  useEffect(() => {
    setPostData(location.state);
  }, [match.params.id, location]);

  if (error) return "Something Went Wrong.";

  if (loading) return <Spinner spinning={loading} />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="post-content">
            <div className="post-container">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt="user"
                className="profile-photo-md pull-left"
              />
              <div className="post-detail">
                <div className="user-info">
                  <h5>{postData?.name}</h5>
                </div>

                <div className="line-divider"></div>
                <div className="post-text">
                  <p>{postData?.body}</p>
                </div>
                <div className="line-divider"></div>
                {data.map((comment, idx) => {
                  return (
                    <div className="post-comment" key={idx}>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt=""
                        className="profile-photo-sm"
                      />
                      <p>
                        <i className="em em-laughing"></i> {comment.body}
                        <br />
                        <span style={{ fontSize: 15, fontStyle: "italic" }}>
                          by - {comment.email}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

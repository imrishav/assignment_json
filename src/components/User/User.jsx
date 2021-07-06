import React from "react";
import useGet from "../../hooks/useGet";
import Spinner from "../elements/Spinner";
const User = ({ match }) => {
  let { data, loading, error } = useGet(`users/${match.params.id}`);

  const renderAddress = (address) => {
    return address
      ? `${address?.suite}, ${address?.street}, ${address?.suite}, ${address?.city} `
      : "-";
  };

  if (loading) {
    return <Spinner spinning={loading} />;
  }

  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card" style={{ height: 266 }}>
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div className="mt-3">
                    <h4>{data.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Username</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{data.username}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{data.name}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{data.email}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{data.phone}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Company</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {data.company?.name}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {renderAddress(data.address)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">Zipcode</div>
                  <div className="col-sm-9 text-secondary">
                    {data?.address?.zipcode}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { User };

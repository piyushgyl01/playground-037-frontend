import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { Link } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  const { data, loading, error, refetch } = useFetch(
    `https://playground-037-backend.vercel.app/cars/${id}`
  );

  console.log(data);

  return (
    <main className="container my-5">
      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="alert alert-danger">{error}</div>
        </div>
      )}

      <div className="row">
        {data && (
          <div className="row">
            <div className="col-md-6">
              <img
                src={data.imgURL}
                alt={`${data.make} ${data.model}`}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">
                {data.make} {data.model} ({data.year})
              </h2>

              <div className="mb-3">
                <span className="badge bg-primary me-2">{data.color}</span>
                <span className="badge bg-secondary me-2">{data.fuelType}</span>
                <span className="badge bg-info me-2">{data.transmission}</span>
                <span
                  className={`badge ${
                    data.isAvailable ? "bg-success" : "bg-danger"
                  }`}
                >
                  {data.isAvailable ? "Available" : "Not Available"}
                </span>
              </div>

              <div className="row mb-4">
                <div className="col-6">
                  <div className="card">
                    <div className="card-body text-center">
                      <h5 className="card-title">Price</h5>
                      <p className="card-text fs-4">
                        ${data.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card">
                    <div className="card-body text-center">
                      <h5 className="card-title">Mileage</h5>
                      <p className="card-text fs-4">
                        {data.mileage.toLocaleString()} mi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h4>Features</h4>
              <ul className="list-group mb-4">
                {data.features.map((feature, index) => (
                  <li key={index} className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <h4>Specifications</h4>
              <table className="table table-striped mb-4">
                <tbody>
                  <tr>
                    <th scope="row">Make</th>
                    <td>{data.make}</td>
                  </tr>
                  <tr>
                    <th scope="row">Model</th>
                    <td>{data.model}</td>
                  </tr>
                  <tr>
                    <th scope="row">Year</th>
                    <td>{data.year}</td>
                  </tr>
                  <tr>
                    <th scope="row">Color</th>
                    <td>{data.color}</td>
                  </tr>
                  <tr>
                    <th scope="row">Fuel Type</th>
                    <td>{data.fuelType}</td>
                  </tr>
                  <tr>
                    <th scope="row">Transmission</th>
                    <td>{data.transmission}</td>
                  </tr>
                  <tr>
                    <th scope="row">Availability</th>
                    <td>{data.isAvailable ? "Available" : "Not Available"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Created</th>
                    <td>{new Date(data.createdAt).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <th scope="row">Last Updated</th>
                    <td>{new Date(data.updatedAt).toLocaleDateString()}</td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex gap-2">
                <Link to="/" className="btn btn-secondary">
                  Back to Listings
                </Link>
                <Link to={`/update/${data._id}`} className="btn btn-primary">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

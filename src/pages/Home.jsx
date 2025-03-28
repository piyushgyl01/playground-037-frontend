import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Home() {
  const { loading, data, error, refetch } = useFetch(
    "http://localhost:3000/cars"
  );
  console.log(data);

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        const response = await fetch(`http://localhost:3000/cars/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          refetch();
        }
      } catch (error) {
        throw error;
      }
    }
  }

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
        {data &&
          data.map((car) => (
            <div className="col-md-4 mb-4" key={car._id}>
              <div className="card h-100">
                <img src={car.imgURL} className="card-img-top" alt={`${car.make} ${car.model}`} style={{height: "200px", objectFit: "cover"}} />
                <div className="card-body">
                  <h5 className="card-title">
                    {car.make} {car.model} ({car.year})
                  </h5>
                  <div className="mb-3">
                    <span className="badge bg-primary me-1">{car.color}</span>
                    <span className="badge bg-secondary me-1">{car.fuelType}</span>
                    <span className="badge bg-info me-1">{car.transmission}</span>
                    <span className={`badge ${car.isAvailable ? 'bg-success' : 'bg-danger'}`}>
                      {car.isAvailable ? 'Available' : 'Not Available'}
                    </span>
                  </div>
                  <div className="mb-2">
                    <p className="card-text mb-1"><strong>Price:</strong> ${car.price.toLocaleString()}</p>
                    <p className="card-text mb-1"><strong>Mileage:</strong> {car.mileage.toLocaleString()} miles</p>
                  </div>
                  <h6>Features</h6>
                  <ul className="list-group list-group-flush mb-3">
                    {car.features.slice(0, 3).map((feat, index) => (
                      <li key={index} className="list-group-item py-1">{feat}</li>
                    ))}
                    {car.features.length > 3 && (
                      <li className="list-group-item py-1 text-muted">+{car.features.length - 3} more features</li>
                    )}
                  </ul>
                  <div className="d-flex">
                    <Link
                      to={`/details/${car._id}`}
                      className="btn btn-primary flex-grow-1"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="btn btn-danger ms-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
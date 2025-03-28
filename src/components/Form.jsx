// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";

// export default function Form({ isEditMode  }) {
//   const [formData, setFormData] = useState({
//     make: "",
//     imgURL: "",
//     model: "",
//     year: null,
//     color: "",
//     price: null,
//     fuelType: "",
//     transmission: "",
//     mileage: null,
//     features: [],
//     isAvailable: false,
//   });
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { data, loading, error, refetch } = useFetch(
//     `https://playground-037-backend.vercel.app/cars/${id}`
//   );
//   console.log(data);

//   useEffect(() => {
//     if (isEditMode && data) {
//       setFormData({
//         make: data?.make || "",
//         imgURL: data?.imgURL || "",
//         model: data?.model || "",
//         year: data?.year || null,
//         color: data?.color || "",
//         price: data?.price || null,
//         fuelType: data?.fuelType || "",
//         transmission: data?.transmission || "",
//         mileage: data?.mileage || null,
//         features: data?.features || [],
//         isAvailable: data?.isAvailable || false,
//       });
//     }
//   }, [isEditMode, id, data]);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       if (isEditMode) {
//         const response = await fetch(`https://playground-037-backend.vercel.app/cars/${id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           navigate(`/details/${id}`);
//           refetch();
//         }
//       } else {
//         const response = await fetch(`https://playground-037-backend.vercel.app/cars`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           navigate("/");
//         }
//       }
//     } catch (error) {
//       throw error;
//     }
//   }

//   return (
//     <div className="card shadow border-0">
//       <div className="card-body p-4">
//         <h2 className="card-title mb-4">
//           {isEditMode ? "Edit Car Details" : "Post New Car"}
//         </h2>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="make" className="form-label">
//               Make:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="make"
//               id="make"
//               value={formData.make}
//               onChange={(e) =>
//                 setFormData({ ...formData, make: e.target.value })
//               }
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="imgURL" className="form-label">
//               Image URL:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="imgURL"
//               id="imgURL"
//               value={formData.imgURL}
//               onChange={(e) =>
//                 setFormData({ ...formData, imgURL: e.target.value })
//               }
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="model" className="form-label">
//               Model:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="model"
//               id="model"
//               value={formData.model}
//               onChange={(e) =>
//                 setFormData({ ...formData, model: e.target.value })
//               }
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="year" className="form-label">
//               Year:
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               name="year"
//               id="year"
//               value={formData.year}
//               onChange={(e) =>
//                 setFormData({ ...formData, year: parseInt(e.target.value) })
//               }
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="color" className="form-label">
//               Color:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="color"
//               id="color"
//               value={formData.color}
//               onChange={(e) =>
//                 setFormData({ ...formData, color: e.target.value })
//               }
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="price" className="form-label">
//               Price:
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               name="price"
//               id="price"
//               value={formData.price}
//               onChange={(e) =>
//                 setFormData({ ...formData, price: parseInt(e.target.value) })
//               }
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="fuelType" className="form-label">
//               Fuel Type:
//             </label>
//             <select
//               name="fuelType"
//               id="fuelType"
//               className="form-select"
//               onChange={(e) =>
//                 setFormData({ ...formData, fuelType: e.target.value })
//               }
//               value={formData.fuelType}
//               required
//             >
//               <option value="">None Selected</option>
//               <option value="petrol">Petrol</option>
//               <option value="diesel">Diesel</option>
//               <option value="electric">Electric</option>
//               <option value="hybrid">Hybrid</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="transmission" className="form-label">
//               Transmission:
//             </label>
//             <select
//               name="transmission"
//               id="transmission"
//               className="form-select"
//               onChange={(e) =>
//                 setFormData({ ...formData, transmission: e.target.value })
//               }
//               value={formData.transmission}
//               required
//             >
//               <option value="">None Selected</option>
//               <option value="manual">Manual</option>
//               <option value="automatic">Automatic</option>
//               <option value="cvt">Cvt</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="mileage" className="form-label">
//               Mileage:
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               name="mileage"
//               id="mileage"
//               value={formData.mileage}
//               onChange={(e) =>
//                 setFormData({ ...formData, mileage: parseInt(e.target.value) })
//               }
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="features" className="form-label">
//               Features
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="features"
//               id="features"
//               value={formData.features.join(", ")}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   features: e.target.value.split(",").map((f) => f.trim()),
//                 })
//               }
//               required
//             />
//           </div>

//           <div className="mb-3 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               name="isAvailable"
//               id="isAvailable"
//               checked={formData.isAvailable}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   isAvailable: e.target.checked,
//                 })
//               }
//             />
//             <label htmlFor="isAvailable" className="form-check-label">
//               Available for Purchase
//             </label>
//           </div>

//           <button type="submit" className="btn btn-primary">
//             {isEditMode ? "Save Changes" : "Add Car"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Form({ isEditMode = true }) {
  const [formData, setFormData] = useState({
    make: "",
    imgURL: "",
    model: "",
    year: "",
    color: "",
    price: "",
    fuelType: "",
    transmission: "",
    mileage: "",
    features: [],
    isAvailable: false,
  });
  const [submitError, setSubmitError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error, refetch } = useFetch(
    isEditMode ? `https://playground-037-backend.vercel.app/cars/${id}` : null
  );

  useEffect(() => {
    if (isEditMode && data) {
      setFormData({
        make: data?.make || "",
        imgURL: data?.imgURL || "",
        model: data?.model || "",
        year: data?.year || "",
        color: data?.color || "",
        price: data?.price || "",
        fuelType: data?.fuelType || "",
        transmission: data?.transmission || "",
        mileage: data?.mileage || "",
        features: data?.features || [],
        isAvailable: data?.isAvailable || false,
      });
    }
  }, [isEditMode, id, data]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError(null);

    // Create a copy of the form data with parsed numeric values
    const formDataToSubmit = {
      ...formData,
      year: formData.year ? parseInt(formData.year) : null,
      price: formData.price ? parseInt(formData.price) : null,
      mileage: formData.mileage ? parseInt(formData.mileage) : null
    };

    console.log("Submitting data:", formDataToSubmit);

    try {
      if (isEditMode) {
        const response = await fetch(`https://playground-037-backend.vercel.app/cars/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSubmit),
        });

        console.log("Edit response status:", response.status);
        
        if (response.ok) {
          navigate(`/details/${id}`);
        } else {
          const errorData = await response.json();
          console.error("Error updating car:", errorData);
          setSubmitError(errorData.message || "Failed to update car details");
        }
      } else {
        const response = await fetch(`https://playground-037-backend.vercel.app/cars`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSubmit),
        });

        console.log("Post response status:", response.status);
        
        if (response.ok) {
          const responseData = await response.json();
          console.log("Successfully added car:", responseData);
          navigate("/");
        } else {
          const errorData = await response.json();
          console.error("Error adding car:", errorData);
          setSubmitError(errorData.message || "Failed to add new car");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(error.message || "An error occurred while submitting the form");
    }
  }

  return (
    <div className="card shadow border-0">
      <div className="card-body p-4">
        <h2 className="card-title mb-4">
          {isEditMode ? "Edit Car Details" : "Post New Car"}
        </h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {submitError && <div className="alert alert-danger">{submitError}</div>}
        {loading && <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="make" className="form-label">
              Make:
            </label>
            <input
              type="text"
              className="form-control"
              name="make"
              id="make"
              placeholder="e.g., Toyota, Honda, BMW"
              value={formData.make}
              onChange={(e) =>
                setFormData({ ...formData, make: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="imgURL" className="form-label">
              Image URL:
            </label>
            <input
              type="text"
              className="form-control"
              name="imgURL"
              id="imgURL"
              placeholder="https://example.com/car-image.jpg"
              value={formData.imgURL}
              onChange={(e) =>
                setFormData({ ...formData, imgURL: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="model" className="form-label">
              Model:
            </label>
            <input
              type="text"
              className="form-control"
              name="model"
              id="model"
              placeholder="e.g., Camry, Civic, X5"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="year" className="form-label">
              Year:
            </label>
            <input
              type="number"
              className="form-control"
              name="year"
              id="year"
              placeholder="e.g., 2022"
              min="1900"
              max="2030"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="color" className="form-label">
              Color:
            </label>
            <input
              type="text"
              className="form-control"
              name="color"
              id="color"
              placeholder="e.g., Red, Blue, Silver"
              value={formData.color}
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              id="price"
              placeholder="e.g., 25000"
              min="0"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fuelType" className="form-label">
              Fuel Type:
            </label>
            <select
              name="fuelType"
              id="fuelType"
              className="form-select"
              onChange={(e) =>
                setFormData({ ...formData, fuelType: e.target.value })
              }
              value={formData.fuelType}
              required
            >
              <option value="">None Selected</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="transmission" className="form-label">
              Transmission:
            </label>
            <select
              name="transmission"
              id="transmission"
              className="form-select"
              onChange={(e) =>
                setFormData({ ...formData, transmission: e.target.value })
              }
              value={formData.transmission}
              required
            >
              <option value="">None Selected</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
              <option value="cvt">CVT</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="mileage" className="form-label">
              Mileage:
            </label>
            <input
              type="number"
              className="form-control"
              name="mileage"
              id="mileage"
              placeholder="e.g., 15000"
              min="0"
              value={formData.mileage}
              onChange={(e) =>
                setFormData({ ...formData, mileage: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="features" className="form-label">
              Features (comma-separated)
            </label>
            <input
              type="text"
              className="form-control"
              name="features"
              id="features"
              placeholder="e.g., Sunroof, Navigation, Bluetooth, Backup Camera"
              value={formData.features.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: e.target.value.split(",").map((f) => f.trim()).filter(f => f !== ""),
                })
              }
              required
            />
            <small className="text-muted">Enter features separated by commas</small>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="isAvailable"
              id="isAvailable"
              checked={formData.isAvailable}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isAvailable: e.target.checked,
                })
              }
            />
            <label htmlFor="isAvailable" className="form-check-label">
              Available for Purchase
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            {isEditMode ? "Save Changes" : "Add Car"}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary ms-2"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Form({ isEditMode }) {
  const [data, setData] = useState({
    make: "",
    imgURL: "",
    model: "",
    year: null,
    color: "",
    price: null,
    fuelType: "",
    transmission: "",
    mileage: null,
    features: [],
    isAvailable: false,
  });
  const { id } = useParams();

  useEffect(() => {
    if (condition) {
        const {}=useFetch()
    }
  })

  return <div>Form</div>;
}

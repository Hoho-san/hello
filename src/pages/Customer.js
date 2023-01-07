import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";

export default function Customer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState();

  useEffect(() => {
    const url = baseUrl + "/api/customers/" + id;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          // redirect to 404 page
          setNotFound(true);
          // render a 404 component on this page
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  });

  return (
    <>
      {notFound ? <NotFound /> : null}
      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded"
        onClick={(e) => {
          const url = baseUrl + "api/customers/" + id;
          fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Something went wrong");
              }
              // assume things goes well
              navigate("/customers");
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Delete
      </button>
      <br />
      <Link to="/customers">Back</Link>
    </>
  );
}

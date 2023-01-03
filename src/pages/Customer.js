import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";

export default function Customer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState();

  useEffect(() => {
    console.log("UseEffect here");
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
      <Link to="/customers">Back</Link>
    </>
  );
}

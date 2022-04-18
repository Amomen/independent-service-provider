// import useCustomHook from "../../../useHooks/useCustomHook";
import { useEffect, useState } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // [services, setServices] = useCustomHook();
  return (
    <section>
      <div className="container">
        <h2 className="text-center font-semibold">Online Courses</h2>
        <div className="row">
          {services.map((service) => (
            <ServiceDetails
            service={service}
              key={service.id}
            ></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

import React, { useState, useEffect } from "react";
import Cards from "../partials/cards";
import Pagination from "../partials/pagination";
import { fechships } from "../../services/fetchShips";
const Ships = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemstPerPage] = useState(5);

  useEffect(() => {
    const getShips = () => {
      setLoading(true);
      fechships.ships().then(res => {
        setShips(res);
        setLoading(false);
      });
    };
    getShips();
  }, []);

  const indexOfLastShip = currentPage * itemsPerPage;
  const indexOfFirstShip = indexOfLastShip - itemsPerPage;
  const curentShips = ships.slice(indexOfFirstShip, indexOfLastShip);
  console.log(curentShips);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Ships</h1>
      <Cards ships={curentShips} loading={loading} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={ships.length} />
    </div>
  );
};

export default Ships;

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const BackComponents = () => {
  return (
    <div>
      <Link to="/">
        <button className="bg-blue-600 text-white text-sm hover:bg-blue-800 rounded-md py-2 px-3 mb-3">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
      </Link>
    </div>
  );
};

export default BackComponents;

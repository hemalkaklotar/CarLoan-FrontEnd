import React from "react";
import { Link } from "react-router-dom";

const DocumentVerification = () => {
  return (
    <div className="card mt-2">
      <div className="p-3">
        <Link to="/leadRequest/document-verification">
          <span style={{ color: "var(--color-dark-200)" }}>
            Document Verification
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DocumentVerification;

import React from "react";

import styles from "./ResumeInputControl.module.css";

function ResumeInputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
       {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default ResumeInputControl;
import React from "react";
import "../Style/Footer.css";

import nis_logo from "../Images/NIS_logo.png";
import mootcourt_logo from "../Images/mootcourt_logo.jpeg";
import girlupnis_logo from "../Images/girlupnis_logo.jpeg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <h6>Moot Court Kazakhstan for High School</h6>
      <div className="footer-contacts">
        <p>{t("footer-email")}</p>
        <p>{t("footer-phone-number")}</p>
        <p>{t("footer-instagram")}</p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
    const { BgColor, Social } = props;
    return (
        <footer className={`${BgColor} mt-5  h-25`}>
            <div className="h-100 d-flex flex-column justify-content-center">
                <p className="h5 text-center text-white">Sígueme</p>
                <div className="container d-flex justify-content-center">
                    {Social.map((s) => (
                        <a href={s.url} target="_blank" rel="noopener noreferrer" key={s.url}>
                            <i className={`${s.icono} h4 text-white m-3`} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    BgColor: PropTypes.string.isRequired,
    Social: PropTypes.arrayOf.isRequired,
};

export default Footer;

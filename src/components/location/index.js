import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="point"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124020.55015772808!2d-96.8358368471167!3d32.778857401636785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2sMagnolia+Dallas+Downtown!5e0!3m2!1sru!2sru!4v1554324452553!5m2!1sru!2sru"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen/>
        <div className="location_tag">
          <div>Location</div>
        </div>

    </div>
  );
};

export default Location;

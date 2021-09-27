import PropTypes from "prop-types";

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;
  const { strBiographyES, strStyle, strArtistThumb } = info;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista:
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="logo artista" />
        <p className="card-text">Genero:{strStyle}</p>
        <h2 className="card-text">Biografia:</h2>
        <p className="card-text">{strBiographyES}</p>
        <p className="card-text">
          <a
            href={`https://${info.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${info.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${info.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};
Info.propTypes = {
  info: PropTypes.object.isRequired,
};
export default Info;

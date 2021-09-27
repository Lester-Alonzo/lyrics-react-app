import PropTypes from "prop-types";

const Cancion = ({ letra }) => {
  if (letra.length === 0) return null;
  return (
    <>
      <h2>Letra de Cancion:</h2>
      <div className="letra">{letra}</div>
    </>
  );
};
Cancion.propTypes = {
  letra: PropTypes.string.isRequired,
};
export default Cancion;

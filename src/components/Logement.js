import React from "react";

function Logement() {
  return (
    <div className="explorer">
      <h3 className="logement__title">
        Le dépaysement à deux pas de chez vous
      </h3>
      <p className="logement__p">Trouvez votre nouveau chez vous.</p>
      <p className="logement__p">
        Découvrez des logements parfaits pour vivre, travailler ou se détendre.
      </p>
      <button className="logement__btn">
        <a href="/" className="logement__lien">
          Explorer les alentours
        </a>
      </button>
    </div>
  );
}

export default Logement;

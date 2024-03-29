import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  //Validamos si el argumento recibido no se encuentra, entonces carga "/"
  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  const { id, superhero, alter_ego, first_appearance, characters, publisher } =
    hero;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${id}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b> Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b> Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b> Fisrt Appearance: </b> {first_appearance}
          </li>
        </ul>
        <h5>Character</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

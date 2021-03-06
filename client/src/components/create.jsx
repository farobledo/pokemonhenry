import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes, cleanPokeModify } from "../redux/actions";
import { validate } from "../validators/validateCreateForm";
import ButtonCreate from "./buttonCreate";
import create from "./create.module.css";
import { useNavigate } from "react-router-dom";
import thunder from "../images/thunder.png";
import imgPokemons from "../images/pokemon/picachu2.jpg";

const Create = () => {
  const dispatch = useDispatch();
  const stateRedux = useSelector((state) => state);
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState({});
  const [newPokemon, setNewPokemon] = React.useState({
    name: "",
    life: "",
    defense: "",
    atack: "",
    speed: "",
    weight: "",
    height: "",
    type: [],
    id: stateRedux.pokeModify.id,
  });

  React.useEffect(() => {
    dispatch(getTypes());
    return () => {
      dispatch(cleanPokeModify());
    };
  }, [dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).length === 0) {
      let newInfo = event.currentTarget;
      let div = document.createElement("div");
      div.textContent = `Pokemon Created!!`;
      div.style.color = "#FFE400";
      div.style.fontSize = "2rem";
      div.style.fontFamily = "Staatliches, cursive";
      div.style.textShadow =
        "1px 0 0 var(--blue), -1px 0 0 var(--blue), 0 1px 0 var(--blue), 0 -1px 0 var(--blue), 0.5px 0.5px var(--blue), -0.5px -0.5px 0 var(--blue), 0.5px -0.5px 0 var(--blue), -0.5px 0.5px 0 var(--blue)";
      newInfo.insertAdjacentElement("afterend", div);
      dispatch(createPokemon(newPokemon));
      navigate("/home");
    } else {
      let newInfo = event.currentTarget;
      let div = document.createElement("div");
      div.textContent = `Please read the errors and fill in the necessary fields`;
      div.style.color = "#FFE400";
      div.style.fontSize = "2rem";
      div.style.fontFamily = "Staatliches, cursive";
      div.style.textShadow =
        "1px 0 0 var(--blue), -1px 0 0 var(--blue), 0 1px 0 var(--blue), 0 -1px 0 var(--blue), 0.5px 0.5px var(--blue), -0.5px -0.5px 0 var(--blue), 0.5px -0.5px 0 var(--blue), -0.5px 0.5px 0 var(--blue)";
      newInfo.insertAdjacentElement("afterend", div);
    }
  };

  const handleSubmit = (event) => {
    setNewPokemon({
      ...newPokemon,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...newPokemon,
        [event.target.name]: event.target.value,
      })
    );
  };

  const selectType = (event) => {
    if (event.currentTarget.checked) {
      let newType = [event.target.value];
      setNewPokemon({
        ...newPokemon,
        type: [...newPokemon.type, ...newType],
      });
      setErrors(
        validate({
          ...newPokemon,
          type: [...newPokemon.type, ...newType],
        })
      );
    } else {
      setNewPokemon({
        ...newPokemon,
        type: newPokemon.type.filter((elem) => elem !== event.target.value),
      });
      setErrors(
        validate({
          ...newPokemon,
          type: newPokemon.type.filter((elem) => elem !== event.target.value),
        })
      );
    }
  };

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <div className={create.containCreate}>
        <div className={create.font}></div>
        <img src={thunder} className={create.thunder} alt="" />
        <img src={imgPokemons} className={create.imgPokemons} alt="" />
        <form onSubmit={onSubmit} className={create.form}>
          <div className={create.btn}>
            <button className={create.btn3} onClick={handleClick}>
              Salir Home
            </button>
          </div>
          <h1 className={create.btn1}>Crear Pokemon</h1>
          <div className={create.name}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                value={newPokemon.name}
                name="name"
                placeholder={stateRedux.pokeModify.name || ""}
                onChange={handleSubmit}
                className={errors.name && create.danger}
                required
              />
              {errors.name && <p className={create.danger}>{errors.name}</p>}
            </div>
            <div className={create.file}>
              <label htmlFor="file">Imagen:</label>
              <input
                type="text"
                id="img"
                value={newPokemon.img}
                name="img"
                placeholder={stateRedux.pokeModify.img || ""}
                onChange={handleSubmit}
                className={errors.name && create.danger}
                required
              />
            </div>
          </div>
          <div className={create.containInputs}>
            <div className={create.inputs}>
              <div>
                <label htmlFor="atack">Ataque:</label>
                <input
                  type="number"
                  id="atack"
                  value={newPokemon.atack}
                  name="atack"
                  placeholder={stateRedux.pokeModify.atack || ""}
                  onChange={handleSubmit}
                  className={errors.atack && create.danger}
                  required
                />
                {errors.atack && (
                  <p className={create.danger}>{errors.atack}</p>
                )}
              </div>
              <div>
                <label htmlFor="defense">Defenza:</label>
                <input
                  type="number"
                  id="defense"
                  value={newPokemon.defense}
                  name="defense"
                  placeholder={stateRedux.pokeModify.defense || ""}
                  onChange={handleSubmit}
                  className={errors.defense && create.danger}
                  required
                />
                {errors.defense && (
                  <p className={create.danger}>{errors.defense}</p>
                )}
              </div>
              <div>
                <label htmlFor="height">Altura:</label>
                <input
                  type="number"
                  id="height"
                  value={newPokemon.height}
                  name="height"
                  placeholder={stateRedux.pokeModify.height || ""}
                  onChange={handleSubmit}
                  className={errors.height && create.danger}
                  required
                />
                {errors.height && (
                  <p className={create.danger}>{errors.height}</p>
                )}
              </div>
              <div>
                <label htmlFor="weight">Peso:</label>
                <input
                  type="number"
                  id="weight"
                  value={newPokemon.weight}
                  name="weight"
                  placeholder={stateRedux.pokeModify.weight || ""}
                  onChange={handleSubmit}
                  className={errors.weight && create.danger}
                  required
                />
                {errors.weight && (
                  <p className={create.danger}>{errors.weight}</p>
                )}
              </div>
              <div>
                <label htmlFor="life">Vida:</label>
                <input
                  type="number"
                  id="life"
                  value={newPokemon.life}
                  name="life"
                  placeholder={stateRedux.pokeModify.life || ""}
                  onChange={handleSubmit}
                  className={errors.life && create.danger}
                  required
                />
                {errors.life && <p className={create.danger}>{errors.life}</p>}
              </div>
              <div>
                <label htmlFor="speed">Velocidad:</label>
                <input
                  type="number"
                  id="speed"
                  value={newPokemon.speed}
                  name="speed"
                  placeholder={stateRedux.pokeModify.speed || ""}
                  onChange={handleSubmit}
                  className={errors.speed && create.danger}
                  required
                />
                {errors.speed && (
                  <p className={create.danger}>{errors.speed}</p>
                )}
              </div>
            </div>
          </div>
          <div className={create.containTypes}>
            <h5>Tipo o Tipos</h5>
            <div className={create.types}>
              {stateRedux.types.map((elem) => (
                <div key={elem} className={create.type}>
                  <label htmlFor={elem}>{elem}</label>
                  <input
                    type="checkbox"
                    name="type"
                    id={elem}
                    value={elem}
                    onChange={selectType}
                    className={errors.type && create.danger}
                  />
                </div>
              ))}
              {errors.type && <p className={create.danger}>{errors.type}</p>}
            </div>
          </div>

          <ButtonCreate />
        </form>
      </div>
    </>
  );
};

export default Create;

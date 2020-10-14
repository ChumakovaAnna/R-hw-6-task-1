import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function Form({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    zone: ""
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "zone" && (Number(value) > 12 || Number(value) < -12)) {
      console.log("Временная зона указана некорректно");
    }
    setForm(prevForm => ({...prevForm, [name]: value}));
  };
  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (form.name !== "" && form.value !== "") {
      const clock = {
        id: nanoid(),
        name: form.name,
        zone: form.zone,
      }

      onSubmit(clock);
      setForm({
        name: "",
        zone: ""
      });
    }
  };

  return (
    <div>
      <form name="clockAdd" className="form">
        <div className="input">
          <label className="label" htmlFor="name">Название</label>
          <input name="name" onChange={handleChange} value={form.name}></input>
        </div>
        <div className="input">
          <label className="label" htmlFor="zone">Временная зона</label>
          <input name="zone" type="number" onChange={handleChange} value={form.zone}></input>
        </div>
        <button className="button" onClick={handleSubmit}>Добавить</button>
      </form>
    </div>
  );
}

export default Form;
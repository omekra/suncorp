import React, { useEffect, useState } from "react";

function Form({ incidents, descriptions }) {
  const [state, setState] = useState({
    matches: window.matchMedia("(min-width: 768px)").matches,
  });

  useEffect(() => {
    const handler = (e) => setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }, [state]);

  return (
    <form className="form shadow-1 mt-2" action="post">
      <h1>Firstly, tell us a bit about what happened</h1>
      <div className="alert">
        <div className="alert__icon">
          <span className="material-symbols-outlined">error</span>
        </div>
        <p className="alert__message">
          Please ensure everyone is safe before starting any claim - dial 000 if
          required.
        </p>
      </div>

      <section>
        <h3>When did the incident occur?</h3>
        <div className="container">
          <div className="container__row">
            <div className="container__col-sm-12 container__col-md-6">
              <div className="form-question">
                <label className="form-label" htmlFor="dateOfEvent">
                  Date of event
                </label>
                <input
                  className="form-input"
                  id="dateOfEvent"
                  type="date"
                  tabIndex="1"
                />
              </div>
            </div>
            <div className="container__col-sm-12 container__col-md-6">
              <div className="form-question">
                <label className="form-label" htmlFor="approximateTime">
                  Approximate time
                </label>
                <input
                  className="form-input"
                  id="approximateTime"
                  type="time"
                  tabIndex="2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>What type of incident occurred</h3>
        <fieldset>
          <legend className="text-error">
            Were there multiple incidents? Get help narrowing down
          </legend>
          <div className="container">
            <ul className="container__row">
              {incidents &&
                incidents.map((incident) => (
                  <li
                    key={incident.id}
                    className="container__col-sm-12 container__col-md-6 container__col-lg-4"
                  >
                    <div className="form-question form-question--radio-card shadow-1">
                      <input
                        type="radio"
                        id={incident.id}
                        name="incidentType"
                        value={incident.id}
                        tabIndex={incident.id}
                      />
                      <label
                        htmlFor={incident.id}
                        className="pointer d-flex flex-column"
                      >
                        <span className="material-symbols-outlined p-1">
                          {incident.icon}
                        </span>
                        <small className="mt-1">{incident.type}</small>
                      </label>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </fieldset>
      </section>

      <fieldset className="mt-1">
        <h5>Was the damage caused by weather or natural event?</h5>
        <div className="container">
          <ul className="container__row">
            <li className="container__col-sm-12 container__col-md-4">
              <div className="form-question form-question--radio-card shadow-1">
                <input
                  type="radio"
                  id="true"
                  name="incident-cause"
                  value="true"
                  tabIndex="9"
                />
                <label htmlFor="true" className="pointer d-flex flex-column">
                  <small>True</small>
                </label>
              </div>
            </li>
            <li className="container__col-sm-12 container__col-md-4">
              <div className="form-question form-question--radio-card shadow-1">
                <input
                  type="radio"
                  id="false"
                  name="incident-cause"
                  value="false"
                  tabIndex="10"
                />
                <label htmlFor="false" className="pointer d-flex flex-column">
                  <small>False</small>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </fieldset>

      <fieldset className="mt-1">
        <h3>Select the option that best describes what happened:</h3>
        <div className="container">
          <ul className="container__row">
            {descriptions &&
              descriptions.map((description, index) => (
                <li
                  key={description.id}
                  className="container__col-sm-12 container__col-md-6"
                >
                  <div
                    className={`form-question form-question--radio border-top p-1 ${
                      index === 2 || index === 3 ? "border-bottom" : ""
                    } ${!state.matches && index === 2 && "border-bottom-0"}`}
                  >
                    <input
                      type="radio"
                      id={description.id}
                      name="incident-description"
                      value={description.id}
                      tabIndex={description.id}
                    />
                    <label htmlFor={description.id} className="pointer">
                      <small>{description.text}</small>
                    </label>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </fieldset>

      <section className="mt-2">
        <div className="d-flex justify-content-between">
          <button className="btn">
            <span className="material-symbols-outlined btn__icon__left">
              chevron_left
            </span>
            <span>Back</span>
          </button>
          <button className="btn btn--success" type="submit">
            <span>Next</span>
            <span className="material-symbols-outlined btn__icon__right">
              chevron_right
            </span>
          </button>
        </div>
      </section>
    </form>
  );
}

export default Form;

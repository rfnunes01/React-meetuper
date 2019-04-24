import React from 'react';
import { Link } from 'react-router-dom';
import './PageLogin.scss';
import { Field, Form } from 'react-final-form';
import { validate } from '../../utils/finalFormValidate';

const PageLogin = () => {
  const onSubmit = (values, formApi) => {
    console.log('Submit form ;D', values);
  };
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box">
              <figure className="avatar">
                <img src="https://placehold.it/128x128" />
              </figure>
              <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <Field
                          name="email"
                          component="input"
                          type="email"
                          label="Email"
                        >
                          {({ input, meta }) => (
                            <div>
                              <label>Email</label>
                              <input
                                className="input is-large"
                                type="text"
                                {...input}
                                placeholder="Email"
                              />
                              {meta.touched && meta.error && (
                                <div className="form-error">
                                  <span>{meta.error}</span>
                                  <span className="help is-danger">
                                    Email is required
                                  </span>
                                  <span className="help is-danger">
                                    Email address is not valid
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <Field
                          name="password"
                          component="input"
                          label="Password"
                        >
                          {({ input, meta }) => (
                            <div>
                              <label>Password</label>
                              <input
                                className="input is-large"
                                type="password"
                                {...input}
                                placeholder="Password"
                              />
                              {meta.touched && meta.error && (
                                <div className="form-error">
                                  <span>{meta.error}</span>
                                  <span className="help is-danger">
                                    Password is required
                                  </span>
                                  <span className="help is-danger">
                                    Password is not valid
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="button is-block is-info is-large is-fullwidth"
                    >
                      Login
                    </button>
                  </form>
                )}
              />
            </div>
            <p className="has-text-grey">
              <a>Sign In With Google</a> &nbsp;·&nbsp;
              <Link to="/register">Sign Up</Link> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLogin;
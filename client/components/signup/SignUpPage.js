import React from 'react';

class SignUpPage extends React.Component {

      render() {
            return (
                  <form onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label>
                              Email:
                      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                        </label>
                        <label>
                              Password:
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                        </label>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                  </form>
            );

      }
}
export default SignUpPage;
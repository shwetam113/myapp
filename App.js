import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: users
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _users = _users.filter(function(user) {
        return user.name.toLowerCase().match(search);
      });
    }
    return (
       <div>
        <h3>Search</h3>
        <div>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="type name here"
          />
          <ul>
            {_users.map(l => {
              return (
                <Table striped bordered hover>
                <thead >
                  <tr>
                  <th>Name</th>
                  <th>Email Address</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
              <td> 
                <li> {l.name} 
                  </li>
                  </td>
                  <td>
                 <li> <a href="#">{l.email}</a>
                   </li> 
                  </td>
            </tr>
                </tbody>
                </Table>
                //<li>
                  //{l.name} <a href="#">{l.email}</a>
               // </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
          }
        };
var users = [
  {
    name: "Shweta Menon",
    email: "shweta.m113@gmail.com"
  },
  {
    name: "Navya Jaideep",
    email: "navyajaideep@gmail.com"
},
{
  name: "Ann Eapen",
  email: "anneapen@gmail.com"
},
{
  name: "Sherin Rasheed",
  email: "sherinrasheed@gmail.com"
},
{
  name: "Renuka S",
  email: "renukas@gmail.com"
},
{
  name: "Krishna Pillai",
  email: "krishnap@gmail.com"
},
{
  name: "Namrata Tripathi",
  email: "namtrip@gmail.com"
},
{
  name: "Navya Dennis",
  email: "navyadennis@gmail.com"
},
{
  name: "Krishna Manoj",
  email: "krishnam@gmail.com"
},
{
  name: "Farsana N A",
  email: "farsana.na@gmail.com"
}

]
//ReactDOM.render(<App />, document.getElementById("App"));
        export default App;
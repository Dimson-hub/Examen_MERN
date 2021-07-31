import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = props => (
  <tr>
    <td><img src={props.user.photo} alt="photoo" style={{ width: "50px", clipPath: "circle()", marginRight: "10px" }} />{props.user.username}</td>
    <td style={{ padding: "25px 12px" }}>{props.user.gender}</td>
    <td style={{ padding: "25px 12px" }}>{props.user.dob.substring(0, 10)}</td>
    <td style={{ padding: "25px 12px" }}>{props.user.news === true ? "true" : "false"}</td>
    <td style={{ padding: "25px 12px" }}>{props.user.email}</td>
    <td style={{ padding: "25px 12px" }}>
      <Link to={"/edit/" + props.user._id} style={{ color: "#343A40" }}><FontAwesomeIcon icon="edit" /></Link > | <a href="/" onClick={() => { props.deleteUser(props.user._id) }} style={{ color: "#343A40" }}><FontAwesomeIcon icon="trash-alt" /></a> | <Link to={"/details/" + props.user._id} style={{ color: "#343A40" }}><FontAwesomeIcon icon="info-circle" /></Link>
    </td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this)

    this.state = { users: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users?page=0')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id} />;
    })
  }

  render() {
    return (
      <div>
        <div class="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold " style={{ color: "#343A40" }}>DataTables Users</h6>
          </div>
          <div className="card-body">
            <div className="row" style={{ display: "inline", paddingBottom: "200px" }}>
              <div className="col-sm-12 col-md-6" style={{ display: "inline" }} ><h3 style={{ display: "inline" }}>Logged Users</h3></div>
              <div  style={{ display: "inline"}}><input type="search" className="light-table-filter form-control" data-table="order-table" placeholder="Search..." style={{ float: "right", marginBottom: "10px", display: "inline", boxSizing:"border-box", width:"20%", input_type_text:{width:"300%",padding:"12px 20px",margin:"8px 0"}}}></input></div>
            </div>
            <table className="order-table table table-bordered dataTable">
              <thead className="thead-light">
                <tr>
                  <th>User</th>
                  <th>Gender</th>
                  <th>Date of birth</th>
                  <th>news</th>
                  <th>Email</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.userList()}
              </tbody>
              <tfoot className="thead-light">
                <tr>
                  <th>User</th>
                  <th>Gender</th>
                  <th>Date of birth</th>
                  <th>news</th>
                  <th>Email</th>

                  <th>Actions</th>
                </tr>
              </tfoot>
            </table>
            
          </div>
        </div>
      </div>
    )
  }
}


(function (document) {


  var LightTableFilter = (function (Arr) {

    var _input;

    function _onInputEvent(e) {
      _input = e.target;
      var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
      Arr.forEach.call(tables, function (table) {
        Arr.forEach.call(table.tBodies, function (tbody) {
          Arr.forEach.call(tbody.rows, _filter);
        });
      });
    }

    function _filter(row) {
      var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
      row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
    }

    return {
      init: function () {
        var inputs = document.getElementsByClassName('light-table-filter');
        Arr.forEach.call(inputs, function (input) {
          input.oninput = _onInputEvent;
        });
      }
    };
  })(Array.prototype);

  document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
      LightTableFilter.init();
    }
  });

})(document);
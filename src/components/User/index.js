import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import ReactPaginate from "react-paginate";

import axios from "axios";
import { METHODS } from "../../services/api";
import "./styles.scss";
import { toast } from "react-toastify";
import MerakiCreateRoom from "../CreateChatRoom/index";
import { Select } from "@material-ui/core";

function User() {
  const user = useSelector(({ User }) => User);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalCount, setTotalCount] = useState();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedText] = useDebounce(searchTerm, 400);
  const limit = 10;

  const [allClasses, setAllClasses] = useState([]);

  const lang = { en: "English", hi: "Hindi", sp: "Spoken English" };

  useEffect(() => {
    axios({
      method: METHODS.GET,
      url: `${process.env.REACT_APP_MERAKI_URL}/chat/rooms`,
      headers: {
        accept: "application/json",
        Authorization: user.data.token,
      },
    }).then((res) => {
      setAllClasses(res.data);
    });
    axios({
      method: METHODS.GET,
      url: `${process.env.REACT_APP_MERAKI_URL}/users?${
        searchTerm.length > 0
          ? `search=${searchTerm}`
          : `limit=${limit}&page=${pageNumber + 1}`
      }`,
      headers: {
        accept: "application/json",
        Authorization: user.data.token,
      },
    }).then((res) => {
      setUsers(res.data.users);
      setTotalCount(res.data.users.length);
    });
  }, [debouncedText, pageNumber]);

  const changeHandler = async (e, email) => {
    const roomId = e.target.value;
    const notify = () => {
      const roomAlias = allClasses.filter((c) => {
        return c.room_id === roomId;
      });
      const chatRoomName =
        lang[roomAlias[0].room_alias.split("meraki")[1].substr(0, 2)] +
        " Class - " +
        roomAlias[0].room_alias
          .split(":navgurukul.org")[0]
          .split("meraki")[1]
          .split("class")[1];
      toast.success(`Added ${email} to ${chatRoomName} successfully!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2500,
      });
    };

    return axios({
      method: METHODS.POST,
      url: `${process.env.REACT_APP_MERAKI_URL}/chat/addUser/${roomId}?email=${email}`,
      headers: {
        accept: "application/json",
        Authorization: user.data.token,
      },
    }).then(() => {
      notify();
    });
  };

  const pageCount = Math.ceil(totalCount / limit);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {/* <div className="create-room">
        <MerakiCreateRoom />
      </div> */}
      <div className="table-container">
        <div className="container-for-search">
          <div>
            <input
              className="search-box"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          <div className="last-item">
            <ReactPaginate
              previousLabel={<i className="fa fa-angle-left"></i>}
              nextLabel={<i className="fa fa-angle-right"></i>}
              initialPage={0}
              marginPagesDisplayed={0}
              onPageChange={changePage}
              pageCount={pageCount}
              containerClassName="paginationBttns"
              previousLinkClassName="previousBttn"
              nextLinkClassName="nextBttn"
              disabledClassName="paginationDisabled"
              activeClassName="paginationActive"
            />
          </div>
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Joined</th>
              <th>Roles</th>
              <th>Add to Chat</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr>
                  <td data-column="Name">{item.name}</td>
                  <td data-column="Email">{item.email}</td>
                  <td data-column="Joined">{item.created_at.split("T")[0]}</td>
                  <td data-column="Roles">{item.rolesList.join(", ")}</td>
                  <td data-column="Add to Chat">
                    <select
                      className="inputField"
                      onChange={(e) => changeHandler(e, item.email)}
                      value={item.room_id}
                      id="item.room_id"
                      name="roomId"
                    >
                      <option value="" disabled selected>
                        Select a Chat Room{" "}
                      </option>
                      {allClasses.map((item, index) => {
                        const chatRoomName =
                          lang[
                            item.room_alias.split("meraki")[1].substr(0, 2)
                          ] +
                          " Class - " +
                          item.room_alias
                            .split(":navgurukul.org")[0]
                            .split("meraki")[1]
                            .split("class")[1];
                        return (
                          <option key={index} value={item.room_id}>
                            {chatRoomName}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default User;

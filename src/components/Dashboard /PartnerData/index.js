import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { PATHS } from "../../../constant";
import { useSelector } from "react-redux";

function PartnerDashboard() {
  const [pageNumber, setPageNumber] = useState();
  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedText] = useDebounce(searchTerm);
  const user = useSelector(({ User }) => User);

  useEffect(() => {
    axios
      .get(` https://api.merakilearn.org/partners`, {
        headers: { Authorization: user.data.token },
      })
      .then((res) => {
        // console.log(res, "data");
        setPartners(res.data);
      });
  }, []);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  // const pageCount = Math.ceil(partners.length / usersPerPage);

  const pageCount = 5;

  const number = 0;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageLabelBuilder={(page) => page + 5 * number}
        // pageRangeDisplayed={[1, 10]}
        pageCount={pageCount}
        initialPage={0}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

      <div className="table-container">
        <input
          className="Search-box"
          type="text"
          placeholder="Search..."
          value={debouncedText}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <table style={{ marginTop: "30px" }} className="table">
          <thead>
            <tr>
              <th>Partners Name</th>
              <th>Number of students</th>
            </tr>
          </thead>
          <tbody>
            {partners
              .filter((searchValue) => {
                if (searchTerm == "") {
                  return searchValue;
                } else if (
                  searchValue.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return searchValue;
                }
              })
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((item) => {
                return (
                  <tr key={item.id}>
                    <td data-label="Name">
                      <Link
                        className="t-data"
                        to={`${PATHS.PARTNERS}/${item.id}`}
                      >
                        {" "}
                        {item.name}
                      </Link>
                    </td>
                    <td data-label="Total students">{item.users}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default PartnerDashboard;

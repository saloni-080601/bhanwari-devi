import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { PATHS } from "../../../constant";
import { useSelector } from "react-redux";
// import { Sort } from "@material-ui/icons";

function PartnerDashboard() {
  const [pageNumber, setPageNumber] = useState(); //current page
  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ascendingAlphabetically, setAscendingAlphabetically] = useState(true);
  const [ascendingNumerically, setAscendingNumerically] = useState(true);
  const [loading, setLoading] = useState(true);
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

  const Partners = partners.filter((searchValue) => {
    if (searchTerm == "") {
      return searchValue;
    } else if (
      searchValue.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return searchValue;
    }
  });

  const sortByName = () => {
    setAscendingAlphabetically(!ascendingAlphabetically);
    setLoading(true);
  };

  const sortByStudentsNumber = () => {
    setAscendingNumerically(!ascendingNumerically);
    setLoading(false);
  };

  return (
    <>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageLabelBuilder={(page) => page + 5 * number}
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
              <th>
                Partners Name
                <button type="button" onClick={sortByName}>
                  A-Z/Z-A
                </button>
              </th>
              <th>
                Number of students
                <button type="button" onClick={sortByStudentsNumber}>
                  ^
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? ascendingAlphabetically
                ? Partners.slice(pagesVisited, pagesVisited + usersPerPage).map(
                    (item) => {
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
                    }
                  )
                : Partners.reverse()
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
                    })
              : ascendingNumerically
              ? Partners.slice(0)
                  .sort(function (a, b) {
                    return a.users - b.users;
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
                  })
              : Partners.slice(0)
                  .sort(function (a, b) {
                    return a.users - b.users;
                  })
                  .reverse()
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { PATHS } from "../../../constant";
import { useSelector } from "react-redux";
import { BsArrowUpDown } from "react-icons/bs";

function PartnerDashboard() {
  const [pageNumber, setPageNumber] = useState(0); //current page

  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ascendingPartnersNames, setAscendingPartnersNames] = useState(true);
  const [
    ascendingPartnerStudentsNumber,
    setAscendingPartnerStudentsNumber,
  ] = useState(true);
  const [ascendingAlphabetically, setAsscendingAlphabetically] = useState(true);
  const [debouncedText] = useDebounce(searchTerm);
  const user = useSelector(({ User }) => User);

  useEffect(() => {
    axios
      .get(
        // `http://dev-api.navgurukul.org/apiDocs/partners?limit=${100}&page=${
        //   pageNumber + 1
        // }`,
        `https://api.merakilearn.org/partners`,
        {
          headers: { Authorization: user.data.token },
        }
      )
      .then((res) => {
        // console.log(res, "give me 10 data");
        setPartners(res.data);
      });
  }, [pageNumber]);

  const Partners = partners.filter((searchValue) => {
    if (searchTerm == "") {
      return searchValue;
    } else if (
      searchValue.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return searchValue;
    }
  });

  const partnersData = (item) => {
    return (
      <tr key={item.id}>
        <td data-label="Name">
          <Link className="t-data" to={`${PATHS.PARTNERS}/${item.id}`}>
            {" "}
            {item.name}
          </Link>
        </td>
        <td data-label="Total students">{item.users}</td>
      </tr>
    );
  };

  // const number = 0;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const sortByName = () => {
    setAscendingPartnersNames(!ascendingPartnersNames);
    setAsscendingAlphabetically(true);
  };

  const sortByNumber = () => {
    setAscendingPartnerStudentsNumber(!ascendingPartnerStudentsNumber);
    setAsscendingAlphabetically(false);
  };

  // const pagecount = (page, limit = 10) => {
  //   console.log(page,'page')

  //   axios
  //     .get(`http://dev-api.navgurukul.org/apiDocs/partners?limit=${limit}&page=${page}`, {
  //       headers: { Authorization: user.data.token },
  //     })
  //     .then((res) => {
  //       console.log(res, 'llllll=====')
  //       setPartners(res.data);
  //     });

  // }

  return (
    <>
      <div className="table-container">
        <div className="container-for-Search">
          <div>
            <input
              className="Search-box"
              type="text"
              placeholder="Search..."
              value={debouncedText}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          <div className="last-item">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              initialPage={0}
              marginPagesDisplayed={0}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              // pageLabelBuilder={(page) => page + 5 * number}
              // pageRangeDisplayed={5}
              // pageCount={5}

              // onClick={(num)=>{
              //   console.log(num,'num')
              // }}
              // eventListener={'onClick'}
              // onPageActive={(number) => {
              //   console.log(number, 'number--')
              //   // pagecount( number.selected+1)
              // }}
            />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>
                Partners Name
                <button
                  type="button"
                  onClick={sortByName}
                  className="sortNameButton"
                >
                  <BsArrowUpDown />
                </button>
              </th>
              <th>
                Number of students
                <button
                  type="button"
                  onClick={sortByNumber}
                  className="sortButton"
                >
                  <BsArrowUpDown />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {ascendingAlphabetically
              ? ascendingPartnersNames
                ? Partners.map((item) => {
                    return partnersData(item);
                  })
                : Partners.reverse().map((item) => {
                    return partnersData(item);
                  })
              : ascendingPartnerStudentsNumber
              ? Partners.sort(function (a, b) {
                  return b.users - a.users;
                }).map((item) => {
                  return partnersData(item);
                })
              : Partners.sort(function (a, b) {
                  return a.users - b.users;
                }).map((item) => {
                  return partnersData(item);
                })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default PartnerDashboard;

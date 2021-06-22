import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { PATHS } from "../../../constant";
import { useSelector } from "react-redux";
<<<<<<< HEAD
// import { Sort } from "@material-ui/icons";
=======
>>>>>>> 95253538c46c144c032c22b4d7d22083f4595363

function PartnerDashboard() {
  const [pageNumber, setPageNumber] = useState(0); //current page

  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedText] = useDebounce(searchTerm);
  const user = useSelector(({ User }) => User);

  useEffect(() => {
    axios
      .get(
        `http://dev-api.navgurukul.org/apiDocs/partners?limit=${10}&page=${
          pageNumber + 1
        }`,
        {
          headers: { Authorization: user.data.token },
        }
      )
      .then((res) => {
        // console.log(res, "give me 10 data");
        setPartners(res.data);
      });
  }, [pageNumber]);

  // const number = 0;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
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

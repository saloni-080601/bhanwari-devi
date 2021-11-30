import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { METHODS } from "../../../services/api";
import { PATHS } from "../../../constant";
import moment from "moment";
import ReactPaginate from "react-paginate";
import { useDebounce } from "use-debounce";

import "./styles.scss";

function VolunteerOverview(props) {
  const [volunteerData, setvolunteerData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [classes, setClasses] = useState([]);
  const [slicedClasses, setSlicedClasses] = useState();
  const user = useSelector(({ User }) => User);
  const [pageNumber, setPageNumber] = useState(0);
  const [debouncedText] = useDebounce(searchTerm);

  console.log("props", props.location.state.pass);

  const limit = 10;

  const volunteerClassData = props.location.state.pass;
  const pageCount = Math.ceil(volunteerClassData.classes.length / limit);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const lang = { en: "English", hi: "Hindi" };
  let language = "";
  new Set(volunteerClassData.classes.map((item) => item.lang)).forEach(
    (item) => (language = language + lang[item] + ", ")
  );

  useEffect(() => {
    const data = volunteerClassData.classes.filter((searchValue) => {
      if (searchTerm == "") {
        return searchValue;
      } else if (
        searchValue.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return searchValue;
      }
    });
    const slicedData = data.slice(pageNumber * limit, (pageNumber + 1) * limit);
    setClasses(data);
    setSlicedClasses(slicedData);
  }, [debouncedText, pageNumber]);

  return (
    <>
      <div className="volunteer-class-page-container">
        <div className="volunteer-page-heading">
          <div>
            <Link className="home" to={`${PATHS.HOME_PATH}`}>
              {" "}
              Home
            </Link>
          </div>
          <div> / {volunteerClassData.name}</div>
        </div>
        <div className="volunteer-details">
          <p className="volunteer-name">{volunteerClassData.name}</p>
          <p>Python: {language.slice(0, -2)}</p>
          <p>Total Classes: {volunteerClassData.classes.length}</p>
          <p>
            Associated Partner:{" "}
            {volunteerClassData.partner ? volunteerClassData.partner : "NA"}
          </p>
        </div>
        <div>
          <input
            className="volunteer-search-box"
            type="text"
            placeholder="Class title, languange..."
            value={debouncedText}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <table className="volunteer-class-table">
          <thead>
            <tr>
              <th>Class Title</th>
              <th>Class Date</th>
              <th>Class Time</th>
              <th>Student Enrollments</th>
              <th>Language</th>
              <th>Avg. Rating</th>
            </tr>
          </thead>
          <tbody>
            {
              // volunteerClassData &&
              //   volunteerClassData.length > 0 &&
              classes && classes.length > 0 ? (
                slicedClasses.map((item) => {
                  // console.log("item", item.lang);
                  return (
                    <tr key={item.id}>
                      <td data-column="Class Title">{item.title}</td>
                      <td data-column="Class Date">
                        {moment.utc(item.end_time).format("DD-MM-YYYY")}
                      </td>
                      <td data-column="Class Time">
                        {moment
                          .utc(item.start_time)
                          .add(330, "minute")
                          .format("kk:mm")}
                      </td>
                      <td data-column="Enrollments">
                        {item.max_enrollment ? item.max_enrollment : "NA"}
                      </td>
                      <td data-column="Language">{item.lang}</td>
                      <td data-column="Avg. Rating">
                        {[1, 2, 3, 4, 5].map((star) => {
                          return item.avg_rating > 0 &&
                            star <= item.avg_rating ? (
                            <span
                              className="fa fa-star"
                              style={{ color: "#D55F31" }}
                            ></span>
                          ) : (
                            <span
                              className="fa fa-star"
                              style={{ color: "gray" }}
                            ></span>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div className="message ">
                  <h3>There are no results to display...</h3>
                </div>
              )
            }
          </tbody>
        </table>
        <div className="last-item">
          <ReactPaginate
            previousLabel={<i className="fa fa-angle-left"></i>}
            nextLabel={<i className="fa fa-angle-right"></i>}
            initialPage={0}
            marginPagesDisplayed={0}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationBttns"
            previousLinkClassName="previousBttn"
            nextLinkClassName="nextBttn"
            disabledClassName="paginationDisabled"
            activeClassName="paginationActive"
          />
        </div>
      </div>
    </>
  );
}
export default VolunteerOverview;

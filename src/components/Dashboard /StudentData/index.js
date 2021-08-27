import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { METHODS } from "../../../services/api";
import { useDebounce } from "use-debounce";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { BsArrowUpDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.scss";

const getPartnerIdFromUrl = () => {
  let partnerId;
  if (window.location.pathname.includes("partners")) {
    partnerId = window.location.pathname.split("/").pop();
  }
  return partnerId;
};

function StudentData() {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalCount, setTotalCount] = useState();
  const [message, setMessage] = useState("");
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ascendingByStudentName, setAscendingByStudentName] = useState(true);
  const [ascendingByDate, setAscendingByDate] = useState(true);
  const [ascendingByEnrollDate, setAscendingByEnrollDate] = useState(true);
  const [ascendingByLastDate, setAscendingByLastDate] = useState(true);
  const [ascendingByTotalClass, setAscendingByTotalClass] = useState(true);
  const [ascendingByLastClassTitle, setAscendingByLastClassTitle] =
    useState(true);
  const [ascendingByName, setAscendingByName] = useState(true);
  const [ascendingByRating, setAscendingByRating] = useState(true);
  const [ascendingAlphabetically, setAscendingAlphabetically] = useState(true);
  const [ascendingNumerically, setAscendingNumerically] = useState(true);
  const [loading, setLoading] = useState(true);
  const [debouncedText] = useDebounce(searchTerm, 400);
  const user = useSelector(({ User }) => User);

  const limit = 10;

  useEffect(() => {
    let id = getPartnerIdFromUrl();
    axios({
      method: METHODS.GET,
      url: `${process.env.REACT_APP_MERAKI_URL}/partners/${id}/users?${
        searchTerm.length > 0
          ? `name=${searchTerm}`
          : `limit=${limit}&page=${pageNumber + 1}`
      }`,
      headers: { accept: "application/json", Authorization: user.data.token },
    }).then((res) => {
      if (res.data.students.length < 1) {
        setMessage("There are no results to display");
      } else {
        const data = res.data.students.map((item) => {
          return {
            ...item,
            created_at: moment(item.created_at.replace("Z", "")).format(
              "DD-MM-YYYY"
            ),
            classes_registered: item.classes_registered.map((item) => {
              return {
                ...item,
                start_time: moment(item.start_time.replace("Z", "")).format(
                  "DD-MM-YYYY"
                ),
                item,
                end_time: moment(item.end_time.replace("Z", "")).format(
                  "hh:mm a"
                ),
              };
            }),
          };
        });
        setStudents(data);
        setTotalCount(res.data.count);
      }
    });
  }, [debouncedText, pageNumber]);

  const pageCount = Math.ceil(totalCount / limit);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const studentList = students.map((item) => {
    let lastClassTitle =
      item.classes_registered.length > 0 &&
      item.classes_registered[item.classes_registered.length - 1]["title"] != ""
        ? item.classes_registered[item.classes_registered.length - 1]["title"]
        : "NA";
    item.lastClassTitle = lastClassTitle;
    let lastDate =
      item.classes_registered.length > 0 &&
      item.classes_registered[item.classes_registered.length - 1]["start_time"]
        ? item.classes_registered[item.classes_registered.length - 1][
            "start_time"
          ]
        : "NA";
    item.lastDate = lastDate;
    let LastClassTime =
      item.classes_registered.length > 0 &&
      item.classes_registered[item.classes_registered.length - 1]["end_time"]
        ? item.classes_registered[item.classes_registered.length - 1][
            "end_time"
          ]
        : "NA";
    item.LastClassTime = LastClassTime;
    let getStars = 0;
    let totalStarts = item.classes_registered.length * 5;
    item.classes_registered.map((stars) => {
      getStars = getStars + Number(stars.feedback.feedback);
    });
    item.avgClassRating = Math.ceil(getStars / totalStarts);
    if (isNaN(item.avgClassRating)) {
      item.avgClassRating = 0;
    }
    return item;
  });

  const studentData = (item) => {
    return (
      <tr key={item.id}>
        <td data-column="Name">
          <Link
            className="t-data"
            to={{
              pathname: "/student",
              state: {
                pass: item.classes_registered,
                passName: item.name,
              },
            }}
          >
            {item.name}
          </Link>
        </td>
        <td data-column="Enrolled On">{item.created_at}</td>
        <td data-column="Total classes "> {item.classes_registered.length}</td>
        <td data-column="Last class title">{item.lastClassTitle}</td>
        <td data-column="Last class date">{item.lastDate}</td>
        <td data-column="Last class time">{item.LastClassTime}</td>
        <td data-column="Avg Class Rating ">
          {[1, 2, 3, 4, 5].map((star) => {
            return item.avgClassRating > 0 && star <= item.avgClassRating ? (
              <span className="fa fa-star" style={{ color: "#D55F31" }}></span>
            ) : (
              <span className="fa fa-star" style={{ color: "gray" }}></span>
            );
          })}
        </td>
      </tr>
    );
  };

  const sortByStudentsName = () => {
    setAscendingByStudentName(!ascendingByStudentName);
    setAscendingByName(true);
    setAscendingAlphabetically(true);
    setLoading(true);
  };

  const sortByLastClassTitle = () => {
    setAscendingByLastClassTitle(!ascendingByLastClassTitle);
    setAscendingByName(false);
    setAscendingAlphabetically(true);
    setLoading(true);
  };

  const sortByEnrollDate = () => {
    setAscendingByEnrollDate(!ascendingByEnrollDate);
    setAscendingByDate(true);
    setAscendingAlphabetically(false);
    setLoading(true);
  };

  const sortByLastClassDate = () => {
    setAscendingByLastDate(!ascendingByLastDate);
    setAscendingByDate(false);
    setAscendingAlphabetically(false);
    setLoading(true);
  };

  const sortByTotalClass = () => {
    setAscendingByTotalClass(!ascendingByTotalClass);
    setAscendingNumerically(true);
    setLoading(false);
  };

  const sortByRating = () => {
    setAscendingByRating(!ascendingByRating);
    setAscendingNumerically(false);
    setLoading(false);
  };

  const lastDate = studentList.filter((i) => i.lastDate !== "NA");
  const NA = studentList.filter((i) => i.lastDate === "NA");
  lastDate.sort(function (a, b) {
    const dateA = new Date(a.lastDate);
    const dateB = new Date(b.lastDate);
    console.log("lastDate", typeof a.lastDate);
    return dateB - dateA;
  });
  const studentClassLastDate = [...lastDate, ...NA];
  studentList.sort(function (a, b) {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    console.log("studentList", typeof a.created_at);
    return dateB - dateA;
  });
  console.log("lastDate", lastDate);

  return (
    <div className="container-table">
      <div className="container-for-search">
        <div>
          <input
            className="Search-bar"
            type="text"
            placeholder="Search by student Name class"
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
      <table className="student-overview-table">
        <thead>
          <tr>
            <th>
              Students Name
              <button
                type="button"
                onClick={sortByStudentsName}
                className="sort"
              >
                <BsArrowUpDown />
              </button>
            </th>
            <th>
              Enroll date
              <button type="button" onClick={sortByEnrollDate} className="sort">
                <BsArrowUpDown />
              </button>
            </th>
            <th>
              Total Classes Attended
              <button type="button" onClick={sortByTotalClass} className="sort">
                <BsArrowUpDown />
              </button>
            </th>
            <th>
              Last Class Title
              <button
                type="button"
                onClick={sortByLastClassTitle}
                className="sort"
              >
                <BsArrowUpDown />
              </button>
            </th>
            <th>
              Last Class Date
              <button
                type="button"
                onClick={sortByLastClassDate}
                className="sort"
              >
                <BsArrowUpDown />
              </button>
            </th>
            <th>Last Class Time</th>
            <th>
              Avg Class Rating
              <button type="button" onClick={sortByRating} className="sort">
                <BsArrowUpDown />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? ascendingAlphabetically
              ? ascendingByName
                ? ascendingByStudentName
                  ? studentList
                      .slice(0)
                      .sort(function (a, b) {
                        var nameA = a.name.toLowerCase();
                        var nameB = b.name.toLowerCase();
                        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
                      })
                      .map((item) => {
                        return studentData(item);
                      })
                  : studentList
                      .slice(0)
                      .sort(function (a, b) {
                        var nameA = a.name.toLowerCase();
                        var nameB = b.name.toLowerCase();
                        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
                      })
                      .reverse()
                      .map((item) => {
                        return studentData(item);
                      })
                : ascendingByLastClassTitle
                ? studentList
                    .slice(0)
                    .sort(function (a, b) {
                      var titleA = a.lastClassTitle.toLowerCase();
                      var titleB = b.lastClassTitle.toLowerCase();
                      return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
                    })
                    .map((item) => {
                      return studentData(item);
                    })
                : studentList
                    .slice(0)
                    .sort(function (a, b) {
                      var titleA = a.lastClassTitle.toLowerCase();
                      var titleB = b.lastClassTitle.toLowerCase();
                      return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
                    })
                    .reverse()
                    .map((item) => {
                      return studentData(item);
                    })
              : ascendingByDate
              ? ascendingByEnrollDate
                ? studentList.map((item) => {
                    console.log("item", item);
                    return studentData(item);
                  })
                : studentList
                    .slice(0)
                    .sort(function (a, b) {
                      const dateA = new Date(a.created_at);
                      const dateB = new Date(b.created_at);
                      return dateB - dateA;
                    })
                    .reverse()
                    .map((item) => {
                      return studentData(item);
                    })
              : ascendingByLastDate
              ? studentClassLastDate.map((item) => {
                  return studentData(item);
                })
              : studentClassLastDate
                  .slice(0)
                  .sort(function (a, b) {
                    const dateA = new Date(a.lastDate);
                    const dateB = new Date(b.lastDate);
                    return dateB - dateA;
                  })
                  .reverse()
                  .map((item) => {
                    return studentData(item);
                  })
            : ascendingNumerically
            ? ascendingByTotalClass
              ? studentList
                  .slice(0)
                  .sort(function (a, b) {
                    var numberA = a.classes_registered.length;
                    var numberB = b.classes_registered.length;
                    return numberB - numberA;
                  })
                  .map((item) => {
                    return studentData(item);
                  })
              : studentList
                  .slice(0)
                  .sort(function (a, b) {
                    var numberA = a.classes_registered.length;
                    var numberB = b.classes_registered.length;
                    return numberA - numberB;
                  })
                  .map((item) => {
                    return studentData(item);
                  })
            : ascendingByRating
            ? studentList
                .sort(function (a, b) {
                  return b.avgClassRating - a.avgClassRating;
                })
                .map((item) => {
                  return studentData(item);
                })
            : studentList
                .sort(function (a, b) {
                  return a.avgClassRating - b.avgClassRating;
                })
                .map((item) => {
                  return studentData(item);
                })}

          {message ? <h1 className="Message">{message}</h1> : null}
        </tbody>
      </table>
    </div>
  );
}

export default StudentData;

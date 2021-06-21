import React, { useState } from "react";
import "./styles.scss";
import { useDebounce } from "use-debounce";

function StudentClassData(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [ascendingByClass, setAscendingByClass] = useState(true);
  const [ascendingByFacilitator, setAscendingByFacilitator] = useState(true);
  const [loading, setLoading] = useState(true);
  const [debouncedText] = useDebounce(searchTerm);
  const languageMap = {
    hi: "Hindi",
    te: "Telugu",
    en: "English",
    ta: "Tamil",
  };

  const totalClass = props.location.state.pass.filter((searchValue) => {
    if (searchTerm == "") {
      return searchValue;
    } else if (
      searchValue.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return searchValue;
    }
  });

  const sortByClassName = () => {
    setAscendingByClass(!ascendingByClass);
    setLoading(true);
  };

  const sortByClassFacilitator = () => {
    setAscendingByFacilitator(!ascendingByFacilitator);
    setLoading(false);
  };

  return (
    <div className="container-for-table">
      <p className="studentName">
        {" "}
        Total Classes by {props.location.state.passName} :{" "}
        {props.location.state.pass.length}
      </p>
      <input
        className="Search-bar-1"
        type="text"
        placeholder="Search by classes,facilator,language...."
        value={debouncedText}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <table className="student-class-table" style={{ marginTop: "30px" }}>
        <thead>
          <tr>
            <th>
              Class Title
              <button type="button" onClick={sortByClassName}>
                ^
              </button>
            </th>
            <th>Class Id</th>
            <th>
              Facilitator
              <button type="button" onClick={sortByClassFacilitator}>
                ^
              </button>
            </th>
            <th>Language</th>
            <th>Class Date </th>
            <th>Class Rating </th>
          </tr>
        </thead>
        <tbody>
          {props.location.state.pass && props.location.state.pass.length > 0 ? (
            loading ? (
              ascendingByClass ? (
                totalClass
                  .slice(0)
                  .sort(function (a, b) {
                    const numberA = a.title.toLowerCase();
                    const numberB = b.title.toLowerCase();
                    return numberA < numberB ? -1 : numberA > numberB ? 1 : 0;
                  })
                  // .slice(0, 10)
                  .map((item) => {
                    console.log("totalClass", totalClass);
                    return (
                      <tr key={item.id}>
                        <td data-column="Title">{item.title}</td>
                        <td data-column="Class Id">{item.id}</td>
                        <td data-column="Facilitator">
                          {item.facilitator_name}
                        </td>
                        <td data-column="Language">{languageMap[item.lang]}</td>
                        <td data-column="Date">{item.start_time}</td>
                        <td data-column="Class Rating">
                          {[1, 2, 3, 4, 5].map((star) => {
                            return item.feedback.feedback > 0 &&
                              star <= item.feedback.feedback ? (
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
                totalClass
                  .slice(0)
                  .sort(function (a, b) {
                    const numberA = a.title.toLowerCase();
                    const numberB = b.title.toLowerCase();
                    return numberA < numberB ? -1 : numberA > numberB ? 1 : 0;
                  })
                  .reverse()
                  // .slice(0, 10)
                  .map((item) => {
                    return (
                      <tr key={item.id}>
                        <td data-column="Title">{item.title}</td>
                        <td data-column="Class Id">{item.id}</td>
                        <td data-column="Facilitator">
                          {item.facilitator_name}
                        </td>
                        <td data-column="Language">{languageMap[item.lang]}</td>
                        <td data-column="Date">{item.start_time}</td>
                        <td data-column="Class Rating">
                          {[1, 2, 3, 4, 5].map((star) => {
                            return item.feedback.feedback > 0 &&
                              star <= item.feedback.feedback ? (
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
              )
            ) : ascendingByFacilitator ? (
              totalClass
                .slice(0)
                .sort(function (a, b) {
                  const numberA = a.facilitator_name.toLowerCase();
                  const numberB = b.facilitator_name.toLowerCase();
                  return numberA < numberB ? -1 : numberA > numberB ? 1 : 0;
                })
                // .slice(0, 10)
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <td data-column="Title">{item.title}</td>
                      <td data-column="Class Id">{item.id}</td>
                      <td data-column="Facilitator">{item.facilitator_name}</td>
                      <td data-column="Language">{languageMap[item.lang]}</td>
                      <td data-column="Date">{item.start_time}</td>
                      <td data-column="Class Rating">
                        {[1, 2, 3, 4, 5].map((star) => {
                          return item.feedback.feedback > 0 &&
                            star <= item.feedback.feedback ? (
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
              totalClass
                .slice(0)
                .sort(function (a, b) {
                  const numberA = a.facilitator_name.toLowerCase();
                  const numberB = b.facilitator_name.toLowerCase();
                  return numberA < numberB ? -1 : numberA > numberB ? 1 : 0;
                })
                .reverse()
                // .slice(0, 10)
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <td data-column="Title">{item.title}</td>
                      <td data-column="Class Id">{item.id}</td>
                      <td data-column="Facilitator">{item.facilitator_name}</td>
                      <td data-column="Language">{languageMap[item.lang]}</td>
                      <td data-column="Date">{item.start_time}</td>
                      <td data-column="Class Rating">
                        {[1, 2, 3, 4, 5].map((star) => {
                          return item.feedback.feedback > 0 &&
                            star <= item.feedback.feedback ? (
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
            )
          ) : (
            <div className="message ">
              <h3>There are no results to display...</h3>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentClassData;

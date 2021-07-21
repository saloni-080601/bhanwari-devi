import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import get from "lodash/get";

import { actions as courseActions } from "../../redux/action";
import Exercise from "./Exercise";
import "./styles.scss";

function ExerciseList(props) {
  const { list = [] } = props;
  const dispatch = useDispatch();
  const {
    courseContent: { data },
    selectedExercise,
  } = useSelector(({ Course }) => Course);

  console.log("data", data);

  const handleExerciseChange = useCallback(
    (clickedExerciseInfo, e) => {
      // e.stopPropagation();
      const { index, subExerciseIndex } = clickedExerciseInfo;
      const mainExercise = get(data, `exerciseList[${index}]`);
      // if child exercise was clicked, also handling fir
      if (subExerciseIndex === 0 || subExerciseIndex) {
        const selectedChildExercise =
          mainExercise.childExercises[subExerciseIndex];
        const selectedExerciseInfo = {
          exercise: selectedChildExercise,
          parentExercise: mainExercise,
          index,
          subExerciseIndex,
        };
        dispatch(courseActions.updateSelectedExercise(selectedExerciseInfo));
      } else {
        const selectedMainExercise = { exercise: mainExercise, index };
        dispatch(courseActions.updateSelectedExercise(selectedMainExercise));
      }
    },
    [data, dispatch]
  );

  const childExerciseList = list.filter(
    (exercise) => exercise.parent_exercise_id === "3142"
  );
  const parentExerciseList = list.filter(
    (exercise) => !(exercise.parent_exercise_id === "3142")
  );
  parentExerciseList.push({ name: "Exercise" });
  parentExerciseList[parentExerciseList.length - 1]["childExercises"] =
    childExerciseList;

  console.log("parentExerciseList", parentExerciseList);

  return (
    <div className="ng-exercise-list">
      {parentExerciseList.map((exercise, index) => {
        return (
          <div>
            {exercise.childExercises !== null ? (
              exercise.childExercises.map((exercise, index) => {
                console.log("exercise", exercise);
                return (
                  <Exercise
                    exercise={exercise}
                    index={index}
                    selectedExercise={selectedExercise}
                    onClick={handleExerciseChange}
                    // key={index}
                    key={`child_${index}`}
                  />
                );
              })
            ) : (
              <Exercise
                exercise={exercise}
                index={index}
                selectedExercise={selectedExercise}
                onClick={handleExerciseChange}
                key={index}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

ExerciseList.propTypes = {
  list: PropTypes.array,
};

export default ExerciseList;

// exercise.childExercises !== null ? (
//   exercise.childExercises.map((exercise, index) => {
//     console.log("exercise", exercise);
//     return (
//         <Exercise
//           exercise={exercise}
//           index={index}
//           selectedExercise={selectedExercise}
//           onClick={handleExerciseChange}
//           key={index}
//         />
//       </div>

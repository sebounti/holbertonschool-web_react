import React from "react";
import PropTypes from "prop-types";

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let element;

  if (isHeader) {
    if (textSecondCell === null) {
      element = <th colSpan="2">{textFirstCell}</th>;
    } else {
      element = (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    }
  } else {
    element = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  const rowStyle = isHeader ? headerRowStyles : rowStyles;

  return <tr style={rowStyle}>{element}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;

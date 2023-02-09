import React from 'react'
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay)
  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>

      <table className="overview-table">
        <tr>
          <td>Borders:</td>
          <td>
            {currentDisplay.borders ? currentDisplay.borders.map((e,i, arr) => {
              if(i + 1 === arr.length) {
                return `${e}`;
              } else {
                return `${e},`;
              }
            })
            : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Capitol:</td>
        </tr>
        <tr>
          <td>Population:</td>
        </tr>
        <tr>
          <td>Continents:</td>
        </tr>
        <tr>
          <td>Independent:</td>
        </tr>
        <tr>
          <td>Landlocked:</td>
        </tr>
        <tr>
          <td>Member of UN:</td>
        </tr>

      </table>
    </div>
  )
}

export default Overview
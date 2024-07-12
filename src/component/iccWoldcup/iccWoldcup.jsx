import React from "react";

export function PointsTable()
{
    var iccTable = [
        {Team: "India", Matches: 9, Won: 9, Lost: 0, PTS: 18, NRR: "+2.570", Flag:"IND.jpg"},
        {Team: "South Africa", Matches: 9, Won:7, Lost:2, PTS: 14, NRR: "+1.267", Flag:"SA.jpg"},
        {Team: "Australia", Matches: 9, Won: 7, Lost: 2, PTS: 14, NRR: "+0.861", Flag:"AU.jpg"},
        {Team: "Newzealnd", Matches: 9, Won: 5, Lost: 4, PTS: 10, NRR: "+0.743", Flag:"NZ.jpg"},
        {Team: "Pakistan", Matches: 9, Won: 4, Lost: 5, PTS: 8, NRR: "-0.199", Flag:"PAK.jpg"},
        {Team: "Afganistan", Matches: 9, Won: 4, Lost: 5, PTS: 8, NRR: "-0.336", Flag:"AFG.jpg"},
        {Team: "England", Matches: 9, Won: 3, Lost: 6, PTS: 6, NRR: "-0.572", Flag:"ENG.jpg"},
        {Team: "Bangladesh", Matches: 9, Won: 2, Lost: 7, PTS: 4, NRR: "-1.087", Flag:"BAN.jpg"},
        {Team: "Shrilanka", Matches: 9, Won: 2, Lost: 7, PTS: 4, NRR: "-1.419", Flag:"SL.jpg"},
        {Team: "Netharland", Matches: 9, Won: 2, Lost: 7, PTS: 4, NRR: "-1.825", Flag:"NED.jpg"},
    ]

    return(
        <>
        <h1>ICC Worldcup 2023 Table</h1>
        <table className="table w-50 table-hover table-striped">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Matches</th>
                    <th>Won</th>
                    <th>Lost</th>
                    <th>PTS</th>
                    <th>NRR</th>
                </tr>
            </thead>
            <tbody>
                {
                    iccTable.map(country=>
                        <tr key={country.Team}>
                        <td><img src={country.Flag} width="20"/>{country.Team}</td>
                        <td>{country.Matches}</td>
                        <td>{country.Won}</td>
                        <td>{country.Lost}</td>
                        <td>{country.PTS}</td>
                        <td>{country.NRR}</td>
                        </tr>
                        )
                    }
            </tbody>
        </table>
        </>
    )

}
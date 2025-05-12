
import React, { useEffect, useState } from 'react';

function PointTable() {
  const [teams, setTeams] = useState([]);
  const [rankMap, setRankMap] = useState({});

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((res) => res.json())
      .then((data) => {
      
        const sortedByNRR = [...data].sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedByNRR);

        const ranked = [...data].sort((a, b) => {
          if (b.Points === a.Points) return b.NRR - a.NRR;
          return b.Points - a.Points;
        });

        const rankObj = {};
        ranked.forEach((team, index) => {
          rankObj[team.Team] = index + 1;
        });

        setRankMap(rankObj);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>IPL Season 2022 Points</h1>
      <table border="1" style={{ margin: '0 auto', borderCollapse: 'collapse', fontSize: '16px' }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => {
            const matches = team.Won + team.Lost + team.Tied;
            const rank = rankMap[team.Team] || '';
            return (
              <tr key={team.Team}>
                <td>{rank}</td>
                <td>{team.Team}</td>
                <td>{matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.NRR.toFixed(3)}</td>
                <td>{team.Points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PointTable;

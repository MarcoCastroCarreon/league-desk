import React from "react";
import { Grid } from "@material-ui/core";

//Own dependencies
import { useQuery } from "@apollo/client";
import { GET_ALL_CHAMPIONS } from "../api/queries";
import { Background } from '../index.styles';

const Home = () => {
  const { error, loading, data } = useQuery(GET_ALL_CHAMPIONS);
  const [champs, setChamps] = React.useState([]);

  React.useEffect(() => {
    if (!loading) {
      const champions = [...Object.values(data.getChamps)];
      setChamps(champions);
    }
  }, [loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Background>
      <Grid container justify="center" align="center" style={{ marginTop: 40 }}>
        {champs.length &&
          champs.map((champ) => (
            <Grid item md={4} key={champ.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${champ.id}.png`}
                  alt={champ.name}
                />
              </div>
              {champ.name}
            </Grid>
          ))}
      </Grid>
    </Background>
  );
};

export default Home;

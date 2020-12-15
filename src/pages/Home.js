import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHAMPIONS } from "../api/queries";
import { useEffect } from "react";

const Home = () => {
  const { error, loading, data } = useQuery(GET_ALL_CHAMPIONS);
  const [champs, setChamps] = React.useState([]);

  useEffect(() => {
    if (!loading) {
      const champions = [...Object.values(data.getChamps)];
      setChamps(champions);
    }
  }, [loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Fragment>
      <Grid container justify="center">
        {champs.length &&
          champs.map((champ) => (
            <Grid item md={4} key={champ.id}>
              {champ.id}
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default Home;

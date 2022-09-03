import type { GetServerSideProps, NextPage } from "next";
import { Grid } from "@mui/material";

import Layout from "../components/Layout";
import { Anime } from "../types/animes";

const Recommended: NextPage<{ animes: Array<Anime> }> = ({ animes }) => {
  return (
    <Layout>
      <Grid container gap={1}>
        {animes.map((anime, ind) => (
          <Grid item key={`card-${ind}`}>
            {ind}
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      animes: Array(10).fill(10),
    },
  };
};

export default Recommended;

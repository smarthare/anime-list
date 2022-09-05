import type { GetServerSideProps, NextPage } from "next";

import Layout from "components/Layout";
import Recommended from "components/pages/Recommended";
import { getAnimesByPage } from "service/jikan";
import { RecommendedPageTypes } from "types/components";

const RecommendedPage: NextPage<RecommendedPageTypes> = ({ animes, page }) => {
  return (
    <Layout showHeader>
      <Recommended animes={animes} page={page} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const newPage = Number(query.page);
  const page = isNaN(newPage) || newPage < 1 ? 1 : newPage;
  const animes = await getAnimesByPage(page);

  return {
    props: {
      animes,
      page,
    },
  };
};

export default RecommendedPage;

import type { GetServerSideProps, NextPage } from "next";

import Layout from "components/Layout";
import Detail from "components/pages/Detail";
import { getAnimeById } from "service/jikan";
import { IAnimeCardProps } from "types/components";

const DetailPage: NextPage<IAnimeCardProps> = ({ anime }) => {
  return (
    <Layout>
      <Detail anime={anime} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const id = Number(params?.slug);
  const anime = await getAnimeById(id);

  return {
    props: {
      anime,
    },
  };
};

export default DetailPage;

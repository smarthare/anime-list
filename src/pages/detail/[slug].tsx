import { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "components/Layout";
import Detail from "components/pages/Detail";
import { getAnimeById } from "service/jikan";
import { Anime } from "types/animes";

const DetailPage: NextPage = () => {
  const router = useRouter();

  const [anime, setAnime] = useState<Anime>();
  const { slug } = router.query;

  const getAnime = async () => {
    const newAnime = await getAnimeById(Number(slug) || 1);
    setAnime(newAnime);
  };

  useEffect(() => {
    slug && getAnime();
  }, [slug]);

  return <Layout>{anime && <Detail anime={anime} />}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=30, stale-while-revalidate=150"
  );

  return {
    props: {},
  };
};

export default DetailPage;

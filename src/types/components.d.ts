import type { NextPage } from "next";
import { Anime } from "./animes";

export interface ILayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export interface IAnimeCardProps {
  anime: Anime;
}

export interface IButtonProps {
  buttonType: "prev" | "next" | "up";
  disabled?: boolean;
  onClick: VoidFunction;
}

export type RecommendedTypes = {
  animes: Array<Anime>;
  page: number;
} & NextPage;

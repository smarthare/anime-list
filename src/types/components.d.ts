import type { NextPage } from "next";
import { Anime } from "./animes";

export interface IProps {
  children: React.ReactNode;
}

export interface ILayoutProps extends IProps {
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

export type RecommendedComponentTypes = {
  animes: Array<Anime>;
  page: number;
};

export type RecommendedPageTypes = RecommendedComponentTypes & NextPage;

export interface ISearchDialogProps {
  open: boolean;
  handleClose: VoidFunction;
}

export interface IDummySearchBarProps {
  onClick: VoidFunction;
}

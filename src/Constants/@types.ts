export type CardType = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  description: string;
};

export type CardsListType = Array<CardType>;

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export enum LikeStatus {
  Like = "like",
  Dislike = "dislike",
}

export type SetLikeStatusPayload = {
  card: CardType;
  likeStatus: LikeStatus;
};

export enum Tabs {
  All = 'all',
  Favourites = 'myFavourites',
  Popular = 'popular',
  MyPosts = 'myPosts',
}

export enum Order {
  Date = "date",
  Title = "title",
}

export interface IAddNewPostPayload {
  formData: any;
  callback: () => void;
};

export interface IEditPostPayload extends IAddNewPostPayload {
  id: string;
}

export interface IDeletePostPayload extends Omit<IEditPostPayload, "formData"> {}
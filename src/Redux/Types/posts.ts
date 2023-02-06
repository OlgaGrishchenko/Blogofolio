import { CardsListType } from './../../Constants/@types';

export type GetSearchedPostsPayload = {
   offset: number;
   search?: string;
   ordering?: string;
   isOverwrite: boolean;
}

export type SetPostsPayload = {
   isOverwrite: boolean;
   posts: CardsListType;
}
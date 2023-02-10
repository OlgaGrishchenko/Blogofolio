import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    CardsListType,
    CardType,
    IAddNewPostPayload,
    IEditPostPayload,
    IDeletePostPayload,
    LikeStatus,
    SetLikeStatusPayload,
} from "../../Constants/@types";
import {GetSearchedPostsPayload, SetPostsPayload} from "../Types/posts"

type PostsReducerState = {
    selectedPost: CardType | null;
    isSelectedPostModalOpened: boolean;
    likedPosts: CardsListType;
    dislikedPosts: CardsListType;
    savedPosts: CardsListType;
    allPosts: CardsListType;
    singlePost: CardType | null;
    isPostLoading: boolean;
    myPosts: CardsListType;
    isMyPostsLoading: boolean;
    totalCount: number;
    searchedPosts: CardsListType;
    searchedTotalCount: number;
};

const initialState: PostsReducerState = {
    selectedPost: null,
    isSelectedPostModalOpened: false,
    likedPosts: [],
    dislikedPosts: [],
    savedPosts: [],
    allPosts: [],
    singlePost: null,
    isPostLoading: false,
    myPosts: [],
    isMyPostsLoading: false,
    totalCount: 0,
    searchedPosts: [],
    searchedTotalCount: 0,
};

const postsSlice = createSlice({
    name: "postsReducer",
    initialState,
    reducers: {
        setSelectedPost: (state, action: PayloadAction<CardType | null>) => {
            state.selectedPost = action.payload;
            state.isSelectedPostModalOpened = true;
        },

        setSelectedPostModalVisible: (
            state,
            action: PayloadAction<boolean>
        ) => {
            state.isSelectedPostModalOpened = action.payload;
            if (!action.payload) {
                state.selectedPost = null;
            }
        },

        setLikeStatus: (state, action: PayloadAction<SetLikeStatusPayload>) => {
            const { card, likeStatus } = action.payload;

            const isLike = likeStatus === LikeStatus.Like;

            const dislikedIndex = state.dislikedPosts.findIndex(
                (post) => post.id === card.id
            );
            const likedIndex = state.likedPosts.findIndex(
                (post) => post.id === card.id
            );

            const mainArrayKey = isLike ? "likedPosts" : "dislikedPosts";
            const secondaryArrayKey = isLike ? "dislikedPosts" : "likedPosts";
            const mainIndex = isLike ? likedIndex : dislikedIndex;
            const secondaryIndex = isLike ? dislikedIndex : likedIndex;

            if (mainIndex === -1) {
                state[mainArrayKey].push(card);
            } else {
                state[mainArrayKey].splice(mainIndex, 1);
            }
            if (secondaryIndex > -1) {
                state[secondaryArrayKey].splice(secondaryIndex, 1);
            }
        },

        setSavedPosts: (state, action: PayloadAction<CardType>) => {
            const card = action.payload;

            const SavedPostsIndex = state.savedPosts.findIndex(
                (post) => post.id === card.id);

            if (SavedPostsIndex === -1) {
                state.savedPosts.push(card);
            } else {
                state.savedPosts.splice(SavedPostsIndex, 1);
            }
        },

        getPosts: (state, action: PayloadAction<GetSearchedPostsPayload>) => {},
        setPosts: (state, action: PayloadAction<CardsListType>) => {state.allPosts = action.payload;
    },
        setPostsLoading: (state, action: PayloadAction<boolean>) => {
            state.isPostLoading = action.payload;
        },

        getSinglePost: (state, action: PayloadAction<string>) => {},
        setSinglePost: (state, action: PayloadAction<CardType>) => {state.singlePost = action.payload;
    },

        getMyPosts: (state, action: PayloadAction<undefined>) => {},
        setMyPosts: (state, action: PayloadAction<CardsListType>) => {
            state.myPosts = action.payload;
        },

        setMyPostsLoading: (state, action: PayloadAction<boolean>) => {
            state.isMyPostsLoading = action.payload;
        },

        setTotalCount: (state, action: PayloadAction<number>) => {state.totalCount = action.payload;},
        
        getSearchedPosts: (state, action: PayloadAction<GetSearchedPostsPayload>) => {},
        setSearchedPosts: (state, action:PayloadAction<SetPostsPayload>) => {
            const { isOverwrite, posts } = action.payload;
            if (isOverwrite) {
                state.searchedPosts = posts
            } else {
                state.searchedPosts = [...state.searchedPosts, ...posts];
            }
        },
        setSearchedPostsCount: (state, action: PayloadAction<number>) => {state.searchedTotalCount = action.payload;},

        addNewPost: (state, action: PayloadAction<IAddNewPostPayload>) => {},
        editPost: (state, action: PayloadAction<IEditPostPayload>) => {},
        deletePost: (state, action: PayloadAction<IDeletePostPayload>) => {},

    }
});

    export const { 
        setSelectedPost,
        setSelectedPostModalVisible,
        setLikeStatus,
        setSavedPosts,
        getPosts,
        setPosts,
        getSinglePost,
        setSinglePost,
        setPostsLoading,
        setTotalCount,
        getMyPosts,
        setMyPosts,
        setMyPostsLoading,
        getSearchedPosts,
        setSearchedPosts,
        setSearchedPostsCount,
        addNewPost,
        editPost,
        deletePost,
    } = postsSlice.actions;

    const postsReducer = postsSlice.reducer;
    export default postsReducer;



    // верхний if else подробно описан ниже
      // if (likeStatus === LikeStatus.Like) {
      //   // if LikeStatus === 'LIKE'
      //   if (likedIndex === -1) { // Здесь определяем, ставим или снимаем лайк с поста
      //     state.likedPosts.push(card);
      //   } else {
      //     state.likedPosts.splice(likedIndex, 1);
      //   }
      //   if (dislikedIndex > -1) { // Здесь определяем, ставили ли мы на этот пост дизлайк
      //     state.dislikedPosts.splice(dislikedIndex, 1);
      //   }
      // } else {
      //   // if LikeStatus === 'DISLIKE'
      //   if (dislikedIndex === -1) { // Здесь определяем, ставим или снимаем дизлайк с поста
      //     state.dislikedPosts.push(card);
      //   } else {
      //     state.dislikedPosts.splice(dislikedIndex, 1);
      //   }
      //
      //   if (likedIndex > -1) {  // Здесь определяем, ставили ли мы на этот пост лайк
      //     state.likedPosts.splice(likedIndex, 1);
      //   }

import { RootState } from "../store";

export default {
  getSelectedPost: (state: RootState) => state.postsReducer.selectedPost,
  getSelectedPostModalVisible: (state: RootState) => state.postsReducer.isSelectedPostModalOpened,
  getLikedPosts: (state: RootState) => state.postsReducer.likedPosts,
  getDislikedPosts: (state: RootState) => state.postsReducer.dislikedPosts,
  getSavedPosts: (state: RootState) => state.postsReducer.savedPosts,
  getAllPosts: (state: RootState) => state.postsReducer.allPosts,
  getSinglePost: (state: RootState) => state.postsReducer.singlePost,
  getMyPosts: (state: RootState) => state.postsReducer.myPosts,
  getTotalCount: (state: RootState) => state.postsReducer.totalCount,
  getPostsLoading: (state: RootState) => state.postsReducer.isPostLoading,
  getMyPostsLoading: (state: RootState) => state.postsReducer.isMyPostsLoading,
  getSearchedTotalCount: (state: RootState) => state.postsReducer.searchedTotalCount,
  getSearchedPosts: (state: RootState) => state.postsReducer.searchedPosts,
};
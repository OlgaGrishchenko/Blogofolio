import { GetSearchedPostsPayload } from './../Types/posts';
import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import callCheckingAuth from "./callCheckingAuth";
import { toast } from "react-toastify";

import { 
  getPosts,
  setPosts,
  getSinglePost,
  setSinglePost,
  setTotalCount,
  setPostsLoading,
  setMyPosts,
  getMyPosts,
  setMyPostsLoading,
  getSearchedPosts,
  setSearchedPosts,
  setSearchedPostsCount,
  addNewPost,
  editPost,
  deletePost,
} from "../Reducers/postsReducer";

import API from "../utils/api";
import { IAddNewPostPayload, IDeletePostPayload, IEditPostPayload } from '../../Constants/@types';

function* getPostsWorker(action: PayloadAction<GetSearchedPostsPayload>) {
  yield put(setPostsLoading(true))
  const { offset, search, ordering } = action.payload;
  const { ok, data, problem } = yield call(API.getAllPosts, offset, search, ordering);

  if (ok && data) {
    yield put(setPosts(data.results));
    yield put(setTotalCount(data.count));
  } else {
    console.warn("Error fetching posts: ", problem);
    toast.error("Error fetching posts");
  }
  yield put(setPostsLoading(false))
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { ok, data, problem } = yield call(API.getSinglePost, action.payload);
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error fetching single post: ", problem);
    toast.error("Error fetching post");
  }
}

function* getMyPostsWorker (action: PayloadAction<undefined>) {
  yield put(setMyPostsLoading(true));
  const { ok, data, problem, status } = yield callCheckingAuth(API.getMyPosts);
  if (ok && data) {
    yield put(setMyPosts(data));
  } else if (status === 404) {
    yield put(setMyPosts([]));
  } else {
    console.warn("Error fetching my posts: ", problem);
  }
  yield put(setMyPostsLoading(false));
}

function* getSearchedPostsWorker(action: PayloadAction<GetSearchedPostsPayload>) {
  yield put(setMyPostsLoading(true));
  const { offset, search, isOverwrite } = action.payload;
  const { ok, data, problem } = yield call(API.getAllPosts, offset, search);

  if (ok && data) {
    yield put(setSearchedPosts( {posts: data.results, isOverwrite} ));
    
    yield put(setSearchedPostsCount(data.count));
  } else {
    console.warn("Error fetching posts: ", problem);
  }
  yield put(setMyPostsLoading(false));
}

function* addNewPostWorker(action: PayloadAction<IAddNewPostPayload>) {
  const { callback, formData } = action.payload;
  const { ok, problem } = yield callCheckingAuth(API.addNewPost, formData);
  if (ok) {
    callback();
    toast.success("Post added successfully");
  } else {
    console.warn("Error adding new post", problem);
    toast.error("Error adding new post");
  }
}

function* editPostWorker(action: PayloadAction<IEditPostPayload>) {
  const { callback, formData, id } = action.payload;
  const { ok, problem } = yield callCheckingAuth(API.editPost, formData, id);
  if (ok) {
    callback();
    toast.success("Post edited successfully");
  } else {
    console.warn("Error editing post", problem);
    toast.error("Error editing post");
  }
}

function* deletePostWorker(action: PayloadAction<IDeletePostPayload>) {
  const { callback, id } = action.payload;
  const { ok, problem } = yield callCheckingAuth(API.deletePost, id);
  if (ok) {
    callback();
    toast.success("Post deleted successfully");
  } else {
    console.warn("Error deleting post", problem);
    toast.error("Error deleting post");
  }
}

export default function* postsSaga() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(getMyPosts, getMyPostsWorker),
    takeLatest(getSearchedPosts, getSearchedPostsWorker),
    takeLatest(addNewPost, addNewPostWorker),
    takeLatest(editPost, editPostWorker),
    takeLatest(deletePost, deletePostWorker),
  ]);
}
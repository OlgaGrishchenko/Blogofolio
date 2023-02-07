import { GetSearchedPostsPayload } from './../Types/posts';
import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import callCheckingAuth from "./callCheckingAuth";

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
} from "../Reducers/postsReducer";

import API from "../utils/api";
import { AddNewPostPayload } from '../../Constants/@types';

function* getPostsWorker(action: PayloadAction<GetSearchedPostsPayload>) {
  yield put(setPostsLoading(true))
  const { offset, search, ordering } = action.payload;
  const { ok, data, problem } = yield call(API.getAllPosts, offset, search, ordering);

  if (ok && data) {
    yield put(setPosts(data.results));
    yield put(setTotalCount(data.count));
  } else {
    console.warn("Error fetching posts: ", problem);
  }
  yield put(setPostsLoading(false))
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { ok, data, problem } = yield call(API.getSinglePost, action.payload);
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error fetching single post: ", problem);
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

function* addNewPostWorker(action: PayloadAction<AddNewPostPayload>) {
  const { callback, formData } = action.payload;
  const { ok, problem } = yield callCheckingAuth(API.addNewPost, formData);
  if (ok) {
    callback();
  } else {
    console.warn("Error adding new post", problem);
  }
}

export default function* postsSaga() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(getMyPosts, getMyPostsWorker),
    takeLatest(getSearchedPosts, getSearchedPostsWorker),
    takeLatest(addNewPost, addNewPostWorker),
  ]);
}
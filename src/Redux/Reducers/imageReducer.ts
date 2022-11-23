import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../Constants/@types";

type ImageReducerState = {
   selectedImage: string;
   isSelectedImageModalIsOpened: boolean;
};

const initialState: ImageReducerState = {
   selectedImage: "",
   isSelectedImageModalIsOpened: false,
};

const imageSlice = createSlice({
   name: "imageReducer",
   initialState,
   reducers: {

      setSelectedImage: (state, action: PayloadAction<string>) => {
         state.selectedImage = action.payload;
         state.isSelectedImageModalIsOpened = true;
      },

      setSelectedImageModalVisible: (
         state,
         action: PayloadAction<boolean>
      ) => {
         state.isSelectedImageModalIsOpened = action.payload;
         if (!action.payload) {
            state.selectedImage = '';
         }
      },
   },
});

export const {
   setSelectedImage,
   setSelectedImageModalVisible,
} = imageSlice.actions;

const imageReducer = imageSlice.reducer;
export default imageReducer;

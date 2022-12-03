import { RootState } from "../store";

export default {
   getSelectedImage: (state: RootState) => state.imageReducer.selectedImage,
   getSelectedImageModalVisible: (state: RootState) => state.imageReducer.isSelectedImageModalIsOpened,
};
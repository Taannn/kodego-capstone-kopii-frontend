import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
// import these stuff and the 2 exports from store as well
import { RootState, AppDispatch } from "./store";

// now we need to export both useSelector and useDispatch with types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()
// next is for us to actually use these 2 and replace the normal ones that not not typed :)
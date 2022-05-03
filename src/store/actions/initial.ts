import { createActionCreators } from 'immer-reducer';
import {initialReducer} from "../reducers/initial";
import {AsyncAction} from "./common";

export const initialActions = createActionCreators(initialReducer);

export type InitialActions =
    | ReturnType<typeof initialActions.setTestInfo>;

export const getTestInfo = (): any => async (
    dispatch:any,
    _:any,
    { mainProtectedApi }:any,
) => {
  try {
    const response = await mainProtectedApi.getTestInfo();
    dispatch(initialActions.setTestInfo(response));
  } catch (e) {
    console.log(e);
  }
};


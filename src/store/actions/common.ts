import { ThunkAction } from 'redux-thunk';
import { CallHistoryMethodAction } from 'connected-react-router';
import {Actions, api, State} from "../index";


type HistoryActions = CallHistoryMethodAction<[string, unknown?]> | CallHistoryMethodAction<[]>;

export type AsyncAction<R = void> = ThunkAction<R, State, typeof api, Actions | HistoryActions>;

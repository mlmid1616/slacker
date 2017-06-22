import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import ChannelReducer from './channel_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  channels: ChannelReducer
});

export default RootReducer;

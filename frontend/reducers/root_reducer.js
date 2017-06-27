import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import ChannelReducer from './channel_reducer';
import MessageReducer from './message_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  channels: ChannelReducer,
  messages: MessageReducer,
  users: UserReducer
});

export default RootReducer;

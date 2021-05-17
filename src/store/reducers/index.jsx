import { combineReducers } from 'redux';
import alert from './alert';
import ageGroup from './ageGroup';
import satisfaction from './satisfaction';
import dailyVisitor from './dailyVisitor';

export default combineReducers({
  alert,
  ageGroup,
  satisfaction,
  dailyVisitor
});
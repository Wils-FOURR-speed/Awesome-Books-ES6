import { DateTime } from './modules/luxon.js';
import BookManager from './modules/display.js';

const displayCurrentDate = () => {
  const date = document.querySelector('.date-area');
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  date.innerHTML = currentDate;
};

BookManager.initialize();
export default displayCurrentDate;
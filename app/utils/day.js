import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat' // ES 2015
import isBetween from 'dayjs/plugin/isBetween';

import 'dayjs/locale/de';

dayjs.extend(advancedFormat);
dayjs.extend(isBetween);

export default dayjs;

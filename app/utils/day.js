import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import 'dayjs/locale/de';

dayjs.extend(isBetween);

export default dayjs;

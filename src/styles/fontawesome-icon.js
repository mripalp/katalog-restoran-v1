// Font Awesome SVG
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons/faWineGlass';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

library.add(
  faCheck,
  faLocationDot,
  faStar,
  faHeart,
  farHeart,
  faWineGlass,
  faUtensils,
  faPen,
  faBars,
);
dom.watch();

import { Group } from '@stricjs/router';
import get from './get';
import login from './login';

export default new Group('/api').plug(get, login);

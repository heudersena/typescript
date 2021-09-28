import '@src/config/env';
import { serverHttp } from '@src/http';
import '@src/websocket';

serverHttp.listen(3333, () => console.log('server running'));

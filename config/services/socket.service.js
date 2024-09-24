import { io } from 'socket.io-client';
// eslint-disable-next-line import/extensions
import { SOCKET_BASE_URL } from '../path';
// import { SOCKET_BASE_URL } from '@/config/path';
// import siteConfig from '../config/siteConfig';

const socket = io(SOCKET_BASE_URL(), {
    autoConnect: true,
    path: '/socket.io/',
});

export default socket;
// const [isConnected, setIsConnected] = useState(socket.connected);

// socket useEffect
// useEffect(() => {
//     function onConnect() {
//         console.log('***** sock connected *******');
//         setIsConnected(true);
//     }

//     function onDisconnect() {
//         console.log('***** sock disconnected *******');
//         setIsConnected(false);
//     }

//     function onMessageEvent(value) {
//         console.log('token:', value);
//         setReply(previous => [...previous, value]);
//     }

//     socket.on('connect', onConnect);
//     socket.on('disconnect', onDisconnect);
//     socket.on('message', onMessageEvent);

//     return () => {
//         socket.off('connect', onConnect);
//         socket.off('disconnect', onDisconnect);
//         socket.off('message', onMessageEvent);
//     };
// }, []);

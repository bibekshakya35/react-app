import { EventEmitter } from 'events';
// A simple wrapper around the websocket that act an eventemitter between server and client
class Socket {
    constructor(ws = new WebSocket(), ee = new EventEmitter()) {
        this.ws = ws;
        this.ee = ee;
        ws.onmessage = this.message.bind(this);
        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);
    }
    //subscribe
    on(eventName,fn){
        this.ee.on(eventName,fn);
    }
    //unsubscribe
    off(eventName,fn){
        this.ee.removeListener(name,fn);
    }
    //take event name and data payload
    emit(eventName,data){
        const message = JSON.stringify({eventName,data});
        this.ws.send(message);
    }
    
    message(e) {
        try{
            const message = JSON.parse(e.data);
            this.ee.emit(message.name,message.data);
        }catch(err){
            this.ee.emit('error',err);
        }
    }
    open() {
        this.ee.emit('connect');
    }
    close() {
        this.ee.emit('disconnect');
    }
}
export default Socket;

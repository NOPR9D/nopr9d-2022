import { io, Socket } from 'socket.io-client';

export class _Socket {
	public active!: Socket;

	public listen(): void {
		this.active = io('localhost:3000', { host: 'localhost' });
	}

	public emit(event: string, data: never): void {
		this.active.emit(event, data);
	}

	public subscribe(event: string, data: never): void {
		this.active.on(event, data);
	}

	public unsubscribe(event: string, data: never): void {
		this.active.removeListener(event, data);
	}

	public unsubscribeAll(event: string): void {
		this.active.removeAllListeners(event);
	}
}

module Shin.Base {
	export class MySocket {
		public constructor() {
			this.webSocket = new egret.WebSocket();
			if (this.webSocket)
				this.webSocket.type = egret.WebSocket.TYPE_BINARY;
		}

		public AddEventListener_Receive(listener:Function, thisObject: any):void
		{
			if (this.webSocket)
				this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, listener, thisObject);
		}

		public AddEventListener_Connect(listener:Function, thisObject: any):void
		{
			if (this.webSocket)
				this.webSocket.addEventListener(egret.Event.CONNECT, listener, thisObject);  
		}

		public Connect(host: string, port: number):void
		{
			if (this.webSocket)
				this.webSocket.connect(host, port);
		}

		public Send(data:MyByteArray):void
		{
			if (this.webSocket)
				this.webSocket.writeBytes(data.getByteArray());
		}

		private webSocket:egret.WebSocket;


	}
}
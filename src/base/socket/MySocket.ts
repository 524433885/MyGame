module Shin.Base {
	export class MySocket {
		public constructor() {
			this.webSocket = new egret.WebSocket();
			if (this.webSocket)
			{
				this.webSocket.type = egret.WebSocket.TYPE_BINARY;
				this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketData, this);
				this.webSocket.addEventListener(egret.Event.CONNECT, this.onConnect, this);
				this.webSocket.addEventListener(egret.Event.CLOSE, this.onClose, this);
				this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
			}
		}

		public AddEventListeners(onConnect: Function, onClose: Function, onSocketData: Function, onError: Function, thisObject: any)
		{
			if (this.webSocket)
			{
				this.func_onClose = onClose;
				this.func_onConnect = onConnect;
				this.func_onError = onError;
				this.func_onSocketData = onSocketData;

				this.thisObject = thisObject;
			}
		}

		// public AddEventListener_Receive(listener:Function, thisObject: any):void
		// {
		// 	if (this.webSocket)
		// 		this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, listener, thisObject);
		// }

		// public AddEventListener_Connect(listener:Function, thisObject: any):void
		// {
		// 	if (this.webSocket)
		// 		this.webSocket.addEventListener(egret.Event.CONNECT, listener, thisObject);  
		// }

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

		private onSocketData(e:egret.Event):void
		{
			var data:MyByteArray = new MyByteArray();
			if (this.webSocket)
				this.webSocket.readBytes(data.getByteArray());

			if (this.func_onSocketData)
				this.func_onSocketData.call(this.thisObject, data);
		}

		private onError():void
		{
			if (this.func_onError)
				this.func_onError.call(this.thisObject);
		}

		private onClose():void
		{
			if (this.func_onClose)
				this.func_onClose.call(this.thisObject);
		}

		private onConnect():void
		{
			if (this.func_onConnect)
				this.func_onConnect.call(this.thisObject);
		}

		private webSocket:egret.WebSocket;

		private func_onSocketData:Function;
		private func_onConnect:Function;
		private func_onError:Function;
		private func_onClose:Function;
		private thisObject:any;
	}
}
declare var pomelo;
module Shin.Base {
	export class PomeloMgr {
		public constructor() {
		}

		private static _instance : PomeloMgr;
		public static getInstance():PomeloMgr
		{
			if (PomeloMgr._instance == null)
				PomeloMgr._instance = new PomeloMgr();
			
			return PomeloMgr._instance;
		}

		public Init():void
		{
			//与服务器连接断开
			pomelo.on('close', this.OnDisconnect);

			//测试接受服务端消息
			pomelo.on('onTest', this.OnTest);
		}

		public OnTest(data):void
		{
			alert("OnTest:" + data.msg);
		}

		public OnDisconnect(reason):void
		{
			alert("disconnect:" + reason);
		}

		public Login_gate(uid, callback) 
		{
			pomelo.init({
				host: "127.0.0.1",
				port: "4010",
				log: true
			}, function() {
				pomelo.request("gate.gateHandler.queryEntry", {uid: uid}, function(data) {
					pomelo.disconnect();
					callback(data.host, data.port);
				});
			});
		}

		public Login(uid)
		{
			this.Login_gate(uid, function(host, port) {
				pomelo.init({
					host: host,
					port: port,
					log: true
				}, function() {
					var route = "connector.entryHandler.entertest";
					pomelo.request(route, {
						uid: uid,
						username:"Rick",
						rid: "1"
					}, function(data) {
						if(data.error) {
							return;
						}
						//alert("数据："+ data.data.uid);
					});
				});
			});
		}
	}
}
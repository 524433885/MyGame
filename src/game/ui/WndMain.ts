module Shin.Game {
	export class WndMain extends eui.Component {
		public constructor() {
			super();
			this.skinName = "mySkin.Main";
		}

		private static _instance : WndMain;
		public static getInstance():WndMain
		{
			if (WndMain._instance == null)
				WndMain._instance = new WndMain();
			
			return WndMain._instance;
		}

		private nickname : eui.Label;

		private IQ : eui.Label;
		private nIQ : number;

		private EQ : eui.Label;
		private nEQ : number;

		private BQ : eui.Label;
		private nBQ : number;

		public Init():void
		{
			this.nickname.text = "小小新";
			this.SetIQ(1000);
			this.SetEQ(1000);
			this.SetBQ(1000);
		}

		public SetIQ(val:number):void
		{
			this.nIQ = val;
			this.IQ.text = "IQ:" + val;
		}

		public SetEQ(val:number):void
		{
			this.nEQ = val;
			this.EQ.text = "EQ:" + val;
		}

		public SetBQ(val:number):void
		{
			this.nBQ = val;
			this.BQ.text = "BQ:" + val;
		}
	}
}
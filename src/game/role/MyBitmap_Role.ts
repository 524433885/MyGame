module Shin.Game {
	export class MyBitmap_Role extends egret.DisplayObjectContainer {
		public constructor() {
			super();
		}

		public Load(name:string):void
		{
			this._spriteSheet = MyBitmap_Role_Mgr.getInstance().getSpriteSheet(name);

			if (!this._spriteSheet)
				return;

			this._dir = "up";
			this._index = 1;

			var tex_name:string = this._dir+this._index;

			var texture:egret.Texture = this._spriteSheet.getTexture(tex_name);
			if (!texture)
				return;
			
			this._bitmap = new egret.Bitmap(texture);
			if (!this._bitmap)
				return;

			this.addChild(this._bitmap);

			//创建一个计时器对象
			var timer:egret.Timer = new egret.Timer(165);
			//注册事件侦听器
			timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
			//开始计时
			timer.start();
		}

		public setDir(dir:string):void
		{
			this._dir = dir;
		}

		public timerFunc():void
		{
			this._index++;
			if (this._index > 4)
			{
				this._index = 1;
			}
			var tex_name:string = this._dir + this._index;
			if(this._bitmap && this._spriteSheet)
			{
				var texture = this._spriteSheet.getTexture(tex_name);
				if (texture)
				{
					this._bitmap.texture = texture;
				}
			}
		}

		private _spriteSheet:egret.SpriteSheet;
		private _bitmap:egret.Bitmap;
		private _dir:string;
		private _index:number;
	}
}
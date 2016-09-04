module Shin.Game {
	export class MyBitmap_Role_Mgr {
		public constructor() {
		}

		private static _instance : MyBitmap_Role_Mgr;
		public static getInstance():MyBitmap_Role_Mgr
		{
			if (MyBitmap_Role_Mgr._instance == null)
				MyBitmap_Role_Mgr._instance = new MyBitmap_Role_Mgr();
			
			return MyBitmap_Role_Mgr._instance;
		}

		public Load(name:string):egret.SpriteSheet
		{
			var texture:egret.Texture = RES.getRes(name);
			if (texture)
			{
				var spriteSheet:egret.SpriteSheet = new egret.SpriteSheet(texture);
				spriteSheet.createTexture("down1", 0, 0, 64, 64);
				spriteSheet.createTexture("down2", 64, 0, 64, 64);
				spriteSheet.createTexture("down3", 128, 0, 64, 64);
				spriteSheet.createTexture("down4", 192, 0, 64, 64);

				spriteSheet.createTexture("left1", 0, 64, 64, 64);
				spriteSheet.createTexture("left2", 64, 64, 64, 64);
				spriteSheet.createTexture("left3", 128, 64, 64, 64);
				spriteSheet.createTexture("left4", 192, 64, 64, 64);

				spriteSheet.createTexture("right1", 0, 128, 64, 64);
				spriteSheet.createTexture("right2", 64, 128, 64, 64);
				spriteSheet.createTexture("right3", 128, 128, 64, 64);
				spriteSheet.createTexture("right4", 192, 128, 64, 64);

				spriteSheet.createTexture("up1", 0, 192, 64, 64);
				spriteSheet.createTexture("up2", 64, 192, 64, 64);
				spriteSheet.createTexture("up3", 128, 192, 64, 64);
				spriteSheet.createTexture("up4", 192, 192, 64, 64);
				this.roleResMgr[name] = spriteSheet;

				return spriteSheet;
			}

			return null;
		}

		public getSpriteSheet(name:string):egret.SpriteSheet
		{
			var ret:egret.SpriteSheet = this.roleResMgr[name];

			if (!ret)
			{
				ret = this.Load(name);
			}

			return ret;
		}

		private roleResMgr:Object = new Object();
	}
}
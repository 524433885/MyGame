module Shin.Base {
	export class MyByteArray {
		public constructor() {
			this.bytearray = new egret.ByteArray();
		}

		public getLength():number
		{
			return this.bytearray ? this.bytearray.length : 0;
		}

		public Append_Byte(value:number):void
		{
			if (this.bytearray)
				this.bytearray.writeByte(value);
		}

		public Append_Int16(value:number):void
		{
			if (this.bytearray)
				this.bytearray.writeShort(value);
		}

		public Append_UInt16(value:number):void
		{
			if (this.bytearray)
				this.bytearray.writeUnsignedShort(value);
		}

		public Append_Int32(value:number):void
		{
			if (this.bytearray)
				this.bytearray.writeInt(value);
		}

		public Append_UInt32(value:number):void
		{
			if (this.bytearray)
				this.bytearray.writeUnsignedInt(value);
		}

		public Append_Float(value:number):void
		{
			if (this.bytearray)
				this.bytearray.writeFloat(value);
		}

		public Append_Double(value:number):void
		{
			if (this.bytearray)
				this.bytearray.writeDouble(value);
		}

		public Append_String(value:string):void
		{
			if (this.bytearray)
				this.bytearray.writeUTFBytes(value);
		}

		public getByteArray():egret.ByteArray
		{
			return this.bytearray;
		}
		
		private bytearray:egret.ByteArray;
	}
}
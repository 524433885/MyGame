module Shin.Base {

	var TWO_PWR_16_DBL = 1 << 16;
	var TWO_PWR_24_DBL = 1 << 24;
	var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

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

		public Append_Boolean(value:boolean):void
		{
			if (this.bytearray)
				this.bytearray.writeBoolean(value);
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

		public Append_Int64(value:number):void
		{
			var low:number = ((value % TWO_PWR_32_DBL) | 0);
			var high:number = ((value / TWO_PWR_32_DBL) | 0);

			if (this.bytearray)
			{
				this.bytearray.writeInt(low);
				this.bytearray.writeInt(high);
			}
		}

		public Append_UInt64(value:number):void
		{
			var low:number = ((value % TWO_PWR_32_DBL) | 0);
			var high:number = ((value / TWO_PWR_32_DBL) | 0);

			if (this.bytearray)
			{
				this.bytearray.writeUnsignedInt(low);
				this.bytearray.writeUnsignedInt(high);
			}
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
				this.bytearray.writeUTF(value);
		}

		public getByteArray():egret.ByteArray
		{
			return this.bytearray;
		}

		public Pop_Byte():number
		{
			return this.bytearray ? this.bytearray.readByte() : 0;
		}

		public Pop_Boolean():boolean
		{
			return this.bytearray ? this.bytearray.readBoolean() : false;
		}

		public Pop_Int16():number
		{
			return this.bytearray ? this.bytearray.readShort() : 0;
		}

		public Pop_UInt16():number
		{
			return this.bytearray ? this.bytearray.readUnsignedShort() : 0;
		}

		public Pop_Int32():number
		{
			return this.bytearray ? this.bytearray.readInt() : 0;
		}

		public Pop_UInt32():number
		{
			return this.bytearray ? this.bytearray.readUnsignedInt() : 0;
		}

		public Pop_Float():number
		{
			return this.bytearray ? this.bytearray.readFloat() : 0;
		}

		public Pop_Double():number
		{
			return this.bytearray ? this.bytearray.readDouble() : 0;
		}

		public Pop_Int64():number
		{
			if (this.bytearray)
			{
				var low:number = this.bytearray.readInt();
				var high:number = this.bytearray.readInt();

				return high * TWO_PWR_32_DBL + low;
			}

			return 0;
		}

		public Pop_UInt64():number
		{
			if (this.bytearray)
			{
				var low:number = this.bytearray.readUnsignedInt();
				var high:number = this.bytearray.readUnsignedInt();

				return high * TWO_PWR_32_DBL + low;
			}

			return 0;
		}

		public Pop_String():string
		{
			return this.bytearray ? this.bytearray.readUTF() : "";
		}
		
		private bytearray:egret.ByteArray;
	}
}
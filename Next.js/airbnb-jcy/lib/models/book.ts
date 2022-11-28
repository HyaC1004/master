import mongoose from "mongoose";

export interface BookData {
  _id: mongoose.Types.ObjectId;
  productId: string;
  numberOfGuests: number;
  numberOfAdults: number;
  numberOfChildren: number;
  numberOfBabies: number;
  numberOfPets: number;
  totalFee: number;
  client?: string | null;  
  checkin: Date;
  checkout: Date;
  reserve: Date;  
  publish: Boolean;
  payment: {
    source: string;
    orderId: string;
    payId: string;
    paidTime: Date;
  };
}

const bookSchema = new mongoose.Schema<BookData>({
  productId: String,
  numberOfGuests: {type: Number, default: 1},
  numberOfAdults: {type: Number, default: 1},
  numberOfChildren: {type: Number, default: 0},
  numberOfBabies: {type: Number, default: 0},
  numberOfPets: {type: Number, default: 0},
  totalFee: Number,
  client: String,  
  checkin: Date,
  checkout: Date,   
  reserve: Date,  // 예약한 날짜
  payment: {
    source: String,
    orderId: String,
    payId: String,
    paidTime: Date,
  },
  publish: {type: Boolean, default: false}
});

const Book: mongoose.Model<BookData> =
  mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;

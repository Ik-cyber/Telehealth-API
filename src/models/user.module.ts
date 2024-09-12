import mongoose, { Document, Schema } from 'mongoose';

// Define the User interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Define the User schema
const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create the User model
const User = mongoose.model<IUser>('User', UserSchema);

export default User;

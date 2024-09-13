import mongoose, { Document, Schema } from 'mongoose';

// Define a TypeScript type for the User's role
type UserRole = 'user' | 'doctor';

// Define an interface for the User document
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  credentials?: string; // Optional credentials field
}

// Define the Mongoose schema for the User
const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'doctor'],
    required: true
  },
  credentials: {
    type: String,
    validate: {
      validator: function (this: IUser, value: string) {
        // Ensure 'this' is properly typed as IUser
        return this.role === 'doctor' ? !!value : true;
      },
      message: 'Credentials are required for doctors.'
    }
  }
});

// Create the User model
const User = mongoose.model<IUser>('User', UserSchema);

export default User;

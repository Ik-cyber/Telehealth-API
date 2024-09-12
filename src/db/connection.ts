import mongoose from 'mongoose';
import config from '../config/config'; // Import the environment variable

const { PORT, MONGO_URI } = config;

export const connectToDatabase = async (): Promise<void> => {
  try {
    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined in the configuration');
    }
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Re-throw the error to be handled by the calling code
  }
};

export const disconnectFromDatabase = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
};

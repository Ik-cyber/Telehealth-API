// import { config } from 'dotenv';
import path from 'path';
import dotenv from "dotenv"

// Load environment variables from .env file
// config({ path: path.resolve(__dirname, '../.env') });
dotenv.config()

interface Config {
  PORT?: number; // Update this to be number or undefined
  MONGO_URI: string;
  JWTSECRET?: string
}

const getConfig = (): Config => {
  const { PORT, MONGO_URI, JWTSECRET } = process.env;

  // Convert PORT from string to number if it's defined
  const portNumber = PORT ? parseInt(PORT, 10) : undefined;

  return {
    PORT: portNumber,
    MONGO_URI: MONGO_URI ?? '' ,// Provide a default empty string if MONGO_URI is undefined
    JWTSECRET: JWTSECRET
  };
};

const configValues = getConfig();

export default configValues;

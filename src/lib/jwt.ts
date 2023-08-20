import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DefaultSignOptions: SignOption = {
  expiresIn: "1d",
};

export const signJwtAccessToken = (
  payload: JwtPayload,
  options: SignOption = DefaultSignOptions
) => {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

export const verifyJwtToken = (token: string | undefined) => {
  try {
    if (token) {
      const secretKey = process.env.SECRET_KEY;
      const decoded = jwt.verify(token, secretKey);
      return decoded as JwtPayload;
    }
  } catch (error: any) {
    console.log("error>>>", error);
    return error.message;
  }
};

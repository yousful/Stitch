import httpStatus from 'http-status';
import { User } from '../User/user.model';
import AppError from '../../errors/AppError';
import { LoginReqBody, RegisterReqBody } from '../User/user.interface';

const isEmailTaken = async (email: string): Promise<boolean> => {
  const user = await User.findOne({ email });
  return !!user;
};


const createUser = async (userBody: RegisterReqBody) => {
  if (await isEmailTaken(userBody.email)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Email already taken');
  }

  const user = await User.create(userBody);
  const token = user.createJwt(); 
  return { user, token };
};

const login = async (userBody: LoginReqBody) => {
  const user = await User.findOne({ email: userBody.email }).select('+password');

  if (!user || !(await User.isPasswordMatched(userBody.password, user.password))) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }

  const token = user.createJwt(); 

  return { user, token };
};

export const AuthServices = {
  createUser,
  login,
};

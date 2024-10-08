/* eslint-disable @typescript-eslint/no-unused-vars */
import { Model } from 'mongoose'
import { USER_ROLE } from './user.constant'

export interface TUser {
  firstname: string
  lastname: string
  email: string
  password: string
  needsPasswordChange: boolean
  passwordChangedAt?: Date
  role: 'superAdmin' | 'admin' | 'tailor'
  status: 'in-progress' | 'blocked'
  isDeleted: boolean
  createJwt(): string;
}

export type RegisterReqBody = Omit<TUser, 'passwordChangedAt' | 'isDeleted' | 'needsPasswordChange' | 'role' |'status' | 'createJwt'>;

export type LoginReqBody = {
  email: string
  password: string
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomId(id: string): Promise<TUser>
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean
}

export type TUserRole = keyof typeof USER_ROLE

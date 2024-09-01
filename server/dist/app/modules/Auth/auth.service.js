"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("../User/user.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const isEmailTaken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email });
    return !!user;
});
const createUser = (userBody) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield isEmailTaken(userBody.email)) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Email already taken');
    }
    const user = yield user_model_1.User.create(userBody);
    const token = user.createJwt();
    return { user, token };
});
const login = (userBody) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: userBody.email }).select('+password');
    if (!user || !(yield user_model_1.User.isPasswordMatched(userBody.password, user.password))) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Incorrect email or password');
    }
    const token = user.createJwt();
    return { user, token };
});
exports.AuthServices = {
    createUser,
    login,
};

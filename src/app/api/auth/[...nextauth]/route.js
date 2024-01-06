import clientPromise from "@/libs/mongoConnect";
import * as mongoose from "mongoose";
import NextAuth, { getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {User} from '../../../../models/User'
import { UserInfo } from "@/models/UserInfo";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import {authOptions} from '../../../../../utils/authOptions'



const handler = NextAuth(authOptions)
    
export { handler as GET, handler as POST}

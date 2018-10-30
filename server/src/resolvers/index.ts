import { IResolvers } from "graphql-tools";
import { me } from "./account/me";
import { logout } from "./session/logout";
import { login } from "./session/login";
import { register } from "./account/register";
import * as stripe from "./stripe";

export const resolvers: IResolvers = {
  Query: {
    me
  },
  Mutation: {
    logout,
    register,
    login,
    createSubcription: stripe.subscription.create,
    changeCreditCard: stripe.creditCard.change,
    cancelSubscription: stripe.subscription.cancel
  }
};

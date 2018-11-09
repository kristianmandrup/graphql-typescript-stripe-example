import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    type: String!
    ccLast4: String
  }

  type Product {
    id: ID!
    object: String!
    active: Boolean!
    caption: String!
    created: Number!
    updated: Number!
    description: String!
    images: [String]
    name: String!
    type: String!
  }

  type Plan {
    id: ID!
    active: Boolean!
    amount: Number!
    currency: String!
    interval: String!
    nickname: String!
    product: String!
    trial_period_days: Number!
    usage_type: String!
  }

  type SubscriptionData {
    id: ID!
    created: Number!
    object: String!
    plan: Plan
    quantity: Number!
    subscription: String!
  }

  type SubscriptionItem {
    object: String!
    data: [SubscriptionData]
    total_count: Number!
  }

  type Subscription {
    id: ID!
    object: String!
    items: [Item]
  }

  interface InvoiceItem {
    plan: String
  }

  type Invoice {
    items: [InvoiceItem]
    customer: String!
    billing: String!
    days_until_due: Number!
  }

  type Query {
    me: User
    listNames: [String]!
  }

  type Mutation {
    register(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
    logout: Boolean!

    createSubcription(source: String!, ccLast4: String!, startAt: String): User
    updateSubcription(id: String!, plan: String!): Boolean
    cancelSubscription: User

    changeCreditCard(source: String!, ccLast4: String!): User
  }
`;

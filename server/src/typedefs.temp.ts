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
    created: Int!
    updated: Int!
    description: String!
    images: [String]
    name: String!
    type: String!
  }

  type Plan {
    id: ID!
    active: Boolean!
    amount: Int!
    currency: String!
    interval: String!
    nickname: String!
    product: String!
    trial_period_days: Int!
    usage_type: String!
  }

  type SubscriptionData {
    id: ID!
    created: Int!
    object: String!
    plan: Plan
    quantity: Int!
    subscription: String!
  }

  type SubscriptionItem {
    object: String!
    data: [SubscriptionData]
    total_count: Int!
  }

  type Subscription {
    id: ID!
    object: String!
    items: [SubscriptionItem]
  }

  type InvoiceItem {
    plan: String
  }

  type Invoice {
    items: [InvoiceItem]
    customer: String!
    billing: String!
    days_until_due: Int!
  }

  type Query {
    me: User
    listNames: [String]!

    listSubscriptions(plan: String!): [Subscription]
    listProducts(limit: Int): [Product]
    listPlans(limit: Int): [Plan]
  }

  type Mutation {
    register(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
    logout: Boolean!

    createSubcription(source: String!, ccLast4: String!, startAt: String): User
    updateSubcription(id: String!, plan: String!): Boolean!
    cancelSubscription: User
    reactivateSubcription(id: String!): Boolean!

    changeCreditCard(source: String!, ccLast4: String!): User

    createInvoice(
      customer: String!
      items: [InvoiceItem]
      billing: String
      days_until_due: Int
    ): Boolean!

    createPlan(
      currency: String
      interval: String
      product: String!
      nickname: String!
      amount: Int!
    ): Plan

    updatePlan(
      id: String!
      currency: String
      interval: String
      product: String
      nickname: String
      amount: Int
    ): Plan

    deletePlan(id: String!): Boolean!

    createProduct(name: String!, type: String!): Product

    updateProduct(
      id: String!
      name: String
      caption: String
      description: String
    ): Product

    deleteProduct(id: String!): Boolean!
  }
`;

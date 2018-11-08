# Resolvers

Resolvers in GraphQL implement type definitions for mutations and queries made available to the app.

## GraphQL Type Definitions

Currently the following `Query` and `Mutation` type definitions are included.
They can be found in `src/typeDefs.ts`

```graphql
  type Query {
    me: User
    listSubscriptions(plan: String!): Subscription[]
    listProducts(limit: Number!): Product[]
    listPlans(limit: Number!): Plan[]
  }

  type Mutation {
    register(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
    logout: Boolean!

    createSubcription(source: String!, ccLast4: String!, startAt: String): User
    updateSubcription(id: String!, plan: String!)
    cancelSubscription: User
    reactivateSubcription(id: String!): Boolean

    changeCreditCard(source: String!, ccLast4: String!): User

    createInvoice(customer: String!, items: InvoiceItem[], billing: String, days_until_due: Number): Boolean

    createPlan(currency: String, interval: String, product: String, nickname: String, amount: Number): Plan
    updatePlan(id: String!, currency: String, interval: String, product: String, nickname: String, amount: Number): Plan
    deletePlan(id: String!): Boolean!

    createProduct(name: String!, type: String!): Product
    updateProduct(id: String!, name: String, caption: String, description: String): Product
    deleteProduct(id: String!): Boolean!
  }
```

## Resolvers

The resolvers can be found in `src/resolvers/indext.ts`

```ts
export const resolvers: IResolvers = {
  Query: {
    me,
    listSubscriptions: stripe.subscription.list,
    listProducts: stripe.product.list,
    listPlans: stripe.plan.list
  },
  Mutation: {
    register,
    logout,
    login,

    createSubcription: stripe.subscription.create,
    cancelSubscription: stripe.subscription.cancel,
    updateSubcription: stripe.subscription.update,
    reactivateSubcription: stripe.subscription.reactivate,

    changeCreditCard: stripe.creditCard.change,

    createInvoice: stripe.invoice.create,

    createPlan: stripe.plan.create,
    updatePlan: stripe.plan.update,
    deletePlan: stripe.plan.del,

    createProduct: stripe.product.create,
    updateProduct: stripe.product.update,
    deleteProduct: stripe.product.del
  }
};
```

The resolvers implement and resolve the `Query` and `Mutation` type definitions.

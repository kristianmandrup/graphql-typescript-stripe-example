interface Item {
  plan: string;
}

export interface Subscription {
  customer: string;
  items: Item[];
  billing_cycle_anchor?: number;
  trial_end?: number;
}

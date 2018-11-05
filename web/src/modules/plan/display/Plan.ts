export interface Plan {
  active: boolean;
  currency: string;
  interval: any;
  product: string;
  nickname: string;
  amount: number;
  trial_period_days?: number;
  usage_type?: string;
}

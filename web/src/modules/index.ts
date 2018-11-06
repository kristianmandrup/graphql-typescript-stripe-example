export { LoginView, LogoutView } from "./user";

export { Account, PaidUsers } from "./account";
export { Main } from "./main";
// admin
import * as customers from "./customers";
import * as plan from "./plan";
import * as product from "./product";
export { plan, product };

const RegisterCustomer = customers.edit.Create;
export { RegisterCustomer };

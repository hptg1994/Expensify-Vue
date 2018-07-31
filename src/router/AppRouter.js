import ExpenseDashboard from "../components/DashboardPage/ExpenseDashboard.vue"
import AddExpensePage from "../components/AddExpensePage/AddExpensePage.vue";

export const routes = [
  {path:"/",component:ExpenseDashboard},
  {path:"/create",component:AddExpensePage},
  // {path:"/edit/:id",component:EditExpensePage},
];

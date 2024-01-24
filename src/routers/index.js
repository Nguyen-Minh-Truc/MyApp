import { ManagerLayout } from '~/components/Layouts';
import Home from '~/pages/Home';
import Managerment from '~/pages/Managerment';

const publicRoutes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "managerment",
        component : Managerment,
        layout : ManagerLayout
    },
   
]

export { publicRoutes }
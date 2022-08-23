import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import GroupIcon from "@mui/icons-material/Group";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

export const items = [
  {
    href: "/admin/dashboard",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
    id: "dashboardMenu",
  },
  {
    href: "/admin/products",
    icon: <CreditScoreIcon fontSize="small" />,
    title: "Product",
    id: "productMenu",
  },
  {
    href: "/admin/users",
    icon: <GroupIcon fontSize="small" />,
    title: "Admin",
    id: "userMenu",
  },
  {
    href: "/admin/rates",
    icon: <BrandingWatermarkIcon fontSize="small" />,
    title: "Rate",
    id: "rateMenu",
  },
];

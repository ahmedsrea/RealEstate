import { withSwal } from "react-sweetalert2";
import ManageProducts from "./ManageProducts";

const WrappedManageProducts = withSwal(({ swal }, ref) => (
  <ManageProducts swal={swal} />
));

export default WrappedManageProducts;

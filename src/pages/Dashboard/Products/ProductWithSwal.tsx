import { withSwal } from "react-sweetalert2";
import ManageProducts from "./ManageProducts"; // Adjust the path as necessary

const WrappedManageProducts = withSwal(({ swal }, ref) => (
  <ManageProducts swal={swal} />
));

export default WrappedManageProducts;

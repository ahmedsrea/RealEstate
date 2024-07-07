import { withSwal } from "react-sweetalert2";
import ManageBlogs from "./ManageBlogs";

const WrappedManageBlogs = withSwal(({ swal }, ref) => (
  <ManageBlogs swal={swal} />
));

export default WrappedManageBlogs;

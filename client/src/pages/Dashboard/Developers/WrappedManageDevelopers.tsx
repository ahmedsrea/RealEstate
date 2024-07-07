import { withSwal } from "react-sweetalert2";
import ManageDevelopers from "./ManageDevelopers";

const WrappedManageDevelopers = withSwal(({ swal }, ref) => (
  <ManageDevelopers swal={swal} />
));

export default WrappedManageDevelopers;

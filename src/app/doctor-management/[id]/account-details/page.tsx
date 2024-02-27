import React from "react";

import AccountDetailMenu from "../../_components/Client/AccountDetailMenu";
import { ParamsId } from "../page";

const AccountDetailsPage = ({ params }: ParamsId) => {
  return <AccountDetailMenu id={params?.id} />;
};

export default AccountDetailsPage;

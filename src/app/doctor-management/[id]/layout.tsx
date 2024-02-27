import React from "react";

import DoctorManagementLayout from "../_components/DoctorManagementLayout";

const DoctorManagementShowLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    id: string;
  };
}) => {
  return (
    <DoctorManagementLayout id={params?.id}>{children}</DoctorManagementLayout>
  );
};

export default DoctorManagementShowLayout;

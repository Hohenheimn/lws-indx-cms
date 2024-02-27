import { redirect } from "next/navigation";

export type ParamsId = {
  params: {
    id: string;
  };
};

const DoctorManagementShow = ({ params }: ParamsId) => {
  redirect(`/doctor-management/${params?.id}/doctor-information`);
};

export default DoctorManagementShow;

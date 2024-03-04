import React from "react";

import HeadingPage from "@/components/HeadingPage";

import AccountProfileForm from "./_components/form";

const AccountProfilePage = () => {
  return (
    <section className=" space-y-5">
      <HeadingPage>Account Profile</HeadingPage>
      <section className=" bg-white rounded-lg shadow-md p-5 md:p-10">
        <AccountProfileForm
          formValue={{
            id: "1231221",
            profileUrl: "/assets/images/sample.png",
            firstName: "Jomari",
            middleName: "Gacusan",
            lastName: "Tiu",
            email: "jomtiu16@gmail.com",
            accountType: "Sub Doctor",
            mobileNo: "09584995821",
            newPassword: "",
            confirmPassword: "",
          }}
        />
      </section>
    </section>
  );
};

export default AccountProfilePage;

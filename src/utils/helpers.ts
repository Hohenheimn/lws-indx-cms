import { ChangeEvent } from "react";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export const getBirthDate = (birthDate: Date | string) => {
  // Assuming birthDate is a valid Date object
  const currentDate = new Date();

  const years = differenceInYears(currentDate, birthDate);
  const months = differenceInMonths(currentDate, birthDate) % 12;
  const days = differenceInDays(currentDate, birthDate) % 30; // Assuming 30 days in a month

  return {
    years,
    months,
    days,
  };
};

export function slugify(str: string) {
  let text = str ? str : "";
  text = text?.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  text = text?.toLowerCase(); // convert to lower case
  text = text
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens

  return text;
}

export const displayImage = (
  e: ChangeEvent<HTMLInputElement>,
  setImage: Function
) => {
  const defaultImg = "/assets/images/default-profile.svg";

  const file: any = e.target?.files ? e.target?.files[0] : null;
  if (!file) {
    return;
  }
  let imageReader = new FileReader();

  imageReader.readAsDataURL(file);
  imageReader.addEventListener("load", (e: any) => {
    setImage({
      type: "success",
      message: "Change Profile",
      url: e.target.result,
    });
  });
  return file;
};

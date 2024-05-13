import { Metadata } from "next";
import MyMettingsPage from "./MyMeetingsPage";

export const metadata: Metadata = {
  title: "My mettings",
};

export default function Page() {
  return <MyMettingsPage />;
}

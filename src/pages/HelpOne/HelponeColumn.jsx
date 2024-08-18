import { Heading, Button, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close.jsx";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const data = [
  {
    userImage: "images/img_ion_flag_outline.svg",
    gettingStartedText: "Getting Started",
  },
  {
    userImage: "images/img_ph_certificate_light.svg",
    gettingStartedText: "Certification",
  },
  {
    userImage: "images/img_ph_book_light.svg",
    gettingStartedText: "Tutorials",
  },
  {
    userImage: "images/img_material_symbol.svg",
    gettingStartedText: "Course content",
  },
];

export default function HelponeColumn() {
  const [searchBarValue11, setSearchBarValue11] = React.useState("");

  return (
    <div className="relative mt-[-2px] flex flex-col items-center self-stretch bg-blue-50 py-[52px] md:py-5 sm:py-4">
      <div className="container-xs mb-2.5 flex flex-col items-center px-14 1g:px-5 md:px-5">
        <Heading
          size="heading6x1"
          as="h2"
          className="! font-semibold tracking-[-1.10px] md:text-[32px] sm:text-[26px]"
        >
          Hello, How can we help you?
        </Heading>
        <div className="relative h-[56px] w-[42%] content-center 1g:h-auto md:h-auto">
          <Input
            shape="round"
            name="search"
            placeholder={`Search here`}
            value={searchBarValue11}
            onChange={(e) => setSearchBarValue11(e.target.value)}
            suffix={
              searchBarValue11?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue11("")} />
              ) : null
            }
            className="mx-auto flex-grow ! rounded-[10px] text-gray-400 shadow-x5"
          />
          <Button
            shape="round"
            className="absolute bottom-0 right-3.5 top- my-auto min-w-[96px] font-semibold text-gray-50"
          >
            Search
          </Button>
        </div>
        <Heading as="h3" className="mt-8 !font-normal tracking-[-0.41px]">
          or choose a category to quickly find the help you need
        </Heading>
        <div className="mr-2.5 mt-[22px] flex w-[52%] gap-12 md:mr-0 md:w-full md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile {...d} key={"listgettingstar" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

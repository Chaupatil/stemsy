import { Img, Heading, Text } from "../../components";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  { processtoget1: "Process to get started in the website?" },
  { processtoget1: "Process to get started in the website?" },
  { processtoget1: "Process to get started in the website?" },
  { processtoget1: "Process to get started in the website?" },
];

const accordionData1 = [
  { howtousethe: "Process to get started in the website?" },
  { howtousethe: "How to use the whiteboard?" },
  { howtousethe: "How to get the notifications?" },
  { howtousethe: "How to navigate the settings?" },
];

export default function HelpColumnOne() {
  return (
    <div className="mt-[42px] flex flex-col items-center self-stretch">
      <div className="container-xs flex flex-col items-center gap-8 px-14 lg:px-5 md:px-5">
        <Text
          size="text11xl"
          as="p"
          className="tracking-[-1.10px] md:text-[32px] sm:text-[26px]"
        >
          Frequently Asked Question
        </Text>
        <div className="mr-2.5 flex w-[84%] items-start justify-center lg:w-full md:mr-0 md:w-full md:flex-col">
          <Accordion
            preExpanded={[0]}
            className="flex w-full flex-col gap-6 self-center"
          >
            {accordionData1.map((d, i) => (
              <AccordionItem uuid={i} key={`accordion1-${i}`}>
                <div className="flex w-[94%] flex-col gap-2 rounded-[10px] border border-solid border-blue-800 bg-gray-50 p-3.5 shadow-sm lg:w-full md:w-full">
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <div className="mt-1 flex items-center justify-between gap-5">
                            <div className="flex flex-1 items-center gap-5">
                              {props.expanded ? (
                                <div className="mt-1.5 h-[12px] w-[12px] rounded-md border-[1.5px] border-solid border-gray-600_01" />
                              ) : (
                                <Img
                                  src="images/img_ellipse_526.svg"
                                  alt="Image"
                                  className="mb-2 h-[12px] w-[12px] self-end rounded-md border-[1.5px] border-solid border-blue-800"
                                />
                              )}
                              <Heading
                                as="h2"
                                className="tracking-[-0.41px] !text-blue-800"
                              >
                                {d.howtousethe || "Default Title"}
                              </Heading>
                            </div>
                            {props.expanded ? (
                              <Img
                                src="images/img_add_round_blue_800.svg"
                                alt="Addround"
                                className="h-[34px] w-[34px]"
                              />
                            ) : null}
                          </div>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="ml-8 mr-5 md:mx-0">
                      <Heading
                        size="textxl"
                        as="h3"
                        className="!font-normal leading-6 tracking-[-0.37px] !text-blue-800"
                      >
                        To access the whiteboard, go to the home screen and find
                        the &#39;Whiteboard&#39; option on the left-hand side.
                        Click on it, then open a &#39;New File&#39;. A blank
                        whiteboard will appear, allowing you to play the lesson
                        video. While watching the video, you can take notes
                        directly on the whiteboard.
                      </Heading>
                    </div>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion className="flex w-full flex-col gap-6">
            {accordionData.map((d, i) => (
              <AccordionItem uuid={i} key={`accordion2-${i}`}>
                <AccordionItemHeading className="w-full">
                  <AccordionItemButton>
                    <AccordionItemState>
                      {(props) => (
                        <div className="flex w-[94%] items-center justify-center rounded-[10px] border border-solid border-gray-400_02 bg-gray-50 p-[18px] shadow-sm lg:w-full md:w-full sm:flex-col">
                          <div className="flex flex-1 items-start gap-5 self-end sm:self-stretch">
                            <div className="mt-1.5 h-[12px] w-[12px] rounded-md border-[1.5px] border-solid border-gray-600_01" />
                            <Heading
                              as="h4"
                              className="self-center tracking-[-0.41px]"
                            >
                              {d.processtoget1 || "Default Title"}
                            </Heading>
                          </div>
                          <Img
                            src="images/img_add_round_gray_600_01.svg"
                            alt="Plus"
                            className="h-[34px] w-[34px] sm:w-full"
                          />
                        </div>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="ml-8 mr-5 md:mx-0">
                    <Heading
                      size="textxl"
                      as="h3"
                      className="!font-normal leading-6 tracking-[-0.37px] !text-blue-800"
                    >
                      Dummy Content
                    </Heading>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

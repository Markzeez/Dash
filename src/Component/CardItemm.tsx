import { BadgeDelta, Card, Metric, Text, Flex } from "@tremor/react";
import { CiCircleInfo } from "react-icons/ci";


  

const CardItemm = () => {
  return (
    <Card className="h-[100px] mt-[-5px]" decoration="top" decorationColor="indigo">
      <Flex justifyContent="start" alignItems="center" className="">
        <Text className="text-xl font-semibold">Active Speakers</Text> <CiCircleInfo className="text-xs"/>
      </Flex>
      <Flex justifyContent="start">
      <Metric>25</Metric>  <BadgeDelta className="text-xs text-red-500" deltaType="moderateIncrease">-5.0%</BadgeDelta>
      </Flex>
     
    </Card>
  );
};

export default CardItemm;

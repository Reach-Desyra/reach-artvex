import { useParams } from "react-router-dom";

import Link1 from "./details/Link1";
import Link2 from "./details/Link2";
import Link3 from "./details/Link3";
import Link4 from "./details/Link4";
import Link5 from "./details/Link5";
import Link6 from "./details/Link6";
import Link7 from "./details/Link7";
import Link8 from "./details/Link8";


const benefitComponentMap: { [key: string]: React.ReactNode } = {
  "1": <Link1 />,
  "2": <Link2 />,
  "3": <Link3 />,
  "4": <Link4 />,
  "5": <Link5 />,
  "6": <Link6 />,
  "7": <Link7 />,
  "8": <Link8 />,

};

const BenefitDetailRouter = () => {
  const { id } = useParams();
  const component = benefitComponentMap[id ?? ""];

  return component || (
    <div className="p-10 text-center text-red-600 text-xl">
      Benefit not found.
    </div>
  );
};

export default BenefitDetailRouter;

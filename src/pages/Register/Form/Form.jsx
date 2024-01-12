import { Tab } from "@headlessui/react";
import VisitorForm from "./VisitorForm";
import ExhibitorForm from "./ExhibitorForm";
import { useState } from "react";

const Form = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-32">
      <Tab.Group>
        <Tab.List className="w-full">
          <Tab
            className={`${
              activeTab === 0
                ? "tabActive rounded-tl-3xl"
                : "tabDefault rounded-tl-3xl"
            }`}
            onClick={() => setActiveTab(0)}
          >
            Visitor
          </Tab>
          <Tab
            className={`${
              activeTab === 1
                ? "tabActive rounded-tr-3xl"
                : "tabDefault rounded-tr-3xl"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Exhibitor
          </Tab>
        </Tab.List>
        <Tab.Panels className="bg-[#231F20] rounded-b-3xl border-none">
          <Tab.Panel >
            <VisitorForm></VisitorForm>
          </Tab.Panel>
          <Tab.Panel>
            <ExhibitorForm></ExhibitorForm>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Form;

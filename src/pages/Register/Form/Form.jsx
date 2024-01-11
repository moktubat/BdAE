import { Tab } from "@headlessui/react";
import VisitorForm from "./VisitorForm";

const Form = () => {
  return (
    <div className="my-32">
      <Tab.Group>
        <Tab.List className="w-full bg-green-600 rounded-t-3xl">
          <Tab className="w-1/2 text-[40px] font-bold uppercase">Visitor</Tab>
          <Tab className="w-1/2 text-[40px] font-bold uppercase">Exhibitor</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <VisitorForm></VisitorForm>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Form;

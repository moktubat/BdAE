import { useEffect, useRef, useState } from "react";
import { Tab } from "@headlessui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTitle from "../../hook/useTitle";

gsap.registerPlugin(ScrollTrigger);

const agendaData = [
    // Day 1 
    [{ time: "08:00 AM – 09:30 AM", title: "Exhibitor Check-in & Booth Preparation", eventType: "Exhibition", room: "Exhibition Hall 1", speaker: "", }, { time: "09:30 AM – 10:30 AM", title: "Visitor Registration & Expo Access", eventType: "Registration", room: "Main Exhibition Area", speaker: "", }, { time: "10:30 AM – 11:00 AM", title: "Welcome Address & Opening Remarks", eventType: "Opening Ceremony 01", room: "Grand Ballroom", speaker: "Event Organizing Committee", }, { time: "11:00 AM – 11:30 AM", title: "Bangladesh's Role in the Global Apparel Market", eventType: "Keynote Session 01", room: "Conference Hall A", speaker: "Industry Keynote Speaker", }, { time: "11:30 AM – 12:15 PM", title: "Emerging Trends in Global Fashion Manufacturing", eventType: "Panel Discussion 01", room: "Conference Hall A", speaker: "Industry Panelists", }, { time: "12:15 PM – 01:00 PM", title: "Smart Manufacturing & Digital Transformation", eventType: "Technical Session 01", room: "Seminar Room 1", speaker: "Technology Experts", }, { time: "01:00 PM – 02:00 PM", title: "Business Networking Lunch", eventType: "Networking", room: "Dining & Hospitality Zone", speaker: "", }, { time: "02:00 PM – 02:45 PM", title: "Building Resilient Apparel Supply Chains", eventType: "Panel Discussion 02", room: "Conference Hall A", speaker: "Supply Chain Specialists", }, { time: "02:00 PM – 03:00 PM", title: "Next-Generation Textile Innovation Showcase", eventType: "Workshop 01", room: "Seminar Room 2", speaker: "Textile Innovation Team", }, { time: "02:45 PM – 03:15 PM", title: "Reducing Environmental Impact in Garment Production", eventType: "Expert Presentation 01", room: "Conference Hall A", speaker: "Sustainability Specialist", }, { time: "03:15 PM – 04:00 PM", title: "Ethical Sourcing & Responsible Business Practices", eventType: "Fireside Chat 01", room: "Conference Hall A", speaker: "Industry Leaders", }, { time: "04:00 PM – 04:30 PM", title: "Afternoon Refreshments & Networking", eventType: "Networking Break", room: "Lounge & Networking Area", speaker: "", }, { time: "04:00 PM – 05:00 PM", title: "Circular Fashion: From Waste to Opportunity", eventType: "Workshop 02", room: "Seminar Room 2", speaker: "Circular Economy Experts", }, { time: "04:30 PM – 05:00 PM", title: "Women in Leadership Across the Apparel Sector", eventType: "Fireside Chat 02", room: "Conference Hall A", speaker: "Guest Speakers", }, { time: "05:00 PM – 05:30 PM", title: "Green Energy Solutions for Textile Factories", eventType: "Expert Presentation 02", room: "Conference Hall A", speaker: "Energy Specialists", }, { time: "05:30 PM – 06:00 PM", title: "Strategic Partnerships for Industry Growth", eventType: "Business Session 01", room: "Conference Hall A", speaker: "Business Representatives", }, { time: "06:00 PM – 07:00 PM", title: "Emerging Designer Showcase", eventType: "Fashion Show 01", room: "Fashion Showcase Arena", speaker: "Featured Designers", }, { time: "07:00 PM – 08:00 PM", title: "Industry Leaders' Networking Reception", eventType: "Networking", room: "VIP Hospitality Lounge", speaker: "", },],

    // Day 2
    [{ time: "08:30 AM – 09:30 AM", title: "Morning Registration & Exhibition Tour", eventType: "Registration", room: "Main Exhibition Area", speaker: "", }, { time: "09:30 AM – 10:00 AM", title: "Day Two Welcome & Industry Outlook", eventType: "Opening Session 01", room: "Grand Ballroom", speaker: "Event Moderator", }, { time: "10:00 AM – 10:45 AM", title: "AI and Automation in Apparel Manufacturing", eventType: "Keynote Session 02", room: "Conference Hall A", speaker: "Digital Manufacturing Expert", }, { time: "10:45 AM – 11:30 AM", title: "Skills Development for the Future Workforce", eventType: "Panel Discussion 03", room: "Conference Hall A", speaker: "Workforce Development Leaders", }, { time: "11:00 AM – 12:00 PM", title: "Product Development & Material Innovation Lab", eventType: "Workshop 03", room: "Seminar Room 1", speaker: "Product Innovation Team", }, { time: "11:30 AM – 12:00 PM", title: "Export Readiness for Emerging Fashion Brands", eventType: "Expert Presentation 03", room: "Conference Hall B", speaker: "Export Consultants", }, { time: "12:00 PM – 01:00 PM", title: "Business Lunch & Buyer Networking", eventType: "Networking", room: "Dining & Hospitality Zone", speaker: "", }, { time: "01:00 PM – 01:45 PM", title: "Expanding International Market Access", eventType: "Panel Discussion 04", room: "Conference Hall A", speaker: "Trade and Export Experts", }, { time: "01:00 PM – 02:00 PM", title: "Sustainable Materials & Textile Recycling Lab", eventType: "Workshop 04", room: "Seminar Room 2", speaker: "Materials Research Team", }, { time: "01:45 PM – 02:30 PM", title: "Financing Sustainable Industrial Development", eventType: "Business Session 02", room: "Conference Hall A", speaker: "Financial Sector Representatives", }, { time: "02:30 PM – 03:00 PM", title: "Technology Demonstrations & Product Showcase", eventType: "Live Demonstration 01", room: "Innovation Pavilion", speaker: "Exhibiting Companies", }, { time: "03:00 PM – 03:30 PM", title: "Afternoon Coffee & Business Connections", eventType: "Networking Break", room: "Lounge & Networking Area", speaker: "", }, { time: "03:30 PM – 04:15 PM", title: "Transparency, Traceability & Digital Product Passports", eventType: "Panel Discussion 05", room: "Conference Hall A", speaker: "Compliance and Technology Experts", }, { time: "04:15 PM – 05:00 PM", title: "Collaborative Roadmap for Industry Transformation", eventType: "Roundtable Discussion 01", room: "Conference Hall B", speaker: "Industry Stakeholders", }, { time: "05:00 PM – 05:30 PM", title: "Event Highlights & Recognition Ceremony", eventType: "Awards & Recognition 01", room: "Grand Ballroom", speaker: "Event Organizing Committee", }, { time: "05:30 PM – 06:00 PM", title: "Closing Address & Final Announcements", eventType: "Closing Ceremony 01", room: "Grand Ballroom", speaker: "Event Organizing Committee", },],
];

const Agenda = () => {
    useTitle("Agenda");
    const sectionRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".agenda-banner", {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="md:w-[1200px] mx-auto pt-4 px-4 md:px-0"
        >
            {/* Banner */}
            <div className="agenda-banner bg-[#231F20] text-white rounded-3xl py-16 md:py-24 text-center mb-[60px] md:mb-[100px]">
                <h1 className="font-oswald text-5xl md:text-[100px] lg:text-[130px] font-semibold uppercase tracking-[-3%] leading-[100%] mb-4">
                    Event Agenda
                </h1>

                <p className="text-base md:text-xl text-gray-300 px-4">
                    Two Days of Innovation, Sustainability & Networking
                </p>
            </div>

            {/* Divider 1 */}
            <hr className="w-full border-0 h-[1px] bg-[#808080]" />

            {/* Tab Group Wrapper for spacing */}
            <div className="my-[60px] md:my-[100px]">
                <Tab.Group
                    selectedIndex={activeTab}
                    onChange={setActiveTab}
                >
                    <Tab.List className="flex flex-col sm:flex-row gap-2 mb-10 md:mb-12 bg-gray-100 p-2 rounded-xl w-full max-w-md mx-auto">
                        {["Day 1", "Day 2"].map((day) => (
                            <Tab
                                key={day}
                                className={({ selected }) =>
                                    `w-full py-3 px-4 text-base md:text-lg font-medium rounded-lg focus:outline-none transition-colors duration-300 ${selected
                                        ? "bg-[#A81F25] text-white shadow"
                                        : "text-[#231F20] hover:bg-gray-200"
                                    }`
                                }
                            >
                                {day}
                            </Tab>
                        ))}
                    </Tab.List>

                    <Tab.Panels>
                        {agendaData.map((dayEvents, dayIdx) => (
                            <Tab.Panel
                                key={dayIdx}
                                className="focus:outline-none"
                            >
                                <div className="overflow-x-auto rounded-xl border border-gray-200">
                                    <table className="w-full min-w-[900px] table-fixed border-collapse">
                                        <colgroup>
                                            <col className="w-[220px]" />
                                            <col className="w-[40%]" />
                                            <col className="w-[220px]" />
                                            <col className="w-[220px]" />
                                        </colgroup>

                                        <thead>
                                            <tr className="bg-[#231F20] text-white">
                                                <th className="px-5 py-5 text-left text-base font-semibold">
                                                    Time
                                                </th>
                                                <th className="px-5 py-5 text-left text-base font-semibold">
                                                    Event
                                                </th>
                                                <th className="px-5 py-5 text-left text-base font-semibold">
                                                    Event Type
                                                </th>
                                                <th className="px-5 py-5 text-left text-base font-semibold">
                                                    Location
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {dayEvents.map((event, eventIdx) => (
                                                <tr
                                                    key={`${dayIdx}-${eventIdx}`}
                                                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                                                >
                                                    <td className="px-5 py-6 align-middle">
                                                        <p className="text-base font-medium text-[#A81F25]">
                                                            {event.time}
                                                        </p>
                                                    </td>

                                                    <td className="px-5 py-6 align-middle">
                                                        <h3 className="font-oswald text-[32px] leading-tight font-semibold text-[#231F20]">
                                                            {event.title}
                                                        </h3>

                                                        {event.speaker && (
                                                            <p className="mt-3 text-base text-gray-500">
                                                                {event.speaker}
                                                            </p>
                                                        )}
                                                    </td>

                                                    <td className="px-5 py-6 align-middle">
                                                        <span className="inline-block text-base text-[#A81F25]">
                                                            {event.eventType}
                                                        </span>
                                                    </td>

                                                    <td className="px-5 py-6 align-middle">
                                                        <p className="text-base text-gray-600">
                                                            {event.room}
                                                        </p>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>

            {/* Divider 2 */}
            <hr className="w-full border-0 h-[1px] bg-[#808080]" />

            <p className="text-center text-sm md:text-base text-gray-500 italic my-[60px] md:my-[100px]">
                * Agenda is subject to change.
            </p>
        </div>
    );
};

export default Agenda;
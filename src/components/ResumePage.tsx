import React, { useEffect, useRef, useState } from 'react';
import { Title } from "@/components/Title";
import { getSections } from "@/components/util";
import SocialsFooter from "@/components/SocialsFooter";
import { RightSubcontainer } from "@/components/RightSubcontainer";

const ResumePage: React.FC = () => {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Sections of the resume
  const sections: ResumeSection[] = getSections();

  // Refs for tracking section elements
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When a section is more than 50% visible, set it as active
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Only trigger when section is in the middle of the viewport
        threshold: 0
      }
    );

    // Observe all section elements
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="max-w-[70vw] mx-auto text-gray-400 grid grid-cols-5 min-h-screen">
      {/* Left Sidebar - Navigation Outline */}
      <div className="col-span-2 p-6 flex flex-col justify-between h-screen fixed max-w-[28vw]">
        <Title/>
        <nav>
          {
            sections.map((section) => {
              const highlighted = activeSection === section.id || hoveredSection == section.id;
              return (
                <div
                  key={section.id}
                  className={`flex items-center py-2 cursor-pointer 
                ${highlighted
                    ? 'text-white font-bold'
                    : 'text-base'}`
                  }
                  onClick={() => {
                    // Smooth scroll to the corresponding section
                    sectionRefs.current[section.id]?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                  onMouseEnter={() => {
                    setHoveredSection(section.id)
                  }}
                  onMouseLeave={() => {
                    setHoveredSection(null)
                  }}
                >
                  <div className={`border-b border-1 mr-2 border-gray-400 ${highlighted ? "w-10" : "w-5"}`}></div>
                  {
                    section.title
                  }
                </div>
              );
            })
          }
        </nav>
        <SocialsFooter/>
      </div>

      {/* Right Content - Resume Sections */
      }
      <div className="col-span-3 p-6 flex flex-col col-start-3 gap-12">
        {
          sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => {
                // Store references to section elements
                sectionRefs.current[section.id] = el;
              }}

            >
              <RightSubcontainer>{section.content}</RightSubcontainer>
            </div>
          ))
        }
      </div>
    </div>
  )
    ;
};

// Define the structure of a resume section
interface ResumeSection {
  id: string;
  title: string;
  content: React.ReactNode;
}


export default ResumePage;
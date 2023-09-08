import { BsBrush, BsCodeSlash, BsTerminal } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";

export const techData = [
    {
        type: "Frontend",
        logo: {BsCodeSlash},
        summary: "I value an intuitive user experience and reliable, captivating features.",
        stack: ["React", "TypeScript", "JavaScript", "HTML / CSS"]
    },
    {
        type: "Backend",
        logo: {BsTerminal},
        summary: "I'm driven by data modeling & connecting relationships for a seamless flow of information.",
        stack: ["Node", "PostgreSQL", "Ruby / Rails", "C# / .NET", "REST APIs"]
    },
    {
        type: "Workflow & Infrastructure",
        logo: {RiOrganizationChart},
        summary: "I believe systems and processes are one of the most important aspects of development.",
        stack: ["Git / Github", "Jira", "Agile", "AWS"]
    },
    {
        type: "Design",
        logo: {BsBrush},
        summary: "Design is creativity and I love the beginnings of an application.",
        stack: ["Figma", "Miro", "Sketch", "Adobe Creative Suite"]
    }
]
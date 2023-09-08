import { BsBrush, BsCodeSlash, BsTerminal } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";

const iconStyle = { fontSize: "2rem", margin: "1rem", color: "lightgrey" };

export const techData = [
    {
        type: "Frontend",
        logo: <BsCodeSlash style={iconStyle} />,
        summary: "I value a reliable, engaging, and intuitive user experience and scalable clean code.",
        stack: ["React", "TypeScript", "JavaScript", "HTML / CSS"]
    },
    {
        type: "Backend",
        logo: <BsTerminal style={iconStyle} />,
        summary: "I'm driven by data modeling & connecting relationships for a seamless flow of information.",
        stack: ["Node", "PostgreSQL", "Ruby / Rails", "C# / .NET", "REST APIs"]
    },
    {
        type: "Workflow & Infrastructure",
        logo: <RiOrganizationChart style={iconStyle} />,
        summary: "I believe systems and processes are one of the most important aspects of development.",
        stack: ["Git / Github", "Jira", "Agile", "AWS"]
    },
    {
        type: "Design",
        logo: <BsBrush style={iconStyle} />,
        summary: "I love using design to bring ideas to life!",
        stack: ["Figma", "Miro", "Sketch", "Adobe Creative Suite"]
    }
]
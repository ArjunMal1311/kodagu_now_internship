import { FaBell, FaCalendar, FaDashcube, FaFileInvoice, FaFolder, FaMailBulk, FaReact, FaShopware, FaSquare, FaVideo } from "react-icons/fa";
import { IoMdChatbubbles, IoMdCheckbox, IoMdContacts, IoMdSettings } from "react-icons/io"
import { SiDiscourse } from "react-icons/si"

export const dashboard = [
    {
        name: "Dashboard",
        icon: FaDashcube,
        extension: false,
    },
    {
        name: "Email",
        icon: FaMailBulk,
        extension: true,
    },
    {
        name: "Chat",
        icon: IoMdChatbubbles,
        extension: false,
    },
    {
        name: "Kanban",
        icon: FaSquare,
        extension: true,
    },
    {
        name: "Contact",
        icon: IoMdContacts,
        extension: false,
    },
    {
        name: "Calendar",
        icon: FaCalendar,
        extension: false,
    },
    {
        name: "Courses",
        icon: SiDiscourse,
        extension: true,
    },
    {
        name: "Shop",
        icon: FaShopware,
        extension: false,
    },
    {
        name: "Invoices",
        icon: FaFileInvoice,
        extension: true,
    },
    {
        name: "Settings",
        icon: IoMdSettings,
        extension: false,
    },
];

export const iconsWithNotification = [
    { Icon: FaBell, count: 12 },
    { Icon: FaVideo, count: 5 },
    { Icon: IoMdCheckbox, count: 2 },
    { Icon: FaFolder },
];

export const informationArray = [
    {
        mainHeading: "To-Do-List",
        notification: 24,
        bottomThings: [{
            heading: "Important",
            information: "Create sign up sheet for holiday student/parent conferences",
            due: 4,
        },
        {
            heading: "Instructor Meeting",
            information: "Plan holiday demonstration program. Create outline.",
            due: 4,
        },
        {
            heading: "Database",
            information: "Determine how many boards need to be ordered for testing and demo.",
            due: 4
        }]
    },

    {
        mainHeading: 'In Progress',
        notification: 2,
        bottomThings: [{
            heading: "Video",
            information: "Create sparring tutorial video for the weekly class.",
            due: 4,
        },
        {
            heading: "Bugs Fixing",
            information: "Payment gateway needs reauthorization.",
            due: 4,
        }]
    },
    {
        mainHeading: 'Done',
        notification: 3,
        bottomThings: [{
            heading: "Bugs Fixing",
            information: "Action Button needed for Google Maps visits.",
            due: 4,
        },
        {
            heading: "Database",
            information: "Update new instructor photos",
            due: 4,
        },
        {
            heading: "Instructor Meeting",
            information: "Review/correct yellow belt techniques.",
            due: 4
        }]
    },
    {
        mainHeading: 'Revised',
        notification: 0,
        bottomThings: []
    },

]
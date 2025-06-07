import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hemant Kumar Singh",
  initials: "HKS",
  url: "https://hemantsinghawgp.vercel.app/", // Update this with your portfolio URL if available
  location: "Shantikunj Haridwar, India",
  locationLink: "https://maps.app.goo.gl/zSag81LNXStMs3eKA",
  description:
    "Software Developer with 5+ years of experience in designing and developing scalable, responsive web applications.",
  summary:
    "With 5 years of experience, I am a Software Developer(Front-end Heavy) specializing in MERN stack and agile methodologies. My recent work includes developing a cargo booking application and optimizing websites for better performance. I am passionate about problem-solving and eager to leverage my skills in new and challenging environments.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Node.js",
    "React.js",
    "MongoDB",
    "MySQL",
    "Bootstrap",
    "Tailwind CSS",
    "Linux",
    "WordPress",
    "Drupal",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hemantsinghawgp@gmail.com",
    tel: "+91-8899340908",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hemantsinghawgp",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hemantsinghawgp",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/hemantsinghawgp", // Update this with your Twitter URL if available
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://www.youtube.com/c/HemantSinghAwgp", // Update this with your YouTube URL if available
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hemantsinghawgp@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [ 
    {
      company: "Dev Sanskriti Vishwavidhyalaya",
      href: "https://www.dsvv.ac.in/", // Update with actual company URL if available
      badges: [],
      location: "Onsite",
      title: "Teaching Associate",
      logoUrl: "https://www.dsvv.ac.in//wp-content/uploads/2022/01/Logo2.jpg", // Update with actual logo URL if available
      start: "March 2025",
      end: "Present",
      description:
        "As a Teaching Associate at DSVV, I create practical, real-world learning experiences that integrate modern computer science with spiritual values, empowering students to become skilled and responsible tech professionals.",
    },
    {
      company: "Skylink Travels LLC",
      href: "https://skylinktravels.net/", // Update with actual company URL if available
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "https://skylinktravels.net/wp-content/uploads/2023/10/skylink-logo.gif", // Update with actual logo URL if available
      start: "May 2024",
      end: "Present",
      description:
        "Developed a full-stack cargo booking application using the MERN stack, integrating fare management and user quotations, which improved booking efficiency and increased customer satisfaction by 15%. Collaborated with cross-functional teams to deliver the project within 8 weeks, consistently meeting client deadlines and requirements.",
    },
    {
      company: "Indian Institute of Technology, Mandi",
      href: "https://www.iitmandi.ac.in/", // Update with actual company URL if available
      badges: [],
      location: "Mandi, India",
      title: "Project Engineer",
      logoUrl: "https://www.iitmandi.ac.in/images/logo_hires.png", // Update with actual logo URL if available
      start: "February 2022",
      end: "September 2023",
      description:
        "Led the development of responsive web applications for academic projects, improving accessibility for over 5,000 users across various research initiatives. Managed the maintenance and optimization of 13+ websites, leading to a 25% improvement in site performance and a significant increase in user engagement.",
    },
    {
      company: "Indian Institute of Technology, Roorkee",
      href: "https://dora.iitr.ac.in/home", // Update with actual company URL if available
      badges: [],
      location: "Roorkee, India",
      title: "Project Assistant (Technical)",
      logoUrl: "https://cmsredesign.channeli.in/library/assets/images/iitrLogo.png", // Update with actual logo URL if available
      start: "July 2021",
      end: "August 2021",
      description:
        "Revitalized the DORA website, resulting in a 30% increase in user interaction and a 40% boost in site traffic. Developed alumni engagement features that significantly increased alumni contributions and participation.",
    },
    {
      company: "Coforge (erstwhile NIIT Technologies)",
      href: "https://www.coforge.com/", // Update with actual company URL if available
      badges: [],
      location: "Greater Noida, India",
      title: "Software Engineer",
      logoUrl: "https://www.coforge.com/hubfs/website-assets/coforge-logo.svg", // Update with actual logo URL if available
      start: "February 2018",
      end: "December 2020",
      description:
        "Resolved critical technical issues in the British Airways CAP project, enhancing system reliability and reducing downtime by 20%. Designed and implemented PEGA-based email campaigns, increasing customer engagement metrics by 25% and improving click-through rates by 15%.",
    },
    {
      company: "USERC",
      href: "https://www.userc.in/", // Update with actual company URL if available
      badges: [],
      location: "Dehradun, India",
      title: "Intern",
      logoUrl: "https://www.userc.in/wp-content/uploads/2018/03/uttarakhand_shasan-1.jpg", // Update with actual logo URL if available
      start: "June 2017",
      end: "July 2017",
      description:
        "Contributed to the development of the Uttarakhand Knowledge Bank app, improving educational resource accessibility for students in the region. Developed and deployed the Himalayan Medicinal Plant Portal, leading to a 30% increase in user engagement with medicinal plant data.",
    },
  ],
  
  education: [
    {
      school: "Birla Institute of Applied Sciences",
      href: "https://www.birlainstitute.co.in/",
      degree: "Masters of Computer Applications (MCA)",
      logoUrl: "https://www.birlainstitute.co.in/Pictures/birla-logo.png", // Update with actual logo URL if available
      start: "2016",
      end: "2018",
    },
    {
      school: "Dev Sanskriti Vishwavidhyalaya",
      href: "https://www.dsvv.ac.in/",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "https://www.dsvv.ac.in//wp-content/uploads/2022/01/Logo2.jpg", // Update with actual logo URL if available
      start: "2013",
      end: "2016",
    },
  ],
  
  projects: [
    {
      title: "Cargo Booking Application",
      href: "#", // Update with actual project URL if available
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "Developed a full-stack cargo booking application using the MERN stack, integrating fare management and user quotations. This project improved booking efficiency and customer satisfaction by 15% and was delivered within 8 weeks.",
      technologies: [
        "Node.js",
        "React.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "#", // Update with actual project URL if available
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add project image URL if available
      video: "", // Add project video URL if available
    },
    {
      title: "Xtractify",
      href: "https://xtractify.vercel.app/", // Update with actual project URL if available
      dates: "Sep 2023 - Present",
      active: true,
      description:
        "Developed Xtractify, a platform that provides insights and analytics from large datasets. Utilizes advanced data processing techniques and visualization tools to help users make data-driven decisions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Docker",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://xtractify.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add project image URL if available
      video: "", // Add project video URL if available
    },
    {
      title: "Announcemate",
      href: "https://announcemate.vercel.app/", // Update with actual project URL if available
      dates: "Jan 2023 - Present",
      active: true,
      description:
        "Built Announcemate, a tool designed to streamline announcement processes and communication within organizations. Focuses on enhancing internal communication and managing announcements efficiently.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://announcemate.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add project image URL if available
      video: "", // Add project video URL if available
    },
    {
      title: "Pure Lifestyle Yoga",
      href: "https://purelifestyleyoga.in", // Update with actual project URL if available
      dates: "Jun 2022 - Present",
      active: true,
      description:
        "Developed and maintain the Pure Lifestyle Yoga website, focusing on providing an engaging online presence for yoga classes. Features include class schedules, instructor bios, and a blog for wellness tips.",
      technologies: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "JavaScript",
        "CSS",
        "WordPress",
      ],
      links: [
        {
          type: "Website",
          href: "https://purelifestyleyoga.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add project image URL if available
      video: "", // Add project video URL if available
    },
    {
      title: "IIT Mandi Website Revamp",
      href: "https://www.iitmandi.ac.in/", // Update with actual project URL if available
      dates: "Feb 2022 - Sep 2023",
      active: true,
      description:
        "Led the complete revamp of the main IIT Mandi website. Developed web applications to support academics, research, and seminars, enhancing functionality and user engagement. Additionally, created and managed websites for various schools and deaneries, contributing to a seamless online experience for over 5,000 users.",
      technologies: [
        "PHP",
        "React.js",
        "TailwindCSS",
        "JavaScript",
        "CSS",
        "WordPress",
        "Drupal",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.iitmandi.ac.in/", // Update with actual project URL if available
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add project image URL if available
      video: "", // Add project video URL if available
    },
  
    {
      title: "DORA Website Revamp",
      href: "https://dora-iitr.vercel.app/", // Update with actual project URL if available
      dates: "Jul 2021 - Aug 2021",
      active: true,
      description:
        "Revitalized the DORA website at IIT Roorkee, resulting in a 30% increase in user interaction and a 40% boost in site traffic. Developed alumni engagement features leading to increased contributions and participation.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "React.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://dora-iitr.vercel.app/", // Update with actual project URL if available
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add project image URL if available
      video: "", // Add project video URL if available
    },
    {
      title: "Uttarakhand Knowledge Bank App",
      href: "#", // Update with actual project URL if available
      dates: "Jun 2017 - Jul 2017",
      active: true,
      description:
        "Contributed to the development of the Uttarakhand Knowledge Bank app during an internship at USERC, enhancing educational resource accessibility for students. Developed and deployed the Himalayan Medicinal Plant Portal, increasing user engagement with medicinal plant data.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "React.js",
      ],
      links: [
        {
          type: "Website",
          href: "#", // Update with actual project URL if available
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add project image URL if available
      video: "", // Add project video URL if available
    },
    
  ],
  

} as const;

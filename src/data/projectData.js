import ecommerceImg from '../assets/projects/e-commerce/8.png';
import ecommerceImg1 from '../assets/projects/e-commerce/1.png';
import ecommerceImg2 from '../assets/projects/e-commerce/2.png';
import ecommerceImg3 from '../assets/projects/e-commerce/3.png';
import ecommerceImg4 from '../assets/projects/e-commerce/4.png';
import ecommerceImg5 from '../assets/projects/e-commerce/5.png';
import ecommerceImg6 from '../assets/projects/e-commerce/6.png';
import ecommerceImg7 from '../assets/projects/e-commerce/7.png';

import internImg from '../assets/projects/intern/1.png';
import internImg2 from '../assets/projects/intern/2.png';
import internImg3 from '../assets/projects/intern/3.png';
import internImg4 from '../assets/projects/intern/4.png';
import internImg5 from '../assets/projects/intern/5.png';
import internImg6 from '../assets/projects/intern/6.png';

import invImg from '../assets/projects/inv/2.png';
import invImg1 from '../assets/projects/inv/1.png';
import invImg2 from '../assets/projects/inv/2.png';
import invImg3 from '../assets/projects/inv/3.png';
import invImg4 from '../assets/projects/inv/4.png';
import invImg5 from '../assets/projects/inv/5.png';
import invImg6 from '../assets/projects/inv/6.png';

import rentImg from '../assets/projects/rent/1.png';
import rentImg1 from '../assets/projects/rent/1.png';
import rentImg2 from '../assets/projects/rent/2.png';
import rentImg3 from '../assets/projects/rent/3.png';
import rentImg4 from '../assets/projects/rent/4.png';
import rentImg5 from '../assets/projects/rent/5.png';
import rentImg6 from '../assets/projects/rent/6.png';
import rentImg7 from '../assets/projects/rent/7.png';
import rentImg8 from '../assets/projects/rent/8.png';
import rentImg9 from '../assets/projects/rent/9.png';
import rentImg10 from '../assets/projects/rent/10.png';

import careImg from '../assets/projects/care/1.png';
import caremock from '../assets/projects/care/thumbnail.png';
import airlineImg from '../assets/projects/airline/1.png';
import airlineImg1 from '../assets/projects/airline/1.png';
import airlineImg2 from '../assets/projects/airline/2.png';
import airlineImg3 from '../assets/projects/airline/3.png';
import airlineImg4 from '../assets/projects/airline/4.png';
import airlineImg5 from '../assets/projects/airline/5.png';
import airlineImg6 from '../assets/projects/airline/6.png';
import airlineImg7 from '../assets/projects/airline/7.png';
import airlineImg8 from '../assets/projects/airline/8.png';

export const rawProjectData = [
    {
        id: 'ecommerce',
        title: 'Motorcycle Parts E-commerce & Services Management System (Capstone Project) - 2025',
        thumbnail: ecommerceImg,
        images: [ecommerceImg, ecommerceImg1, ecommerceImg2, ecommerceImg3, ecommerceImg4, ecommerceImg5, ecommerceImg6, ecommerceImg7],
        demo: '#', code: '#',
        description: 'A full-stack, single-vendor e-commerce and service management system tailored for the motorcycle industry. Beyond standard inventory, order processing, and booking functionalities, this platform features an intelligent AI engine powered by Gemini. The system automates service scheduling by analyzing maintenance history, provides personalized recommendations for future upkeep, and offers basic AI-driven troubleshooting to guide customers. This project demonstrates the integration of generative AI to enhance customer retention and streamline operational workflow.',
        techStack: ['Laravel 12', 'CSS', 'Javascript', 'Bootstrap', 'MySQL', 'AIstudio Gemini API', 'Google Auth', 'Facebook Auth', 'PHPMailer', 'PhilSMS API']
    },
    {
        id: 'intern',
        title: 'Student Record Management System (Internship Project) - 2026',
        thumbnail: internImg,
        images: [internImg, internImg2, internImg3, internImg4, internImg5, internImg6],
        description: 'Developed to digitize the student permanent record system for Naga Central Elementary School. This platform replaces traditional, manual paperwork by providing administrators with a centralized database to securely search, manage, and print student records, significantly improving data retrieval efficiency and record-keeping accuracy.',
        techStack: ['Next.js', 'Bootstrap', 'Supabase', 'PostgreSQL', 'hCaptcha']
    },
    {
        id: 'inv',
        title: 'School Inventory Management System (Personal Project) - 2026',
        thumbnail: invImg,
        images: [invImg1, invImg2, invImg3, invImg4, invImg5, invImg6],
        demo: '#', code: '#',
        description: 'Built to modernize school asset management, this system digitizes the inventory borrowing process. It allows administrators to quickly identify who has checked out specific equipment, track return statuses, and maintain an organized, searchable record of all school-owned items.',
        techStack: ['Next.js', 'Bootstrap', 'Supabase', 'PostgreSQL']
    },
    {
        id: 'rent',
        title: 'Property Rental Management Platform (Academic Project) - 2025 revised in 2026',
        thumbnail: rentImg,
        images: [rentImg1, rentImg2, rentImg3, rentImg4, rentImg5, rentImg6, rentImg7, rentImg8, rentImg9, rentImg10],
        demo: '#', code: '#',
        description: 'A dynamic property rental marketplace featuring a dual-role user architecture. The platform empowers guests to transition into property hosts through an integrated upgrade request system, subject to a secure administrative approval process. Designed to streamline property listings and booking management, this project showcases expertise in role-based access control (RBAC) and end-to-end administrative oversight.',
        techStack: ['Laravel', 'CSS', 'Javascript', 'Bootstrap', 'MySQL', 'Google Auth']
    },
    {
        id: 'airline',
        title: 'Airline Booking Management System (Personal Project) - 2026',
        thumbnail: airlineImg,
        images: [airlineImg1, airlineImg2, airlineImg3, airlineImg4, airlineImg5, airlineImg6, airlineImg7, airlineImg8],
        demo: '#', code: '#',
        description: 'Skyline is an all-in-one system designed to manage every part of an airline, from the ground up. It starts by organizing the basics, like airports, planes, and flight routes. From there, it handles flight scheduling and automatically sets ticket prices based on seat class and special deals. Passengers can easily book their flights, while the system records every reservation in real-time. Finally, it provides clear reports on how much money is being made and how well the flights are running.',
        techStack: ['Laravel', 'CSS', 'Javascript', 'Bootstrap', 'MySQL', 'Google Auth']
    },
    // {
    //     id: 'care',
    //     title: 'Clinic Management System (Academic Project) - 2025',
    //     thumbnail: careImg,
    //     images: [caremock],
    //     demo: '#', code: '#',
    //     description: 'This is an all-in-one system designed to help clinics run smoothly by keeping all information in one place. Instead of using different programs for different tasks, this platform connects everything including patient appointments, medicine inventory, and billing into a single, easy-to-use system. It features six custom dashboards for doctors, admins, patients, cashiers, pharmacists, and receptionists, giving each user access only to the tools they need. By automating daily tasks and keeping data perfectly synced, this system saves time, prevents mistakes, and helps owners easily track how their clinic is doing.',
    //     techStack: ['Laravel', 'Bootstrap', 'MySQL', 'Google Auth']
    // },
];
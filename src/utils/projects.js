import netflixGPTImage from '../assets/netflixgpt.png';
import myPortfolioImage from '../assets/portfolio.png';
import buagStoreImage from '../assets/buagstore.png';
import travelWebsiteImage from '../assets/travel.png'

const projects = [
    {
        id: '1',
        title: 'NetflixGPT',
        description: [
            'Architecting a movie recommendation app featuring GenAI API integration for intelligent suggestions, utilizing Redux Toolkit and React Hooks for streamlined state management and dynamic user interaction.',
            'Leveraging TMDB API and Google Firebase to seamlessly fetch and manage movie data, ensuring real-time updates and scalability',
            'Designing a sleek, and responsive UI with Tailwind CSS, enhancing user engagement and satisfaction. Setting NetflixGPT apart as a visually appealing and intuitive platform.'
        ],
        skills: ['React JS', 'Tailwind CSS', 'Redux Toolkit', 'Firebase', 'GenAI API'],
        image: netflixGPTImage,
        link: ''
    },
    {
        id: '2',
        title: 'Portfolio Website',
        description: [
            'Build a sleek portfolio site with React JS and Tailwind CSS, showcasing top-notch frontend skills and contemporary UI design',
            'Ensured seamless user experiences across devices with responsive design principles, adeptly applying mobile-first strategies',
            'Utilized Tailwind CSS for efficient styling and customization, integrating interactive elements for enhanced angagement'
        ],
        skills: ['React JS', 'Tailwind CSS', 'Responsive Web Design'],
        image: myPortfolioImage,
        link: ''
    },
    {
        id: '3',
        title: 'BuaG Store - An e-Commerce Website',
        description: [
            'Developed a robust e-commerce website using WordPress, demonstrating expertise in CMS-driven web development and online retail solutions.',
            'Leveraged WordPress plugins and themes to create a user-friendly shopping experience, ensuring seamless navigation and secure transactions.'
        ],
        skills: ['WordPress', 'Responsive Web Design'],
        image: buagStoreImage,
        link: 'https://buagstore.com/'
    },
    {
        id: '4',
        title: 'Parvat Valley Adventures - A Travel Website',
        description: [
            'Designed and implemented a captivating travel agency website on WordPress, seamlessly blending stunning visuals with intuitive navigation to inspire wanderlust and facilitate trip planning.',
            'Leveraged WordPress plugins and customizations to showcase destination highlights, tour packages, and booking functionalities, delivering a user-centric platform for travelers to explore and book their dream vacations.'
        ],
        skills: ['WordPress', 'Responsive Web Design'],
        image: travelWebsiteImage,
        link: 'https://parvatvalleyadventure.com/'
    }
]

export default projects;
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const scrollDirectionRef = useRef('');

  useEffect(()=>{
    let lastScrollTop = 0;

    const handleScroll = () => {
      
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      //console.log('lastScrollTop',lastScrollTop);
      //console.log('currentScroll',currentScroll);
      if (currentScroll > lastScrollTop) {
        //console.log('down');
        scrollDirectionRef.current.style.top = "-200px";
        
      } else {
        //console.log('up');
        scrollDirectionRef.current.style.top = "0px";
      }
      //console.log('scrollDirectionRef.current',scrollDirectionRef.current);
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  const handleClick = (anchor) => () => {
    console.log('anchor',anchor);

    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={scrollDirectionRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={10}
      transitionProperty="transform"
      transitionDuration=".5s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
    
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            
            <HStack spacing={8}>
              {socials.map((social,index)=>(
                  <a key={index}href={social.url} target="_blank" >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
                  <a  onClick={handleClick('projects')} style={{cursor: "pointer"}} >
                    Projects
                    
                  </a>
                  <a   onClick={handleClick('contactme')} style={{cursor: "pointer"}}>
                    Contact Me
                  </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

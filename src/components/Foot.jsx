import { Button, Typography } from "@material-tailwind/react";
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
 

 
const currentYear = new Date().getFullYear();
 
export default function Foot() {
  return (
    <footer className="relative w-full responsive">
      <div className="mx-auto w-full max-w-7xl px-8">
        
        
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} Jaafar Harabi
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            
            <a href="https://www.linkedin.com/in/jaafar-harabi/" target="_blank" rel="noreferrer" className="text-3xl hover:text-4xl"> <AiFillLinkedin /></a>  
            <a href="https://github.com/jaafar-harabi" target="_blank" rel="noreferrer" className="text-3xl hover:text-4xl"> <AiFillGithub /></a>  

          </div>
        </div>
      </div>
    </footer>
  );
}
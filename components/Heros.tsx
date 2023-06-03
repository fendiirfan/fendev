import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Heros = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  const typedText = "Hello I’m Fendi Irfan Amorokhman 👋 ";
  const delay = 100; // Delay between each character (in milliseconds)
  const eraseDelay = 1000; // Delay before erasing the text (in milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let intervalId: NodeJS.Timeout;

    const typeNextCharacter = () => {
      setText((prevText) => {
        if (isDeleting) {
          // Delete character
          if (prevText.length === 0) {
            isDeleting = false;
            return typedText[currentIndex];
          } else {
            return prevText.slice(0, -1);
          }
        } else {
          // Type character
          if (prevText.length === typedText.length) {
            isDeleting = true;
            clearInterval(intervalId);
            return prevText;
          } else {
            currentIndex++;
            return typedText.slice(0, currentIndex);
          }
        }
      });
    };

    intervalId = setInterval(typeNextCharacter, isDeleting ? eraseDelay : delay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row pt-20">
        <div className="flex flex-col items-center z-0 md:w-1/2">
          <div className="flex flex-col justify-center  mx-10 max-width-component w-full px-10">
            <img src="fendev_no_bg.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center z-0 md:w-1/2">
          <div className="flex flex-col justify-center pt-10 sm:pt-0 md:min-h-screen mx-10 max-width-component w-full px-10">
            <div className="text-5xl font-bold">
              <p className="typing">{text}</p>
              {showCursor && <span className="animate-blink">|</span>}
            </div>
            <div className="mt-5">
              <p>
                You can call me Fendi, I'm a Data and Airtificial Intelligence Engineer Entusiast.
                I'm Currently working as a{' '}
                <a className="font-semibold underline decoration-yellow-400 decoration-2">Data Engineer</a> at{' '}
                <NextLink href="https://www.oyindonesia.com/" passHref>
                  <a className="font-semibold underline decoration-yellow-400 decoration-2">Oyindonesia.com</a>
                </NextLink>
                .
              </p>
            </div>
  
            <div className="flex mt-6 gap-4 mb-5">
              <button onClick={() => { router.push("https://github.com/fendiirfan") }} className="border-2 border-dashed btn btn-outline">
                <AiFillGithub />
              </button>
              <button onClick={() => { router.push("https://www.linkedin.com/in/fendiirfan/") }} className="border-2 border-dashed btn btn-outline">
                <AiFillLinkedin />
              </button>
              <button onClick={() => { router.push("https://docs.google.com/document/d/1M6eMRXu_2Vzi9TGe2EJdzDGmSGIpGh_GzqYijls50qQ/edit?usp=sharing") }} className="border-2 border-dashed btn btn-outline">
                <AiFillFileText />
              </button>
            </div>
  
            <NextLink href={'https://www.linkedin.com/in/fendiirfan/'} passHref>
              <a className="font-semibold underline decoration-yellow-400 decoration-2">More About me!!!</a>
            </NextLink>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Heros;
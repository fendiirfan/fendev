import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import { useState, useEffect } from 'react';

const Heros = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State untuk animasi loading

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
            setIsLoading(false); // Menghentikan animasi loading setelah teks selesai ditampilkan
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
          <div className="flex flex-col justify-center mx-10 max-width-component w-full px-10">
            {/* <img src="fendev_no_bg.webp" alt="" /> */}
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              srcSet="
              fendev_no_bg_vvjroq_c_scale,w_200.webp 200w,
              fendev_no_bg_vvjroq_c_scale,w_502.webp 502w,
              fendev_no_bg_vvjroq_c_scale,w_763.webp 763w,
              fendev_no_bg_vvjroq_c_scale,w_917.webp 917w,
              fendev_no_bg_vvjroq_c_scale,w_1043.webp 1043w,
              fendev_no_bg_vvjroq_c_scale,w_1099.webp 1099w,
              fendev_no_bg_vvjroq_c_scale,w_1271.webp 1271w,
              fendev_no_bg_vvjroq_c_scale,w_1377.webp 1377w,
              fendev_no_bg_vvjroq_c_scale,w_1396.webp 1396w,
              fendev_no_bg_vvjroq_c_scale,w_1400.webp 1400w"
              src="fendev_no_bg_vvjroq_c_scale,w_1400.webp"
              alt=""></img>
          </div>
        </div>
        <div className="flex flex-col items-center z-0 md:w-1/2">
          <div className="flex flex-col justify-center pt-10 sm:pt-0 md:min-h-screen mx-10 max-width-component w-full px-10">
            <div className="text-5xl font-bold">
              <p className="typing">{text}</p>
              {showCursor && <span className="animate-blink">|</span>}
            </div>
            <div className="mt-5">
              <p className='text-justify'>
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
              <button onClick={() => { router.push("https://drive.google.com/file/d/1-kDMbYa7Wo9cnh8Pr4jYTQ99tH_zHBW3/view?usp=sharing") }} className="border-2 border-dashed btn btn-outline">
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
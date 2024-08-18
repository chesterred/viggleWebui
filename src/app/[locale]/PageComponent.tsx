'use client'
import { useRouter } from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { useState } from "react";
import { randomVideo } from "~/data/openaiVideo";
import HeadInfo from "~/components/HeadInfo";
import { useCommonContext } from "~/context/common-context";
import Link from "next/link";
import Tiktok from "~/components/Tiktok";

const PageComponent = ({
  locale = '',
  indexLanguageText,
  initVideoList = [],
  questionText
}) => {
  const router = useRouter();

  const [textStr, setTextStr] = useState('');
  const { setShowGeneratingModal, setShowLoadingModal } = useCommonContext();


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setChooseAPI('FakeSora');
    if (!textStr) {
      setVideoList(randomVideo(2));
      return;
    }
    setShowGeneratingModal(true);
    const body = {
      prompt: textStr
    };
    const response = await fetch(`/${locale}/api/generate`, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    const result = await response.json();
    setShowGeneratingModal(false);
    if (result.data) {
      if (!result.data[0].revised_prompt) {
        return
      }
      const video = {
        revised_prompt: result.data[0].revised_prompt,
        url: result.data[0].url
      }

      // add storage
      const videoHistoryListStr = localStorage.getItem('videoHistoryList');
      if (!videoHistoryListStr) {
        const videoHistoryList = [];
        videoHistoryList.unshift(video);
        localStorage.setItem('videoHistoryList', JSON.stringify(videoHistoryList));
      } else {
        const videoHistoryList = JSON.parse(videoHistoryListStr);
        // check exist
        let exist = false;
        for (let i = 0; i < videoHistoryList.length; i++) {
          const videoHistory = videoHistoryList[i];
          if (videoHistory.revised_prompt == video.revised_prompt) {
            exist = true;
            localStorage.setItem('video', JSON.stringify(video));
            router.push(`/${locale}/playground`)
            return;
          }
        }
        if (!exist) {
          videoHistoryList.unshift(video);
          // const newList = videoHistoryList.slice(0, 3);
          localStorage.setItem('videoHistoryList', JSON.stringify(videoHistoryList));
        }
      }
      localStorage.setItem('video', JSON.stringify(video));
      router.push(`/${locale}/playground`)
    }
  }

  const [videoList, setVideoList] = useState(initVideoList);

  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };

  const [chooseAPI, setChooseAPI] = useState('FakeSora');

  return (
    <>
      <HeadInfo
        title={indexLanguageText.title}
        description={indexLanguageText.description}
        locale={locale}
        page={""}
      />
      <Header locale={locale} indexLanguageText={indexLanguageText} />
      <div>
        <div className=" overflow-hidden bg-white bg-cover bg-center text-white"
          style={{ backgroundImage: 'https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg' }}>
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">
            {/* hero */}
            {/* testhero */}
            <section>
              {/* Container */}
              <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-16 lg:py-16">
                {/* Component */}
                <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 md:grid-cols-2">
                  {/* Heading Div */}
                  <div className="max-w-[720px] lg:max-w-[842px]">
                    <h1 className="mb-4 text-4xl font-semibold text-black md:text-6xl">{indexLanguageText.h1Text} </h1>
                    <p className="mb-6 max-w-[528px] text-xl text-[#636262] md:mb-10 lg:mb-12">{indexLanguageText.pDescription}</p>
                    <Link href="https://aitubo.ai/ai-dance-generator/?ref=nzg2ztm" className="mb-6 mr-4 inline-block rounded-xl bg-purple-600 px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mb-10 lg:mb-12">
                    {questionText.generate}
                    </Link>
                    <Link href="/how-to-use" className="mb-6 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mb-10 lg:mb-12">{questionText.start}</Link>

                  </div>
                  {/* Image Div */}
                  <div className="relative left-4 h-full max-h-[562px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
                    {/* <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg" alt="" className="mx-auto block h-full w-full max-w-[800px] rounded-2xl object-cover" />
                    <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
                    <a href="#" className="absolute bottom-auto left-[50%] right-auto top-1/2 inline-block max-w-full object-contain font-bold text-[#1353fe] max-[767px]:-translate-x-1/2 max-[767px]:-translate-y-1/2 md:bottom-[-48px] md:left-[-48px] md:right-auto md:top-auto">
                      <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639058b0726dee9a8efa473f_Frame%20427322569.svg" alt="" className="inline-block" />
                    </a> */}
                    <Tiktok />
                  </div>
                </div>
              </div>
            </section>

            {/* testhero */}


          

            {/* example videos */}
            <div className={"border-[14px] border-[#ffffff1f] object-fill w-[90%] mx-auto mt-1"}>
              <div className={"mx-auto bg-white"}>
                <div className={"pb-2 border-b-2"}>
                  <h2
                    className={"text-blue-600 pt-4 text-4xl flex justify-center font-semibold items-center"}>{indexLanguageText.soraVideoExample}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-4">
                  {videoList.map((file) => (
                    <div key={file.prompt}>
                      <div
                        className="rounded-xl flex justify-center items-start">
                        <video
                          src={file.videoUrl}
                          controls={true}
                          autoPlay={false}
                          playsInline={true}
                          preload={"metadata"}
                          controlsList={"nodownload"}
                          onMouseOver={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          style={{ width: '90%', height: '270px' }}
                        />
                      </div>
                      <div className={"flex justify-center items-center"}>
                        <p
                          className="pointer-events-none mt-2 block text-sm font-medium text-gray-500 w-[90%]">{indexLanguageText.prompt}: {file.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div key={"more"} className={"px-6 py-4"}>
                  <Link href={`/${locale}/videos`}
                    className={"flex justify-center items-center text-xl text-red-400 hover:text-blue-600"}>
                    {indexLanguageText.moreExample} {'>>'}
                  </Link>
                </div>
              </div>
            </div>

            {/* content */}
            {/* how to */}
            <div className={"border-[14px] border-[#ffffff1f] shadow-lg object-fill w-[90%] mx-auto mt-1"}>
              <div className={"mx-auto bg-white py-8"}>
                <div className={"pb-2 border-b-2"}>
                  <h2
                    className={"text-blue-600 pt-4 text-4xl flex justify-center items-center font-semibold"}>{questionText.h2_1}</h2>
                </div>
                <div className={"w-[96%] text-gray-700 prose mx-auto mt-4"}>
                  <p>
                    {questionText.h2_1_p1}
                  </p>
                  <p>
                    {questionText.h2_1_p2}
                  </p>
                  <p>
                    {questionText.h2_1_p3}
                  </p>
                  <p>
                    {questionText.h2_1_p4}
                  </p>
                  <div className="flex justify-center">
                    <h3 className=" text-blue-600 text-lg">{questionText.h3_1}</h3>
                  </div>
                  <div className="flex justify-start">
                    <h4 className=" text-black">{questionText.h4_1}</h4>
                  </div>
                  <div className="flex justify-start">
                    <h5 className=" text-black">{questionText.h5_1}</h5>
                  </div>
                  <div className={"w-[96%] text-gray-700 prose mx-auto "}>
                    <p>
                      {questionText.h5_1_p1}
                    </p>
                    <p>
                      {questionText.h5_1_p2}
                    </p>
                    <p>
                      {questionText.h5_1_p3}
                    </p>
                  </div>
                  <div className="flex justify-start">
                    <h4 className=" text-black">{questionText.h4_2}</h4>
                  </div>
                  <div className="flex justify-start">
                    <h5 className=" text-black">{questionText.h5_2}</h5>
                  </div>
                  <div className={"w-[96%] text-gray-700 prose mx-auto my-auto "}>
                    <p>
                      {questionText.h5_2_p1}
                    </p>
                    <p>
                      {questionText.h5_2_p2}
                    </p>
                    <p>
                      {questionText.h5_2_p3}
                    </p>
                  </div>

                </div>

              </div>
            </div>
            {/* tips */}
            <div className={"border-[14px] border-[#ffffff1f] shadow-lg object-fill w-[90%] mx-auto mt-1"}>
              <div className={"mx-auto bg-white "}>
                <div className={"w-[96%] text-gray-700 prose mx-auto "}>                <div className="flex justify-center">
                  <h2
                    className={"text-blue-600  text-4xl flex justify-center items-center font-semibold"}>{questionText.h3_2}</h2>

                </div>
                  <div className="flex justify-start">
                    <h4 className="text-black">{questionText.h4_3}</h4>
                  </div>
                  <div className="flex justify-start">
                    <h5 className=" text-black">{questionText.h5_3}</h5>
                  </div>
                  <div className="flex justify-start">
                    <h4 className=" text-black">{questionText.h4_4}</h4>
                  </div>
                  <div className="flex justify-start">
                    <h5 className=" text-black">{questionText.h5_4}</h5>
                  </div>

                </div>

              </div>
            </div>
            {/* prompt */}
            <div className={"border-[14px] border-[#ffffff1f] shadow-lg object-fill w-[90%] mx-auto mt-1"}>
              <div className={"mx-auto bg-white py-8"}>
                <div className="flex justify-center">
                  <h2
                    className={"text-blue-600 pt-4 text-4xl flex justify-center items-center font-semibold"}>{questionText.h2_4}</h2>
                </div>
                <div className={"w-[96%] text-gray-700 prose mx-auto my-auto "}>
                  <p>
                    {questionText.h2_4_p1}
                  </p>
                </div>


              </div>
            </div>

            {/* what is */}
            <div className={"border-[14px] border-[#ffffff1f] shadow-lg object-fill w-[90%] mx-auto mt-1"}>
              <div className={"mx-auto bg-white py-8"}>
                <div className="flex justify-center">
                  <h2
                    className={"text-blue-600 py-4 text-4xl flex justify-center items-center font-semibold"}>{questionText.h2_5}</h2>
                </div>
                <div className={"w-[96%] text-gray-700 prose mx-auto my-auto "}>
                  <p>
                    {questionText.h2_6}
                  </p>
                </div>

              </div>
            </div>
            {/* app */}
            <div className={"border-[14px] border-[#ffffff1f] shadow-lg object-fill w-[90%] mx-auto mt-1"}>
              <div className={"mx-auto bg-white py-8"}>
                <div className="flex justify-center">
                  <h2
                    className={"text-blue-600 py-4 text-4xl flex justify-center items-center font-semibold"}>{questionText.h2_7}</h2>
                </div>
                <div className={"w-[96%] text-gray-700 prose mx-auto my-auto "}>
                  <p>
                    {questionText.h2_8}
                  </p>
                </div>

              </div>
            </div>





          </div>
        </div>
      </div>
      <Footer
        locale={locale}
        description={indexLanguageText.description}
      />
    </>
  )


}
export default PageComponent

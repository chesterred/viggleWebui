import Header from '~/components/Header';
import Footer from '~/components/Footer';
import HeadInfo from "~/components/HeadInfo";
import DiscordButton from '~/components/DiscordButton';

const PageComponent = ({
  locale = '',
  privacyPolicyLanguageText,
  indexLanguageText,
}) => {

  return (
    <>
      <HeadInfo
        title={privacyPolicyLanguageText.how_title}
        description={privacyPolicyLanguageText.how_description}
        locale={locale}
        page={"/how-to-use"}
      />
      <Header
        locale={locale}
        page={'how-to-use'}
        indexLanguageText={indexLanguageText}
      />
      <main className="  bg-white bg-cover bg-center text-white">
        <div className={"border-[14px] border-[#ffffff1f]  object-fill w-[90%] mx-auto "}>
          <div className={"mx-auto bg-white "}>
            <div className={"w-[96%] text-gray-700 prose mx-auto "}>
              <div className="flex justify-center text-center">
                <h1
                  className={"text-blue-600 mt-6 text-4xl flex justify-center items-center font-semibold"}>{privacyPolicyLanguageText.p2_h1}</h1>

              </div>
              {/* <div className='flex items-center justify-center'>
                <a
                  href="https://aitubo.ai/ai-dance-generator/?ref=nzg2ztm"                  
                  className=" w-full mx-auto text-center"
                >
                  <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    {privacyPolicyLanguageText.generate}
                  </button>
                </a>
              </div> */}


              <div className="flex justify-start">
                <p className="text-black">{privacyPolicyLanguageText.p2_1}</p>
              </div>
              <div className="flex justify-start">
                <p className=" text-black">{privacyPolicyLanguageText.p2_2}</p>
              </div>
              <div className='flex justify-center'>
                <DiscordButton text={privacyPolicyLanguageText.viggle_discord} />
              </div>

              <div className="flex justify-start">
                <p className=" text-black">{privacyPolicyLanguageText.p2_3}</p>
              </div>
              <div className="flex justify-start">
                <p className=" text-black">{privacyPolicyLanguageText.p2_4}</p>
              </div>
              <div className="flex justify-start">
                <p className=" text-black">{privacyPolicyLanguageText.p2_5}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer
        locale={locale}
        description={indexLanguageText.description}
      />
    </>
  )
}

export default PageComponent

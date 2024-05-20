import Image from "next/image";
import Link from "next/link";

const navigation = {
  product: [
    { name: 'ViggleAI.app', href: 'https://viggleai.app' }

  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-of-service' },
  ]
}

export default function Footer({
  locale = '',
  description = ''
}) {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <div id="footer-heading" className="sr-only">
        Footer
      </div>
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* logo and desc */}
          <div className="space-y-8">
            <a href={`/${locale}`}>
              <Image
                className="h-10"
                src="/appicon.svg"
                width={32}
                height={32}
                alt="ViggleAI.app"
              />
            </a>
            <p className="text-sm text-gray-300">
              {description}
            </p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className="text-sm font-semibold leading-6 text-white"></div>
                <ul role="list" className="mt-6 space-y-4">

                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <div className="text-sm font-semibold leading-6 text-white"></div>
                <ul role="list" className="mt-6 space-y-4">

                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* product */}
              <div>
                <div className="text-sm font-semibold leading-6 text-white">Product</div>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.href}`}
                          target={"_blank"}
                          className="text-sm leading-6 text-gray-300 hover:text-[#2d6ae0]">
                          {item.name}
                        </Link>
                      </li>
                    )
                  }
                  )}
                </ul>
              </div>
              {/* product */}
              <div>
                <div className="text-sm font-semibold leading-6 text-white">Friend</div>
                <ul role="list" className="mt-6 space-y-4">
                <a href="https://www.aitoolnet.com/" target="_blank"><img  src="http://www.aitoolnet.com/static/assets/images/logo.svg" alt="aitoolnet.com" /></a>


                </ul>
              </div>
              {/* legal */}
              <div className="mt-10 md:mt-0">
                <div className="text-sm font-semibold leading-6 text-white">Legal</div>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => {
                    let hrefTo = `/${locale}${item.href}`;
                    if (locale == 'en') {
                      hrefTo = `${item.href}`;
                    }
                    return (
                      <li key={item.name}>
                        <Link href={`${hrefTo}`}
                          className="text-sm leading-6 text-gray-300 hover:text-[#2d6ae0]">
                          {item.name}
                        </Link>
                      </li>
                    )
                  }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

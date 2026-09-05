import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/site";
import { container } from "@/lib/styles";
import { Reveal } from "@/components/Reveal";

export function ContactFooter() {
  const { footer } = site;
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-5 bg-dark py-20 text-white tab:pb-[34px]">
      <div className={container}>
        <Reveal>
          <div className="flex flex-col items-start gap-10 tab:flex-row tab:items-center tab:justify-between">
            <h2 className="font-display text-5xl font-medium leading-none tracking-[-0.03em] text-white tab:text-7xl">
              {footer.ctaHeadingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <a
              href={site.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white px-[22px] py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-ink"
            >
              {footer.ctaButtonLabel}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 gap-7 text-[13px] text-[#9a9a9a] tab:mt-[110px] tab:grid-cols-[1.3fr_1fr_1fr_1fr] tab:gap-[30px]">
            <div className="col-span-2 tab:col-span-1">
              <strong className="mb-2 block font-display text-xl font-medium text-white">
                {site.logo}
              </strong>
              {footer.blurb}
            </div>
            <div>
              <strong className="mb-2 block font-medium text-white">
                Location
              </strong>
              {site.location}
            </div>
            <div>
              <strong className="mb-2 block font-medium text-white">
                Email
              </strong>
              <a
                href={site.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {site.email}
              </a>
              <br />
              <a
                href={site.mailtoUrl}
                className="text-xs text-[#7a7a7a] hover:text-white"
              >
                {footer.mailtoFallbackLabel}
              </a>
            </div>
            <div>
              <strong className="mb-2 block font-medium text-white">
                Phone
              </strong>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <FaWhatsapp aria-hidden size={15} />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#2c2c2c] pt-6 text-xs text-[#8a8a8a] tab:mt-[60px] tab:flex-row tab:items-center tab:justify-between">
          <div>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-[22px] hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
          <div>
            © {year} {footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}

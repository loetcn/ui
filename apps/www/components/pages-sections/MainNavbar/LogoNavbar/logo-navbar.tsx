import { LanguageSelector} from "@/components/pages-sections/MainNavbar/LogoNavbar/language-selector";
import Link from "next/link";
import {siteConfig} from "@/config/site";
import {buttonVariants} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import {Component} from "react";

export class LogoNavbar extends Component<{ lang: any }> {
  render() {
    let {lang} = this.props;
    return (
        <>
          <>
            <div className="relative flex items-center justify-center">
              <LanguageSelector lang={lang}/>
            </div>
            <div className="flex-shrink-0">
              <a href="#">
                <img className="w-40" src="/next.svg" alt="Logo"/>
              </a>
            </div>
            <div className="flex  items-center justify-end space-x-4">
              <nav className="flex items-center space-x-1">
                <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                >
                  <div
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      })}
                  >
                    <Icons.gitHub className="h-5 w-5"/>
                    <span className="sr-only">GitHub</span>
                  </div>
                </Link>
                <Link
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                >
                  <div
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      })}
                  >
                    <Icons.twitter className="h-5 w-5 fill-current"/>
                    <span className="sr-only">Twitter</span>
                  </div>
                </Link>

              </nav>
            </div>

          </>

        </>
    )
  }
}

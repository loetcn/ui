"use client"
import {LogoNavbar} from "@/components/pages-sections/MainNavbar/LogoNavbar/logo-navbar";

import {Component} from "react";

export class SiteTopHeader extends Component<{ lang: string }> {
    render() {
        let {lang: string} = this.props;
        return (
            <div className="mr-4 hidden md:flex">
                <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                    <LogoNavbar lang={ this.props.lang}/>
                </div>
            </div>
        )
    }
}

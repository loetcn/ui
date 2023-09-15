"use client"
import { CalendarDays } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { useTranslation } from '@/lib/i18n'
import {Component} from "react";

export  class SearchProduct extends Component<{ lang: string }> {
  async render() {
    let {lang} = this.props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = await useTranslation(lang, 'header')
    return (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Input type="input" placeholder={t('description')}/>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png"/>
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  {t('framework')} – {t('createdBy')} @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70"/>{" "}
                  <span className="text-xs text-muted-foreground">
                {t('joined')} December 2021
              </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
    )
  }
}

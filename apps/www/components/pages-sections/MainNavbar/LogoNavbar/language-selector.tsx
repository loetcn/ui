import { useRouter } from 'next/navigation'
import {useEffect, useState} from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {i18n} from "@/i18n-config"


export const LanguageSelector = ({lang}) => {
  const locales = i18n.locales;

  console.log("LanguageSelector",lang, locales)
    const languageNames = {
        'en': { 'local': 'us', 'name': 'English' },
        'fr': { 'local': 'fr', 'name': 'Français' },
        'es': { 'local': 'es', 'name': 'Español' }
    };
    const router = useRouter()


    const handleValueChange = (newLang) => {
        i18n.locale = newLang; // change the current language
        router.push("/"+newLang); // navigate to the current page to apply the new language
    }

    return (
        <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[120px]" defaultValue={lang} >
                <SelectValue placeholder={<><span className={"fi fi-"+ languageNames[lang].local +" fis"}></span> {languageNames[lang].name}</>} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup >
                    <SelectLabel>Languages</SelectLabel>
                    {locales.map((locale) => (
                        <SelectItem key={locale} value={locale} >
                            <span className={"fi fi-" + languageNames[locale].local +" fis"}></span>
                            {" " + languageNames[locale].name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

"use client";

import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useTheme } from 'next-themes';
import React, {useEffect, useState} from 'react'

function ThemeSwitcher() {
    const {theme, setTheme}=useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[])

    if(!mounted)return null;
    return <Tabs defaultValue={theme}>
        
        <TabsList className='border'>
            <TabsTrigger value='light' onClick={()=>setTheme("light")} className='p-2'>
                <SunIcon className='h-[1.2rem] w-[1.2rem]' />
            </TabsTrigger>
            <TabsTrigger value='dark' onClick={()=>setTheme("dark")} className='p-2'>
                <MoonIcon className='h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0' />
            </TabsTrigger>
            
        </TabsList>
        
    </Tabs>
  
}

export default ThemeSwitcher
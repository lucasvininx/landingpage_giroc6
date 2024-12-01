import Image from "next/image"

import Logo from '@/assets/logo.svg'

export function Header() {
    return (
        <header className="w-full h-20 bg-black">
            <div>
                <div>
                    <div>
                        <Image
                        src={Logo}
                        alt="Logo"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
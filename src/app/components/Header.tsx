import Image from "next/image"

import Logo from '@/src/assets/logo.svg';
import Arrow from '@/src/assets/arrow-down.svg';

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
                        <ul>
                            <li>
                                <button>
                                    <span>Para você</span>
                                    <Image
                                    src={Arrow}
                                    alt="Arrow"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
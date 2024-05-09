import Link from "next/link";
import logoImg from '@/assets/logo.png'

export default function MainHeader(){
    return <header>
        <Link href='/'>
            <img src={logoImg.src}/>
            Next Level Foods
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href='/meals'>Browse Meals</Link>
                </li>
                <li>
                    <Link href='/community'>Foodie Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}
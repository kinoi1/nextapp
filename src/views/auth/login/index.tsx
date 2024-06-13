import { useRouter } from "next/router";
import styles from "./Login.module.scss";
import Link from 'next/link';

const LoginViews = () => {
    const {push} = useRouter();

    const handleLogin = () => {
        push('/product');
    }
    return (
        <div className={styles.login}>
        <h1>Login Page</h1>
        <button onClick={() =>handleLogin()}>Login</button>
        <p>Belum punya akun? registrasi</p> <Link href="/auth/register">Disini</Link>
    </div>
    )
}

export default LoginViews;


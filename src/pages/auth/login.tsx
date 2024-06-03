import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const {push} = useRouter();

    const handlerLogin = () => {
        push('/product');
    }
    return (
      <div>
          <h1>Login Page</h1>
          <button onClick={() =>handlerLogin()}>Login</button>
          <p>Belum punya akun? registrasi</p> <Link href="/auth/register">Register</Link>
      </div>
    );
  };
  
  export default LoginPage;
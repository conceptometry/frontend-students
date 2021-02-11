import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useStateValue } from '../src/context/StateProvider';

import { useCookies } from 'react-cookie';

const Login = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(['token']);
  useEffect(() => {
    if (cookies.token) {
      router.push('/');
    }
  }, [cookies.token]);

  const [{ token }, dispatch]: any = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formData = {
    email,
    password,
  };

  useEffect(() => {
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        'submit',
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        },
        false
      );
    });
  }, []);

  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const url = `${process.env.NEXT_PUBLIC_API_URI}/auth/login`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    try {
      const res = await fetch(url, options);
      const resJson = await res.json();
      if (resJson.success === true) {
        console.log(resJson);
        dispatch({
          type: 'SET_USER',
          user: resJson.user,
          token: resJson.token,
        });
        setResponse(`Logged In!`);
        setSubmitting(false);
        setCookie('token', `${resJson.token}`, {
          path: '/',
        });
        localStorage.setItem('user', JSON.stringify(resJson.user));
        router.push('/');
      } else {
        console.log(resJson.message);
        const message = `${resJson.message}`;
        setResponse(message);
        setSubmitting(false);
      }
    } catch (e) {
      console.log(e);
      const message = `An error has occured: 50X`;
      setResponse(message);
      setSubmitting(false);
    }
  };

  const [alertClose, setAlertClose] = useState(true);

  useEffect(() => {
    let userAgentString = navigator.userAgent;
    let chrome = userAgentString.indexOf('Chrome') > -1;
    if (!chrome) {
      setAlertClose(false);
    } else {
      setAlertClose(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Conceptometry | Login</title>
      </Head>
      <div className='container'>
        <img
          src='/images/logo.webp'
          alt='Conceptometry Logo'
          className='mx-auto d-flex'
          style={{
            maxWidth: 300,
          }}
        />
        <h2 className='text-center'>Login</h2>
        <form
          className='mt-4 needs-validation'
          noValidate={true}
          onSubmit={handleSubmit}
        >
          <div className='my-3 form-floating'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='form-control w-100'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor='nameField'>Email</label>
            <div className='invalid-feedback'>Please provide a valid email</div>
          </div>
          <div className='my-3 form-floating'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='form-control w-100'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor='nameField'>Password</label>
            <div className='invalid-feedback'>
              Please provide a valid password
            </div>
          </div>
          {submitting === true ? (
            <>
              <button
                disabled
                className='btn btn-primary btn-block bg-gradient w-100'
              >
                <span
                  className='spinner-border spinner-border-sm my-auto mx-auto'
                  role='status'
                  aria-hidden='true'
                ></span>
              </button>
            </>
          ) : (
            <>
              <button
                type='submit'
                className='btn btn-primary btn-block bg-gradient w-100'
              >
                Submit
              </button>
            </>
          )}
        </form>
        {response ? (
          <>
            <p className='text-center mt-1'>{response}</p>
          </>
        ) : (
          <>
            <p className='text-center mt-1'>{response}</p>
          </>
        )}

        <>
          <div
            className={`alert alert-warning alert-dismissible fade text-center mt-3 ${
              !alertClose && `show`
            }`}
            role='alert'
          >
            Hi, we have noticed that your are using a browser other than{' '}
            <strong>Google Chrome.</strong> We recommend that you use Chrome for
            a better experience.
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'
              onClick={() => setAlertClose(true)}
            ></button>
          </div>
        </>
      </div>
    </>
  );
};

export default Login;

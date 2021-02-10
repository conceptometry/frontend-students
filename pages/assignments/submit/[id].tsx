import { Button } from '@material-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Sidebar from '../../../src/components/Sidebar';

export const getServerSideProps = async (ctx) => {
  const isLoggedIn = ctx.req.headers.cookie;
  if (
    isLoggedIn === 'token=null' ||
    isLoggedIn === 'token=undefined' ||
    !isLoggedIn
  ) {
    return {
      props: { data: false },
    };
  } else {
    const token = ctx.req.headers.cookie.split('token=')[1];
    const { id } = ctx.query;
    // Fetch Assignments
    const res = await fetch(`${process.env.API_URI}/assignments/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    let assignmentData;
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      assignmentData = {
        success: false,
        message: message,
        status: res.status,
      };
    } else {
      assignmentData = await res.json();
    }

    // Return data as props
    return {
      props: {
        data: assignmentData,
      },
    };
  }
};

interface Props {
  data?: any;
}

const submitAssignment = ({ data }: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (!data || data === false) {
      router.push('/login');
    }
  }, []);

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

  const id = router.query.id;
  console.log(data);

  const [assignmentFile, setFile] = useState(null);

  const handleSelectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const [submissionText, setSubmissionText] = useState('');
  // let formData;
  // if (typeof window !== "undefined") {

  // }

  const [cookies] = useCookies(['token']);
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState('');
  const submitForm = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', assignmentFile);
    formData.append('submissionText', submissionText);
    setSubmitting(true);
    const url = `${process.env.NEXT_PUBLIC_API_URI}/submissions/submit/${id}`;

    const options = {
      method: 'POST',
      headers: {
        authorization: `Bearer ${cookies.token}`,
      },
      body: formData,
    };
    try {
      const res = await fetch(url, options);

      const resJson = await res.json();
      if (resJson.success === true) {
        setResponse(resJson.message);
        setSubmitting(false);
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

  const dueDate = new Date(data.message.dueDate);
  const formattedDueDate = `${dueDate.getDate()}/${
    dueDate.getMonth() + 1
  }/${dueDate.getFullYear()}`;

  return (
    <>
      <Head>
        <title>Conceptometry | Submit Assignment</title>
      </Head>
      <Sidebar>
        {data && data.success === true ? (
          <>
            <div className='container py-2 '>
              <div className='intro d-flex justify-content-between'>
                <h3 className='my-2 my-auto'>{data.message.name}</h3>
                <p className='my-auto mx-1'>Due Date - {formattedDueDate}</p>
              </div>
            </div>
            <hr className='m-0 p-0' />
            <div className='container mt-2'>
              <h5>Description</h5>
              <p>{data.message.description}</p>
            </div>
            <hr className='m-0 p-0' />
            <div className='container mt-2'>
              <h5>Submit Assignment</h5>
              <form
                noValidate
                className='needs-validation w-100'
                onSubmit={submitForm}
                id='form'
              >
                <div className='my-3 form-floating'>
                  <textarea
                    name='submissionText'
                    placeholder='Submission Text'
                    className='form-control w-100'
                    value={submissionText}
                    id='submissionText'
                    onChange={(e) => {
                      setSubmissionText(e.target.value);
                    }}
                    required
                  />
                  <label htmlFor='nameField'>Submission Text</label>
                  <div className='invalid-feedback'>
                    Please provide some submission text
                  </div>
                </div>
                <div className='submissionMaterials'>
                  <label htmlFor='submissionMaterials'>Submission File</label>
                  <input
                    type='file'
                    name='submissionMaterials'
                    id='files'
                    className='form-control'
                    onChange={handleSelectFile}
                    required
                  />
                </div>

                {submitting ? (
                  <Button
                    variant='contained'
                    disabled
                    className='btn-block btn btn-primary bg-gradient bg-primary text-white shadow-none w-100 mt-4 py-2'
                  >
                    <span
                      className='spinner-border spinner-border-sm my-auto mx-auto'
                      role='status'
                      aria-hidden='true'
                    ></span>
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    type='submit'
                    className='btn-block btn btn-primary bg-gradient bg-primary text-white shadow-none w-100 mt-4'
                  >
                    Submit
                  </Button>
                )}
              </form>

              {response && (
                <>
                  <p className='text-center mt-2'>{response}</p>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            {data.status === 404 ? (
              <>
                <p className='mt-3'>Resource not found, 404</p>
              </>
            ) : (
              <>
                <p className='mt-3'>{data.message}</p>
              </>
            )}
          </>
        )}
      </Sidebar>
    </>
  );
};

export default submitAssignment;

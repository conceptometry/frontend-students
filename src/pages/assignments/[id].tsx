import { useRouter } from 'next/router';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
import Head from 'next/head';
import InfoBlock from '../../components/blocks/InfoBlock';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { parseCookies } from '../../helpers/parseCookies';

export const getServerSideProps = async (ctx) => {
  const isLoggedIn: any = parseCookies(ctx.req).token;
  if (
    isLoggedIn === 'token=null' ||
    isLoggedIn === 'token=undefined' ||
    !isLoggedIn
  ) {
    return { props: { data: false } };
  } else {
    const token = parseCookies(ctx.req).token;
    const id = ctx.query.id;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    const res = await fetch(
      `${process.env.API_URI}/assignments/${id}`,
      options
    );
    let data;
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      data = {
        success: false,
        message: message,
        status: res.status,
      };
    } else {
      data = await res.json();
    }

    return { props: { data } };
  }
};
const SingleAssignment = ({ data }) => {
  let router = useRouter();
  useEffect(() => {
    if (!data || data === false) {
      router.push('/login');
    }
  }, []);
  const { id } = router.query;

  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState([]);
  const [cookies] = useCookies(['token']);
  const [resLoaded, setResLoaded] = useState(false);
  const viewSubmission = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const url = `${process.env.NEXT_PUBLIC_API_URI}/submissions/get/${router.query.id}/my`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${cookies.token}`,
      },
    };
    try {
      const res = await fetch(url, options);
      const resJson = await res.json();
      if (resJson.success === true) {
        setResponse(resJson.message);
        setSubmitting(false);
        console.log(response);
        setResLoaded(true);
      } else {
        console.log(resJson.message);
        setSubmitting(false);
      }
    } catch (e) {
      console.log(e);
      setSubmitting(false);
    }
  };
  let formattedDate;
  let formattedCreatedAt;

  if (data) {
    const dueDate = new Date(data.message.dueDate);
    formattedDate =
      dueDate.getDate() +
      '/' +
      (dueDate.getMonth() + 1) +
      '/' +
      dueDate.getFullYear();
    const createdAt = new Date(data.message.createdAt);
    formattedCreatedAt =
      createdAt.getDate() +
      '/' +
      (createdAt.getMonth() + 1) +
      '/' +
      createdAt.getFullYear();
  }
  let formattedSubmssionDate;
  if (resLoaded && response.length > 0) {
    const submissionDate = new Date(response[0].submissionDate);
    formattedSubmssionDate =
      submissionDate.getDate() +
      '/' +
      (submissionDate.getMonth() + 1) +
      '/' +
      submissionDate.getFullYear();
  }
  return (
    <>
      <Head>
        <title>Conceptometry | {data ? data.message.name : 'Assignment'}</title>
      </Head>
      <Sidebar>
        <>
          {data && data.success === true ? (
            <>
              <h2 className='mx-4 mt-2'>{data.message.name}</h2>
              <hr />
              <h3 className='mx-4'>Description</h3>
              <p className='mx-4 my-1 mt-1' style={{ fontSize: 16 }}>
                {data.message.description}
              </p>
              <hr />

              <br />
              <div className='d-flex flex-lg-row flex-column mx-3'>
                <InfoBlock name={'Due Date'} info={formattedDate} />
                <InfoBlock name={'Teacher'} info={data.message.byUser.name} />
              </div>
              <div className='d-flex flex-lg-row flex-column mx-3 mt-lg-3'>
                <div
                  className='w-100 border border-primary border-2 bg-infoblock p-3 mx-md-2 d-flex flex-column mt-lg-0 mt-3'
                  style={{ borderRadius: 12, minHeight: 190 }}
                >
                  <p className='mx-auto mt-3' style={{ fontSize: 18 }}>
                    {'Reference Materials'}
                  </p>

                  {data.message.teacherMaterials ===
                  'No file has been uploaded' ? (
                    <>
                      <p
                        className='m-auto text-center'
                        style={{ fontSize: 26, fontWeight: 500 }}
                      >
                        No file has been uploaded yet
                      </p>
                    </>
                  ) : (
                    <>
                      <a
                        href={data.message.teacherMaterials}
                        target='_blank'
                        rel='noopener noreferrer nofollow noindex'
                        className='m-auto text-center'
                        style={{ fontSize: 26, fontWeight: 500 }}
                      >
                        Click Here
                      </a>
                    </>
                  )}
                </div>
                <InfoBlock name={'Created At'} info={formattedCreatedAt} />
              </div>
              <div className='d-flex flex-column flex-md-row mx-3 mt-3'>
                <Link href={`/assignments/submit/${id}`}>
                  <Button
                    variant='outlined'
                    size='medium'
                    className='mx-0 mx-md-1 w-100 outline-none bg-primary bg-gradient text-white'
                  >
                    Submit Assignment
                  </Button>
                </Link>

                {submitting ? (
                  <>
                    <Button
                      variant='outlined'
                      size='medium'
                      className='mx-0 mx-md-1 mt-2 mt-md-0 w-100 outline-none bg-primary bg-gradient text-white'
                      onClick={viewSubmission}
                    >
                      <span
                        className='spinner-border spinner-border-sm my-auto mx-auto'
                        role='status'
                        aria-hidden='true'
                      ></span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant='outlined'
                      size='medium'
                      className='mx-0 mx-md-1 mt-2 mt-md-0 w-100 outline-none bg-primary bg-gradient text-white'
                      onClick={viewSubmission}
                    >
                      View My Submission
                    </Button>
                  </>
                )}
              </div>
              {resLoaded && (
                <>
                  {response.length === 0 ? (
                    <>
                      <p className='text-center mt-2'>
                        You haven't submitted the assignment yet
                      </p>
                    </>
                  ) : (
                    <>
                      <hr />
                      <div className='container'>
                        <div className='intro d-md-flex justify-content-between'>
                          <div className='byUser'>
                            <h3 className='my-auto'>{data.message.name}</h3>
                          </div>

                          <div className='late'>
                            {response[0].late ? (
                              <>
                                <h6>
                                  <span className='badge rounded-pill bg-danger bg-gradient px-3 py-2 my-auto'>
                                    Late
                                  </span>
                                </h6>
                              </>
                            ) : (
                              <>
                                <h6>
                                  <span className='badge rounded-pill bg-primary bg-gradient px-3 py-2 my-auto'>
                                    On Time
                                  </span>
                                </h6>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className='mx-2'>
                        <h4>Submission Text</h4>
                        <p>{response[0].submissionText}</p>
                      </div>
                      <div className='mx-3 mx-md-3 mw-100 mb-3'>
                        <div className='d-flex flex-lg-row flex-column mw-100'>
                          <InfoBlock
                            name={'Submission Date'}
                            info={formattedSubmssionDate}
                          />
                          <div
                            className='w-100 border border-primary border-2 bg-infoblock p-3 mx-md-2 d-flex flex-column mt-lg-0 mt-3'
                            style={{ borderRadius: 12, minHeight: 190 }}
                          >
                            <p
                              className='mx-auto mt-3'
                              style={{ fontSize: 18 }}
                            >
                              {'Reference Materials'}
                            </p>

                            {response[0].submissionMaterials ===
                            'No file has been uploaded' ? (
                              <>
                                <p
                                  className='m-auto text-center'
                                  style={{ fontSize: 26, fontWeight: 500 }}
                                >
                                  No file has been uploaded yet
                                </p>
                              </>
                            ) : (
                              <>
                                <a
                                  href={response[0].submissionMaterials}
                                  target='_blank'
                                  rel='noopener noreferrer nofollow noindex'
                                  className='m-auto text-center'
                                  style={{ fontSize: 26, fontWeight: 500 }}
                                >
                                  Click Here
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                        <div className='d-flex flex-lg-row flex-column mw-100 mt-3'>
                          {response[0].marks && (
                            <>
                              <InfoBlock
                                name={`Marks`}
                                info={response[0].marks}
                              />
                            </>
                          )}
                          <InfoBlock
                            name={'Submission Remarks'}
                            info={response[0].remarks}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <p className='m-3'>{data.message}</p>
            </>
          )}
        </>
      </Sidebar>
    </>
  );
};

export default SingleAssignment;

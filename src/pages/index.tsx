import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HomeInfoTabs from '../components/Home/InfoTabs';
import Sidebar from '../components/Sidebar';
import { parseCookies } from '../helpers/parseCookies';

export const getServerSideProps = async (ctx) => {
  const isLoggedIn: any = parseCookies(ctx.req).token;
  console.log(isLoggedIn);
  if (
    isLoggedIn === 'token=null' ||
    isLoggedIn === 'token=undefined' ||
    !isLoggedIn
  ) {
    return {
      props: { assignmentData: false, lectureData: false, studentData: false },
    };
  } else {
    const token = parseCookies(ctx.req).token;
    // Fetch Assignments
    const assignmentRes = await fetch(
      `${process.env.API_URI}/assignments?page=1&limit=4`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      }
    );
    let assignmentData;
    if (!assignmentRes.ok) {
      const message = `An error has occured: ${assignmentRes.status}`;
      assignmentData = {
        success: false,
        message: message,
        status: assignmentRes.status,
      };
    } else {
      assignmentData = await assignmentRes.json();
    }

    // Fetch Lectures
    const lectureRes = await fetch(
      `${
        process.env.API_URI
      }/lectures?page=1&limit=4&day=${new Date().getDay()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      }
    );

    let lectureData;
    if (!lectureRes.ok) {
      const message = `An error has occured: ${lectureRes.status}`;
      lectureData = {
        success: false,
        message: message,
        status: lectureRes.status,
      };
    } else {
      lectureData = await lectureRes.json();
    }

    // Return data as props
    return {
      props: {
        assignmentData,
        lectureData,
      },
    };
  }
};

interface Props {
  assignmentData?: any;
  lectureData?: any;
}

export default function Home({ assignmentData, lectureData }: Props) {
  const router = useRouter();
  useEffect(() => {
    if (assignmentData === false || lectureData === false) {
      router.push('/login');
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Conceptometry | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar>
        {assignmentData.success === true || lectureData.success === true ? (
          <>
            <HomeInfoTabs
              lectureData={lectureData}
              assignmentData={assignmentData}
            />
          </>
        ) : (
          <>
            <div className='m-3'>
              <p>{assignmentData.message}</p>
            </div>
          </>
        )}
      </Sidebar>
    </div>
  );
}

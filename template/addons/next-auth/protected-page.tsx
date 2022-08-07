import type { NextPage, GetServerSidePropsContext } from "next";
import { signOut } from "next-auth/react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

const ProtectedPage: NextPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>You are only seeing this page because you are authenticated.</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default ProtectedPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return { redirect: { destination: "/", permanent: false } };
  }

  // You can send the session object as a prop
  return { props: {} };
};

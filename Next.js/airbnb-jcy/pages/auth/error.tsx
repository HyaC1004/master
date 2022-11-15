import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import SingupForm from "../../components/ui/sign/sign-up";

export default function AuthError() {
  const router = useRouter();
  const { error } = router.query;

  if (error === "Duplicated") {
    return <h2>이미 사용중인 이메일입니다.</h2>;
  }
  if (error === "NotEnough") {
    return <SingupForm />;
  }
}

AuthError.isRaw = true;

export const getServerSideProps: GetServerSideProps = async (props) => {
  console.log(props.query);
  return {
    props: {
      error: props.query.error ?? "default",
    },
  };
};

import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return ( 
    <div className="h-full">
      Landing Page (Protected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>

      <div>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

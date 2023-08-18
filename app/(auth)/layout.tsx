const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <main className="h-full bg-[#3b050a] flex items-center justify-center">
        {children}
      </main>
    );
  }
   
  export default AuthLayout;
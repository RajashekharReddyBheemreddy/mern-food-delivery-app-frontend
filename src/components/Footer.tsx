export const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container md:flex-row mx-auto flex flex-col justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          MernEats.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4 mx-10">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

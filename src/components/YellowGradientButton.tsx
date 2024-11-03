function YellowGradientButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className="rounded-lg bg-gradient-to-b from-[#AD8749] to-[#DCBB75] px-8 py-2 text-white shadow-lg shadow-yellow-500/50 transition duration-300 ease-in-out hover:shadow-yellow-500/40 focus:outline-none focus:ring-4 focus:ring-yellow-300">
      {children}
    </button>
  );
}

export default YellowGradientButton;

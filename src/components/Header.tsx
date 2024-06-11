function Header() {
  return (
    <div className="flex max-lg:justify-center gap-16 w-full py-4 px-32 items-center border-b border-gray-600">
      <a className="text-2xl font-bold uppercase" href="/">
        ligmai
      </a>
      <div className="flex gap-5">
        <a href="/">Home</a>
        <a href="/cheat">Cheat</a>
      </div>
    </div>
  );
}

export default Header;
